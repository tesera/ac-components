angular.module('acComponents.directives')
    .directive('acHotZoneReportForm', function($state, $rootScope, $q, $timeout, acBreakpoint, acReportData, acFormUtils, acHZRSubmission, MAPBOX_ACCESS_TOKEN, MAPBOX_MAP_ID, store, $anchorScroll, $modal, ngToast) {
        return {
            templateUrl: 'hot-zone-report-form.html',
            replace: true,
            scope: {
                hotZones: '=acHotZones'
            },
            link: function($scope, el, attrs) {

                resetFields();
                initReport();

                $scope.scrollToTop = function () {
                  $anchorScroll.yOffset = 100;
                  $anchorScroll('top');
                };

                function initReport() {
                  $scope.report = {
                    headline: '',
                    dateissued: moment().format('YYYY-MM-DD hh:mm A'),
                    datevalid: moment().format('YYYY-MM-DD hh:mm A'),
                    hotzoneid: null,
                    files: [],
                    data: {
                      criticalFactors: acReportData.hotzone.criticalFactors,
                      terrainAvoidanceList: acReportData.hotzone.terrainAvoidanceList,
                      travelAdvice: acReportData.hotzone.travelAdvice
                    }
                  };
                }

                function resetForm() {
                    $timeout(function () {
                        resetFields();
                        initReport();
                        $scope.submitting = false;
                        $scope.error = false;
                    }, 0);
                }

                function resetFields() {
                  acReportData.hotzone.criticalFactors.reset();
                  acReportData.hotzone.terrainAvoidanceList.reset();
                  acReportData.hotzone.travelAdvice.reset();
                }

                $scope.resetForm = resetForm;

                $scope.goBack = function (formDirty) {
                      resetFields();
                      initReport();
                      $state.go('ac.map');
                };

                $scope.submitForm = function() {
                    if (!$scope.report.hotzoneid) {
                        $scope.invalidLocation = true;
                    }

                    var reqObj = _.cloneDeep($scope.report);

                    reqObj.data = _.reduce($scope.report.data, function(total, item, key){
                        if (item.isCompleted()){
                          total[key] = item.getDTO();
                        }
                        return total;
                    }, {});

                    var token = store.get('token');
                    if (token) {
                        $scope.submitting = true;
                        return acHZRSubmission.submit(reqObj, token).then(function(result) {
                            if (result.data && !('error' in result.data)) {
                                $state.go('ac.map');
                                ngToast.create({
                                  content: 'Your report was successfully submitted.',
                                  class: 'alert alert-success',
                                  dismissOnTimeout: true,
                                  dismissButton: true,
                                  dismissButtonHtml: '&times;'
                                });


                                return result;
                            } else {
                                $scope.submitting = false;
                                $scope.error = true;
                                return $q.reject('error');
                            }
                        }, function(err) {
                            $scope.submitting = false;
                            $scope.error = true;
                            $scope.errormsg = err;
                            return $q.reject(err);
                        });
                    } else {
                        return $q.reject('auth-error');
                    }
                };

            }
        };
    });
