angular.module("acComponents.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("allmin-icon.html","<svg width=\"28px\" height=\"28px\" viewbox=\"0 0 28 28\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\"><title>all_min</title><g id=\"Styleguide\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\"><g id=\"02_01_Second-proposal-#2\" sketch:type=\"MSArtboardGroup\" transform=\"translate(-30.000000, -101.000000)\" stroke=\"#FFFFFF\"><g id=\"all_min\" sketch:type=\"MSLayerGroup\" transform=\"translate(31.000000, 102.000000)\"><circle id=\"Oval-6\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\" cx=\"13\" cy=\"13\" r=\"13\"></circle><path id=\"Oval-5\" d=\"M20.6424365,23.5174622 C18.4973383,25.078868 15.8562401,26 13,26 C10.1408573,26 7.49729401,25.0769949 5.35102528,23.5126999 C5.35616485,23.5157039 5.35879172,23.5172209 5.35879172,23.5172209 L12.9999995,13 L20.6412083,23.5172209 C20.6412083,23.5172209 20.6416198,23.5173052 20.6424365,23.5174622 Z\" fill=\"#F44336\" sketch:type=\"MSShapeGroup\"></path><path id=\"Oval-1\" d=\"M13,0 C7.1843333,0 2.26060446,3.81883989 0.599648246,9.08568486 C0.623290506,9.01855468 0.636265288,8.98277907 0.636265288,8.98277907 L12.9999995,13 L13,0 Z\" fill=\"#03A9F4\" sketch:type=\"MSShapeGroup\"></path><path id=\"Oval-1\" d=\"M13,0 C18.8156667,0 23.7393955,3.81883989 25.4003518,9.08568486 C25.3767095,9.01855468 25.3637347,8.98277907 25.3637347,8.98277907 L13.0000005,13 L13,0 Z\" fill=\"#3F51B5\" sketch:type=\"MSShapeGroup\"></path><path id=\"Oval-3\" d=\"M7.63867216,23.5467443 C10.8878189,21.1834812 13.0000005,17.3516752 13.0000005,13.0265428 C13.0000005,11.6211191 12.7769788,10.2677848 12.3643955,9 L12.3637352,9.00932187 L0,13.0265428 L7.64120875,23.5437637 C7.64120875,23.5437637 7.64035873,23.5447686 7.63867216,23.5467443 Z\" fill=\"#4CAF50\" sketch:type=\"MSShapeGroup\" transform=\"translate(6.500000, 16.273372) scale(-1, 1) translate(-6.500000, -16.273372) \"></path><path id=\"Oval-3\" d=\"M20.6386717,23.5202015 C23.8878184,21.1569384 26,17.3251324 26,13 C26,11.5945763 25.7769784,10.241242 25.364395,8.97345721 L25.3637347,8.98277907 L12.9999995,13 L20.6412083,23.5172209 C20.6412083,23.5172209 20.6403583,23.5182258 20.6386717,23.5202015 Z\" fill=\"#FFC107\" sketch:type=\"MSShapeGroup\"></path></g></g></g></svg>");
$templateCache.put("danger-icon.html","<div class=\"danger-icon\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"398.5 12.1 555 560\" enable-background=\"new 398.5 12.1 555 560\" xml:space=\"preserve\"><polygon id=\"alp\" points=\"747.7,218.1 623.1,197.6 678.8,109.8\"></polygon><polygon id=\"tln\" points=\"794.2,291 542.8,323.6 616.7,207.4 755.5,230.3\"></polygon><polygon id=\"btl\" points=\"858.3,391.8 499.4,391.8 535.1,335.5 800.6,301.1\"></polygon></svg><span>FORECAST</span></div>");
$templateCache.put("drawer.html","<div class=\"ac-drawer\"><a ng-click=\"drawer.right.visible = false\" ng-if=\"drawerPosition === \'right\'\" class=\"ac-drawer-close visible-xs\"><i class=\"fa fa-close fa-lg\"></i></a><div class=\"ac-drawer-tools\"><ul><li ng-if=\"drawerPosition === \'right\'\" ng-click=\"toggleForecast()\" ng-class=\"{on: drawer.right.visible &amp;&amp; drawer.right.enabled}\" style=\"margin-bottom: 50px;\"><div ac-danger-icon=\"ac-danger-icon\" style=\"height: 60px; width:60px;\"></div></li><li ng-if=\"drawerPosition === \'left\'\" ng-click=\"goToSubmitReport()\" class=\"ac-submit-report-tab on\"><i class=\"fa fa-plus fa-2x\"></i><i class=\"fa fa-tasks fa-inverse fa-2x\"></i><span>Create report</span></li><li ng-if=\"drawerPosition === \'left\'\" class=\"ac-filters ac-min-filters\"><ul ng-init=\"expandedMin = false\" ng-class=\"{opened: expandedMin}\" class=\"list-inline\"><li ng-click=\"expandedMin = !expandedMin\" class=\"ac-default-button on\"><i class=\"fa fa-map-marker fa-inverse fa-2x\"></i><span>MIN Filters</span></li><li ng-repeat=\"minFilter in minFilters\" ng-if=\"expandedMin\" ng-click=\"toggleFilter(\'minFilter:\'+ minFilter)\" ng-class=\"{on: getMinFilters(minFilter)}\"><div ac-allmin-icon=\"ac-allmin-icon\" ng-if=\"minFilter === \'all min\'\" class=\"report-allmin\"></div><i ng-class=\"\'report-\'+ minFilter\" ng-if=\"minFilter !== \'all min\'\" class=\"fa fa-map-marker fa-inverse fa-2x\"></i><span ng-class=\"{\'no-top\': minFilter == \'all min\' }\">{{ minFilter }}</span></li></ul></li><li ng-if=\"drawerPosition === \'left\'\" class=\"ac-filters ac-default-filters\"><ul ng-class=\"{opened: expandedDate}\" class=\"list-inline\"><li ng-click=\"toggleDateFilters()\" class=\"ac-default-button on\"><i class=\"fa fa-calendar fa-inverse fa-2x\"></i><span>Date filter</span></li><li ng-repeat=\"dateFilter in dateFilters\" ng-if=\"expandedDate\" ng-click=\"toggleFilter(\'obsPeriod:\'+dateFilter);\" ng-class=\"{on: filters.obsPeriod === dateFilter}\"><i class=\"fa fa-calendar fa-inverse fa-2x\"></i><span>{{ dateFilter }}</span></li></ul></li><!--Previous behaviour where date filter selected is visible--><!--li.ac-filters.ac-date-filters(ng-if=\"drawerPosition === \'left\'\")--><!--  ul.list-inline(ng-class=\"{opened: expandedDate}\")--><!--    li.on(ng-click=\"toggleDateFilters()\")--><!--      i.fa.fa-calendar.fa-inverse.fa-2x--><!--      span {{ filters.obsPeriod }}--><!--    li(ng-repeat=\"dateFilter in dateFilters\", ng-if=\"expandedDate\", ng-click=\"toggleFilter(\'obsPeriod:\'+dateFilter);\", ng-class=\"{hidden: filters.obsPeriod === dateFilter}\")--><!--      i.fa.fa-calendar.fa-inverse.fa-2x--><!--      span {{ dateFilter }}--></ul></div><div ng-transclude=\"ng-transclude\" class=\"ac-drawer-body\"></div></div>");
$templateCache.put("forecast-mini.html","<div class=\"panel\"><div ng-show=\"forecast.externalUrl\" style=\"min-height: 500px;\" class=\"panel-body\"><div class=\"row\"><div class=\"col-xs-12\"><h3 class=\"ac-forecast-region\">{{ forecast.name }}</h3></div></div><div class=\"row\"><div class=\"col-xs-12\"><p>Avalanche information for this region is available &nbsp;<a ng-href=\"{{forecast.externalUrl}}\" target=\"_blank\"><i class=\"fa fa-external-link\">here.</i></a></p></div></div></div><div ng-show=\"forecast.parksUrl\" style=\"min-height: 500px;\" class=\"panel-body\"><div class=\"row\"><div class=\"col-xs-12\"><h3 class=\"ac-forecast-region\">{{ forecast.name }}</h3></div></div><div class=\"row\"><div class=\"col-xs-12\"><p>Avalanche information for this region is available &nbsp;<a ng-href=\"{{forecast.parksUrl}}\" target=\"_blank\"><i class=\"fa fa-external-link\">here.</i></a></p></div></div></div><div ng-hide=\"forecast.externalUrl || forecast.parksUrl\" class=\"panel-body ac-forecast-mini-body\"><div class=\"row\"><div class=\"col-xs-6\"><h4 class=\"ac-forecast-region\">{{ forecast.bulletinTitle | acNormalizeForecastTitle }}</h4></div><div ng-if=\"forecast.region == &quot;kananaskis&quot;\" class=\"col-xs-6\"><a target=\"_blank\" href=\"\" class=\"pull-right\"><img style=\"width:75px;\" src=\"http://www.avalanche.ca/assets/images/kananaskis.jpg\"/></a></div><div ng-if=\"!(forecast.region == &quot;kananaskis&quot;)\" class=\"col-xs-6\"><a target=\"_blank\" href=\"{{sponsor.getText(&quot;sponsor.url&quot;)}}\" class=\"pull-right\"><img src=\"{{sponsor.getText(&quot;sponsor.image-229&quot;)}}\"/></a></div></div><div class=\"row ac-forecast-dates\"><div class=\"col-md-6\"><dl><dd class=\"small\"><strong class=\"ac-text-primary\">DATE ISSUED</strong></dd><dt class=\"small\"><span class=\"ac-text-default\">{{ forecast.dateIssued | date:\'EEEE MMMM d, y h:mm a\'  | uppercase }}</span></dt></dl></div><div class=\"col-md-6\"><dl><dd class=\"small\"><strong class=\"ac-text-primary\">VALID UNTIL</strong></dd><dt class=\"small\"><span class=\"ac-text-default\">{{ forecast.validUntil | date:\'EEEE MMMM d, y h:mm a\' | uppercase }}</span></dt></dl></div></div><div class=\"row\"><div class=\"col-xs-12\"><p class=\"ac-forecast-highlights\"><strong ng-bind-html=\"forecast.highlights\"></strong></p></div></div><div class=\"row\"><div style=\"padding-right:0\" class=\"col-xs-12 observation-tabs\"><ul role=\"tablist\" style=\"text-transform: uppercase;\" class=\"nav nav-pills\"><li class=\"active\"><a href=\"\" role=\"tab\" data-target=\"#forecast\" data-toggle=\"tab\">Forecast</a></li><li><a href=\"\" role=\"tab\" data-target=\"#problems\" data-toggle=\"tab\">Problems</a></li><li><a href=\"\" role=\"tab\" data-target=\"#details\" data-toggle=\"tab\">Details</a></li><li><a href=\"/forecasts/{{forecast.region}}\" role=\"tab\">Full Page</a></li><li><a href=\"/weather\" role=\"tab\">Weather</a></li></ul><div class=\"tab-content\"><div id=\"forecast\" class=\"tab-pane active\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"panel panel-primary\"><div class=\"panel-heading\">{{ forecast.dangerRatings[0].date | dateUtc:\'dddd\' }}</div><div class=\"panel-body ac-forecast-nowcast\"><img ng-show=\"forecast.region\" ng-src=\"{{forecast.region &amp;&amp; apiUrl+\'/api/forecasts/\' + forecast.region  + \'/nowcast.svg\' || \'\'}}\" class=\"ac-nowcast\"/></div><table class=\"table table-condensed ac-forecast-days\"><thead class=\"ac-thead-dark\"><tr><th></th><th>{{ forecast.dangerRatings[1].date | dateUtc:\'dddd\' }}</th><th>{{ forecast.dangerRatings[2].date | dateUtc:\'dddd\' }}</th></tr></thead><tbody><tr><td class=\"ac-veg-zone--alp\"><strong>Alpine</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[1].dangerRating.alp.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[1].dangerRating.alp.replace(\':\', \' \') }}</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[2].dangerRating.alp.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[2].dangerRating.alp.replace(\':\', \' \') }}</strong></td></tr><tr><td class=\"ac-veg-zone--tln\"><strong>Treeline</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[1].dangerRating.tln.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[1].dangerRating.tln.replace(\':\', \' \') }}</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[2].dangerRating.tln.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[2].dangerRating.tln.replace(\':\', \' \') }}</strong></td></tr><tr><td class=\"ac-veg-zone--btl\"><strong>Below Treeline</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[1].dangerRating.btl.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[1].dangerRating.btl.replace(\':\', \' \') }}</strong></td><td class=\"ac-danger-rating--{{ forecast.dangerRatings[2].dangerRating.btl.split(\':\')[1].toLowerCase()}}\"><strong>{{ forecast.dangerRatings[2].dangerRating.btl.replace(\':\', \' \') }}</strong></td></tr><tr><td><strong>Confidence:</strong></td><td colspan=\"2\"><span class=\"ac-text-default\">{{ forecast.confidence }}</span></td></tr></tbody></table><footer id=\"forecast-bulletin\" class=\"col-xs-12\"></footer><div class=\"panel-group\"><div class=\"panel panel-default first\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#collapseTwo\" data-parent=\"#accordion\" data-toggle=\"collapse\" class=\"collapsed\">{{dangerRating.getText(\'generic.title\')}}</a></h4><div id=\"collapseTwo\" class=\"collapse\"><div ng-bind-html=\"dangerRating.getStructuredText(\'generic.body\').asHtml(ctx)\" class=\"panel-body\"></div></div></div><div class=\"panel panel-default last\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#collapseOne\" data-parent=\"#accordion\" data-toggle=\"collapse\" class=\"collapsed\">{{disclaimer.getText(\'generic.title\')}}</a></h4><div id=\"collapseOne\" class=\"collapse\"><div ng-bind-html=\"disclaimer.getStructuredText(\'generic.body\').asHtml(ctx)\" class=\"panel-body\"></div></div></div></div></div></div></div></div><div id=\"problems\" class=\"tab-pane\"><div id=\"problemsAccordion\" class=\"panel-group\"><div ng-repeat=\"problem in forecast.problems\" class=\"panel panel-primary\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#problem{{$index}}\" data-toggle=\"collapse\" data-parent=\"#problemsAccordion\">{{ problem.type }}<i class=\"fa fa-fw fa-level-down pull-right\"></i><small class=\"pull-right\">click to expand</small></a></h4></div><div id=\"problem{{$index}}\" class=\"panel-collapse collapse\"><div class=\"panel-body\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><strong class=\"small\">What Elevations?</strong></div><div class=\"panel-body ac-problem-icon ac-problem-icon--elevations\"><img ng-src=\"{{problem.icons.elevations}}\" class=\"center-block\"/></div></div></div><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><strong class=\"small\">What Aspects?</strong></div><div class=\"panel-body ac-problem-icon ac-problem-icon--aspects\"><img ng-src=\"{{problem.icons.aspects}}\" class=\"center-block\"/></div></div></div></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><strong class=\"small\">Chances of Avalanches?</strong></div><div class=\"panel-body ac-problem-icon ac-problem-icon--likelihood\"><img ng-src=\"{{problem.icons.likelihood}}\" class=\"center-block\"/></div></div></div><div class=\"col-md-6\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><strong class=\"small\">Expected Size?</strong></div><div class=\"panel-body ac-problem-icon ac-problem-icon--expected-size\"><img ng-src=\"{{problem.icons.expectedSize}}\" class=\"center-block\"/></div></div></div></div><div class=\"row\"><div class=\"col-md-12\"><p ng-bind-html=\"problem.comment\" class=\"ac-problem narative\"></p><div class=\"panel panel-default ac-problem-travel-advice\"><div class=\"panel-heading\"><strong class=\"small\">Travel and Terrain Advice</strong></div><div class=\"panel-body\"><p ng-bind-html=\"problem.travelAndTerrainAdvice\"></p></div></div></div></div></div></div></div></div></div><div id=\"details\" class=\"tab-pane\"><div id=\"detailsAccordion\" class=\"panel-group\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#avalancheSummary\" data-toggle=\"collapse\" data-parent=\"#detailsAccordion\">Avalanche Summary<i class=\"fa fa-fw fa-level-down fa-lg pull-right\"></i><small class=\"pull-right\">click to expand</small></a></h4></div><div id=\"avalancheSummary\" class=\"panel-collapse collapse\"><div ng-bind-html=\"forecast.avalancheSummary\" class=\"panel-body\"></div></div></div><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#snowpackSummary\" data-toggle=\"collapse\" data-parent=\"#detailsAccordion\">Snowpack Summary<i class=\"fa fa-fw fa-level-down fa-lg pull-right\"></i><small class=\"pull-right\">click to expand</small></a></h4></div><div id=\"snowpackSummary\" class=\"panel-collapse collapse\"><div ng-bind-html=\"forecast.snowpackSummary\" class=\"panel-body\"></div></div></div><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a href=\"\" data-target=\"#weatherForecast\" data-toggle=\"collapse\" data-parent=\"#detailsAccordion\">Weather Forecast<i class=\"fa fa-fw fa-level-down fa-lg pull-right\"></i><small class=\"pull-right\">click to expand</small></a></h4></div><div id=\"weatherForecast\" class=\"panel-collapse collapse\"><div ng-bind-html=\"forecast.weatherForecast\" class=\"panel-body\"></div></div></div></div></div></div></div></div></div></div>");
$templateCache.put("loading-indicator.html","<div class=\"ac-loading-indicator\"><div class=\"rect1\"></div><div class=\"rect2\"></div><div class=\"rect3\"></div><div class=\"rect4\"></div><div class=\"rect5\"></div></div>");
$templateCache.put("min-back-modal.html","<div class=\"modal-body\"><p>Are you sure you want to exit?</p><p>You will lose all your data!</p></div><div class=\"modal-footer\"><button type=\"button\" ng-click=\"discardAndExit()\" class=\"btn btn-default\">Yes</button><button type=\"button\" ng-click=\"stayOnThePage()\" class=\"btn btn-primary\">No</button></div>");
$templateCache.put("min-map-modal.html","<div class=\"modal-body\"><input type=\"button\" value=\"Save and close\" ng-click=\"save()\" class=\"btn btn-default save-button\"/><div ac-location-select=\"ac-location-select\" latlng=\"params.latlng\" style=\"height: 100%; width: 100%;\" ng-if=\"show\"></div></div>");
$templateCache.put("min-observation-drawer.html","<div class=\"panel\"><div class=\"panel-body\"><div class=\"row\"><div ng-click=\"closeDrawer()\" class=\"pull-right close-drawer\"><i class=\"fa fa-close\"></i></div><div class=\"col-sm-8 col-xs-12\"><h3>{{::sub.title}}</h3></div><div class=\"col-sm-3 col-xs-12\"><a target=\"_blank\" href=\"{{sponsor.getText(&quot;sponsor.url&quot;)}}\" class=\"pull-right\"><img src=\"{{sponsor.getText(&quot;sponsor.image-229&quot;)}}\"/></a></div></div><div class=\"row submission-header\"><div class=\"col-sm-6 section-label\"><i class=\"fa fa-clock-o\"></i><span>Submitted</span></div><div class=\"col-sm-6 section-label full-page-link\"><div ng-click=\"viewFullPage(sub.subid)\" class=\"pull-right\"><i class=\"fa fa-external-link\"></i><span>full page</span></div></div><div class=\"col-sm-12\"><p>By <span> {{::sub.user}} </span></p><p>On {{::sub.dateFormatted}}</p></div></div></div><div class=\"panel-body\"><div class=\"row-fluid observation-tabs\"><ul role=\"tablist\" class=\"nav nav-pills nav-justified\"><li ng-repeat=\"tab in reportTypes\" role=\"presentation\" ng-class=\"[hasReport(tab),{active: tab === sub.requested}]\"><a ng-click=\"changeTab(tab)\" style=\"text-transform: uppercase;\">{{::tab}}</a></li></ul></div><div class=\"row-fluid\"><div class=\"tab-content\"><div ng-repeat=\"tab in reportTypes\" role=\"tabpanel\" id=\"{{tab}}\" ng-class=\"{active: tab === sub.requested}\" class=\"tab-pane\"><div class=\"row-fluid section-label\"><i class=\"fa fa-info-circle\"></i><span>Information</span></div><div ng-repeat=\"ob in sub.obs\"><div ng-if=\"ob.obtype === sub.requested\" ng-repeat=\"item in activeTab\" class=\"submission-header\"><ul class=\"observation-information\"><li ng-if=\"item.type === \'number\' || item.type === \'radio\' || item.type === \'dropdown\' || item.type === \'text\' \" class=\"observation-item\">{{::item.prompt}}<i class=\"fa fa-check\"></i><span class=\"value\">{{::item.value}}</span></li><li ng-if=\"item.type === \'checkbox\'\" class=\"observation-item\">{{::item.prompt}}<ul><li ng-repeat=\"op in item.value track by $index\"><i class=\"fa fa-check\"></i><span class=\"value\">{{op}}</span></li></ul></li><li ng-if=\"item.type === \'datetime\'\" class=\"observation-item\">{{::item.prompt}}<span>&nbsp; {{::item.value | dateformat}}</span></li></ul><div ng-if=\"item.type === \'textarea\'\" class=\"observation-item comments\"><div class=\"row-fluid section-label\"><i class=\"fa fa-comment\"></i><span>Comments</span></div><div class=\"row-fluid\"><div class=\"col-sm-12\">{{::item.value}}</div></div></div></div></div></div></div></div></div><div class=\"panel-body upload-n-share\"><div ng-if=\"sub.uploads.length &gt; 0\" class=\"row\"><div class=\"col-sm-12 section-label\"><i class=\"fa fa-camera\"></i><span>Uploads (click/tap to enlarge)</span></div><div class=\"col-sm-12\"><ul class=\"list-inline\"><li ng-repeat=\"url in sub.thumbs\"><a ng-href=\"{{::url}}\" target=\"_blank\"><img ng-src=\"{{::url}}\" width=\"75\" alt=\"{{::sub.title}}\"/></a></li></ul></div></div><div class=\"row\"><div class=\"col-sm-12 section-label\"><i class=\"fa fa-share-square-o\"></i><span>Share this report</span></div><div class=\"col-sm-12\"><div class=\"col-sm-12\"><ul class=\"list-inline\"><li><a ng-href=\"https://twitter.com/intent/tweet?status={{::sub.shareUrl}}\"><i class=\"fa fa-twitter fa-fw fa-lg\"></i></a></li><li><a ng-href=\"https://www.facebook.com/sharer/sharer.php?u={{::sub.shareUrl}}\"><i class=\"fa fa-facebook fa-fw fa-lg\"></i></a></li><li><a ng-href=\"https://plus.google.com/share?url={{::sub.shareUrl}}\"><i class=\"fa fa-google-plus fa-fw fa-lg\"></i></a></li></ul></div></div></div></div></div>");
$templateCache.put("min-report-form.html","<div class=\"min-form\"><form name=\"acMinForm\" ng-submit=\"submitForm()\" novalidate=\"novalidate\" ng-if=\"!report.subid\" role=\"form\" ac-submission-form-validator=\"ac-submission-form-validator\"><div class=\"form-fields col-xs-12 no-padding\"><div class=\"col-xs-12 col-md-4 form-left-column\"><div class=\"required-info clearfix\"><h3 class=\"form-subtitle\">Step 1. Required Info</h3><div class=\"required-info-data col-xs-12\"><div ng-class=\"{\'has-error\': !acMinForm.title.$valid &amp;&amp; acMinForm.title.$dirty }\" class=\"form-group\"><h4>Name your report</h4><input type=\"text\" name=\"title\" ng-model=\"report.title\" placeholder=\"e.g. Upper Raft River\" required=\"required\" class=\"form-control\"/></div><div ng-class=\"{\'has-error\': !acMinForm.datetime.$valid}\" class=\"form-group\"><h4> Submission date and time</h4><input type=\"datetime\" name=\"datetime\" ng-model=\"report.datetime\" ac-datetime-picker=\"ac-datetime-picker\" class=\"form-control\"/></div><div ng-class=\"{\'has-error\': invalidLatLng}\" class=\"form-group\"><h4> Enter location by map</h4><div ng-click=\"openMapModal()\" class=\"btn-map\"><i class=\"fa fa-map-o\"></i></div><h4>or enter location by lat long</h4><input type=\"text\" ng-class=\"{\'modified\': tempLatlngModified}\" name=\"tempLatlng\" ac-enter=\"saveLocation()\" ng-model=\"report.tempLatlng\" placeholder=\"e.g. 51.522, -188.883\" required=\"required\" class=\"form-control latlng\"/><div role=\"button\" ng-if=\"tempLatlngModified\" ng-click=\"saveLocation()\" class=\"save-location\"><i class=\"fa fa-map-marker\"></i></div><div ng-if=\"invalidLatLng\" class=\"error col-xs-12 no-padding\">Invalid coordinates format</div></div></div></div><div class=\"uploads\"><h3 class=\"form-subtitle\">Step 2. Uploads</h3><p>Add a photo (.jpg or .png) to help tell your story.</p><div class=\"form-group\"><div class=\"col-xs-12 no-padding btn-file\"><div class=\"col-xs-3 no-padding\"><span class=\"btn btn-default btn-styled\">Browse</span></div><input type=\"text\" readonly=\"readonly\" placeholder=\".jpg or .png\" value=\"{{ report.files.length ? report.files.length + \' photos added\' : null}}\" class=\"col-xs-9 no-padding\"/><input type=\"file\" name=\"uploads\" file-model=\"report.files\" accept=\".png,.jpg,.jpeg\" multiple=\"multiple\"/></div></div></div></div><div class=\"col-xs-12 col-md-8 form-right-column\"><h3 id=\"top\" class=\"form-subtitle\">Step 3. Observations</h3><div class=\"announcement\">Add information on one, some, or all tabs, then click SUBMIT at the bottom.</div><tabset type=\"pills\" class=\"observation-tabs\"><!--Quick report--><tab ac-tab-style=\"{{getTabExtraClasses(\'quickReport\')}}\" active=\"tabs[\'quickReport\']\"><tab-heading class=\"tab-head\">Quick</tab-heading><div class=\"tab-text col-xs-12 col-md-8 no-padding\">Use the Quick Report to quickly share information about your trip. You can create a comprehensive\nreport by adding more details in the Avalanche, Snowpack, Weather, and/or Incident tabs.</div><div class=\"fields-group col-xs-12 no-padding\"><div ng-repeat=\"(item, ridingCondition) in report.obs.quickReport.ridingConditions\" class=\"field col-xs-12\"><h4 class=\"field-title col-xs-12 no-padding\"><strong>{{ ::ridingCondition.prompt }}</strong></h4><div class=\"options col-xs-12 col-md-8\"><div ng-if=\"ridingCondition.type==\'multiple\'\" ng-repeat=\"(option, enabled) in ridingCondition.options\" ng-class=\"{\'column-left\':$odd}\" class=\"checkbox col-xs-12 col-md-6 inline\"><label><input type=\"checkbox\" name=\"{{ ::item}}\" ng-model=\"ridingCondition.options[option]\"/>{{ ::option}}</label></div><div ng-if=\"ridingCondition.type==\'single\'\" ng-repeat=\"option in ridingCondition.options\" class=\"radio col-xs-12 col-md-6 inline\"><label><input type=\"radio\" name=\"{{ ::item}}\" ng-model=\"ridingCondition.selected\" ng-value=\"option\"/>{{ ::option}}</label></div></div><div class=\"options col-xs-12 col-md-4\"></div></div><div class=\"field col-xs-12\"><h4 class=\"field-title col-xs-12 no-padding\"><strong>Avalanche conditions</strong></h4><div class=\"options col-xs-12 col-md-8\"><div class=\"checkbox col-xs-12\"><label><input type=\"checkbox\" name=\"slab\" ng-model=\"report.obs.quickReport.avalancheConditions.slab\"/>Slab avalanches today or yesterday.</label></div><div class=\"checkbox col-xs-12\"><label><input type=\"checkbox\" name=\"sound\" ng-model=\"report.obs.quickReport.avalancheConditions.sound\"/>Whumpfing or drum-like sounds or shooting cracks.</label></div><div class=\"checkbox col-xs-12\"><label><input type=\"checkbox\" name=\"snow\" ng-model=\"report.obs.quickReport.avalancheConditions.snow\"/>30cm + of new snow, or significant drifitng, or rain in the last 48 hours.</label></div><div class=\"checkbox col-xs-12\"><label><input type=\"checkbox\" name=\"temp\" ng-model=\"report.obs.quickReport.avalancheConditions.temp\"/>Rapid temperature rise to near zero degrees or wet surface snow.</label></div></div><div class=\"options col-xs-12 col-md-4\"></div></div><div class=\"field col-xs-12\"><h4 class=\"field-title col-xs-12 no-padding\"><strong>Comments</strong></h4><div class=\"options col-xs-12 col-md-8\"><div class=\"help-text\"><p><a href=\"http://www.avalanche.ca/fxresources/Submissions+Guidelines.pdf\" target=\"_blank\">Submission guidelines</a></p></div><div class=\"textarea col-xs-12\"><textarea rows=\"3\" name=\"comment\" ng-model=\"report.obs.quickReport.comment\" style=\"resize: vertical;\" class=\"form-control\"></textarea></div></div><div class=\"options col-xs-12 col-md-4\"></div></div></div></tab><tab ng-repeat=\"(key, tab) in additionalFields\" ac-tab-style=\"{{getTabExtraClasses(key)}}\" active=\"tabs[key]\"><tab-heading class=\"tab-head\">{{ ::tab.name}}</tab-heading><div ng-bind-html=\"tab.text\" class=\"tab-text col-xs-12 col-md-8 no-padding\"></div><div class=\"fields-group col-xs-12 no-padding\"><div ng-repeat=\"(item, av) in report.obs[key].fields\" ng-if=\"av.type!==\'calculated\'\" class=\"field col-xs-12\"><h4 class=\"field-title col-xs-12 no-padding\"><strong>{{ ::av.prompt }}</strong></h4><div class=\"options col-xs-12 col-md-8\"><div ng-if=\"av.helpText\" class=\"help-text\"><p><i class=\"fa fa-question-circle\"></i><span>{{ ::av.helpText}}</span><span ng-if=\"av.guidelines\"><a href=\"{{ ::av.guidelines}}\" target=\"_blank\">Submission guidelines</a></span></p></div><div ng-if=\"av.type==\'checkbox\'\" ng-repeat=\"(option, enabled) in av.options\" ng-class=\"{\'inline\':av.inline, \'column-left\':$odd}\" class=\"checkbox col-md-6 col-xs-12\"><label><input type=\"checkbox\" name=\"{{::item}}\" ng-model=\"av.options[option]\" ng-click=\"validate(item, av)\"/>{{ ::option}}</label></div><div ng-if=\"av.type==\'radio\'\" ng-repeat=\"option in av.options\" ng-class=\"{\'inline\':av.inline, \'column-left\':$odd}\" class=\"radio col-md-6 col-xs-12\"><label><input type=\"radio\" ng-model=\"report.obs[key].fields[item].value\" value=\"{{ ::option}}\"/>{{ ::option}}</label></div><div ng-if=\"av.type==\'number\'\" ng-class=\"{\'inline\':av.inline}\" class=\"number col-xs-12\"><label><input type=\"number\" name=\"{{::item}}\" placeholder=\"{{ av.placeholder ? av.placeholder : \'Number between \'+ av.options.min +\' and \'+av.options.max }}\" ng-model=\"report.obs[key].fields[item].value\" ng-blur=\"validate(item, av)\" class=\"form-control\"/></label></div><div ng-if=\"av.type==\'text\'\" ng-class=\"{\'inline\':av.inline}\" class=\"text col-xs-12\"><label><input type=\"text\" name=\"{{::item}}\" placeholder=\"{{ ::av.prompt }}\" ng-model=\"report.obs[key].fields[item].value\" ng-required=\"report.obs[key].fields[av.constraint.field].options[av.constraint.option]\" ng-blur=\"validate(item, av)\" class=\"form-control\"/></label></div><div ng-if=\"av.type==\'dropdown\'\" ng-class=\"{\'inline\':av.inline, \'column-left\':$odd}\" class=\"select col-md-6 col-xs-12 no-padding\"><select ng-options=\"option for option in av.options\" ng-model=\"report.obs[key].fields[item].value\" class=\"form-control\"><option value=\"\">Select option</option></select></div><div ng-if=\"av.type==\'textarea\'\" class=\"textarea col-xs-12\"><textarea rows=\"3\" ng-model=\"report.obs[key].fields[item].value\" class=\"form-control\"></textarea></div><div ng-if=\"av.type==\'datetime\'\" class=\"datetime-input col-xs-12\"><label for=\"datetime\"><input type=\"datetime\" ng-model=\"report.obs[key].fields[item].value\" ac-datetime-picker=\"ac-datetime-picker\" show-only-date=\"av.showOnlyDate\" placeholder=\"Click to select date\" class=\"form-control\"/></label></div><div ng-if=\"acMinForm[item].$invalid\" class=\"error col-xs-12 no-padding\">{{::av.errorMessage}}</div></div><div class=\"options col-xs-12 col-md-4\"></div></div></div></tab></tabset><tabset type=\"pills\" class=\"observation-tabs bottom col-xs-12 no-padding\"><!--Quick report--><tab ac-tab-style=\"{{getTabExtraClasses(\'quickReport\')}}\" active=\"tabs[\'quickReport\']\" ng-click=\"scrollToTop()\"><tab-heading class=\"tab-head\">Quick</tab-heading></tab><tab ng-repeat=\"(key, tab) in additionalFields\" ac-tab-style=\"{{getTabExtraClasses(key)}}\" active=\"tabs[key]\" ng-click=\"scrollToTop()\"><tab-heading class=\"tab-head\">{{ ::tab.name}}</tab-heading></tab></tabset></div></div><div class=\"footer-buttons col-xs-12 no-padding\"><input type=\"button\" value=\"Back\" ng-click=\"goBack(acMinForm.$dirty)\" class=\"btn btn-default btn-styled\"/><div class=\"submit-btn\"><i ng-show=\"minsubmitting\" class=\"fa fa-fw fa-lg fa-spinner fa-spin\"></i><input type=\"submit\" id=\"submit\" value=\"SUBMIT\" ng-disabled=\"acMinForm.$invalid || report.latlng.length === 0 || minsubmitting\" class=\"btn btn-default btn-styled\"/></div></div></form><div ng-if=\"minerror\"><div role=\"alert\" class=\"alert alert-danger\"><p>There was an error submittting you report.</p><p ng-if=\"minerrormsg\">{{minerrormsg}}</p></div></div></div>");
$templateCache.put("min-report-fullpage.html","<div class=\"panel\"><div class=\"panel-body\"><div class=\"row\"><div ng-click=\"closeDrawer()\" class=\"pull-right close-drawer\"><i class=\"fa fa-close\"></i></div><div class=\"col-sm-8 col-xs-12\"><h3>{{::sub.title}}</h3></div><div class=\"col-sm-3 col-xs-12\"><a target=\"_blank\" href=\"{{sponsor.getText(&quot;sponsor.url&quot;)}}\" class=\"pull-right\"><img src=\"{{sponsor.getText(&quot;sponsor.image-229&quot;)}}\"/></a></div></div><div class=\"row submission-header\"><div class=\"col-sm-6 section-label\"><i class=\"fa fa-clock-o\"></i><span>Submitted</span></div><div class=\"col-sm-6 section-label print-link\"><div ng-click=\"print()\" class=\"pull-right\"><i class=\"fa fa-print\"></i><span>Print friendly</span></div></div><div class=\"col-sm-12\"><p>By <span> {{::sub.user}} </span></p><p>On {{::sub.dateFormatted}}</p></div></div></div><div ng-repeat=\"report in activeReports\" class=\"panel-body observation-list\"><div class=\"row-fluid observation-title\">{{::report.obtype}} report</div><div class=\"row-fluid\"><div class=\"row-fluid section-label\"><i class=\"fa fa-info-circle\"></i><span>Information</span></div><div ng-repeat=\"item in report.ob\" class=\"submission-header\"><ul class=\"observation-information\"><li ng-if=\"item.type === \'number\' || item.type === \'radio\'|| item.type === \'dropdown\'\" class=\"observation-item\">{{::item.prompt}}<i class=\"fa fa-check\"></i><span class=\"value\">{{::item.value}}</span></li><li ng-if=\"item.type === \'checkbox\'\" class=\"observation-item\">{{::item.prompt}}<ul><li ng-repeat=\"op in item.value track by $index\"><i class=\"fa fa-check\"></i><span class=\"value\">{{op}}</span></li></ul></li><li ng-if=\"item.type === \'datetime\'\" class=\"observation-item\">{{::item.prompt}}<span>&nbsp; {{::item.value | dateformat}}</span></li></ul><div ng-if=\"item.type === \'textarea\'\" class=\"observation-item comments\"><div class=\"row-fluid section-label\"><i class=\"fa fa-comment\"></i><span>Comments</span></div><div class=\"row-fluid\"><div class=\"col-sm-12\">{{::item.value}}</div></div></div></div></div></div><div class=\"panel-body upload-n-share\"><div class=\"row-fluid observation-title\">General info</div><div ng-if=\"sub.uploads.length &gt; 0\" class=\"row\"><div class=\"col-sm-12 section-label\"><i class=\"fa fa-camera\"></i><span>Uploads (click/tap to enlarge)</span></div><div class=\"col-sm-12\"><ul class=\"list-inline\"><li ng-repeat=\"url in sub.thumbs\"><a ng-href=\"{{::url}}\" target=\"_blank\"><img ng-src=\"{{::url}}\" width=\"75\" alt=\"{{::sub.title}}\"/></a></li></ul></div></div><div class=\"row share-report\"><div class=\"col-sm-12 section-label\"><i class=\"fa fa-share-square-o\"></i><span>Share this report</span></div><div class=\"col-sm-12\"><div class=\"col-sm-12\"><ul class=\"list-inline\"><li><a ng-href=\"https://twitter.com/intent/tweet?status={{::sub.shareUrl}}\"><i class=\"fa fa-twitter fa-fw fa-lg\"></i></a></li><li><a ng-href=\"https://www.facebook.com/sharer/sharer.php?u={{::sub.shareUrl}}\"><i class=\"fa fa-facebook fa-fw fa-lg\"></i></a></li><li><a ng-href=\"https://plus.google.com/share?url={{::sub.shareUrl}}\"><i class=\"fa fa-google-plus fa-fw fa-lg\"></i></a></li></ul></div></div></div></div></div>");
$templateCache.put("min-report-modal.html","<div id=\"minForm\" role=\"dialog\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button data-dismiss=\"modal\" class=\"close\"><span>close</span></button><h4 class=\"modal-title\">Mountain Information Network Report</h4></div><div class=\"modal-body\"><div ac-min-report-form=\"ac-min-report-form\"></div></div></div></div></div>");
$templateCache.put("min-report-popup-modal.html","<div id=\"mobileMapPopup\" role=\"dialog\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"></div>                <a href=\"#\" data-dismiss=\"modal\" style=\"position: absolute; right: 10px; top: 10px;\" class=\"pull-right\"><i class=\"fa fa-close fa-lg\"></i></a></div></div></div>");
$templateCache.put("social-share.html","<div class=\"well\"><H4>Share this report:</H4><ul class=\"list-inline\"><li><a href=\"https://twitter.com/intent/tweet?url=http://avalanche.ca\"><i class=\"fa fa-twitter fa-fw fa-lg\"></i></a></li><li><a href=\"https://www.facebook.com/sharer/sharer.php?u=http://avalanche.ca\"><i class=\"fa fa-facebook fa-fw fa-lg\"></i></a></li><li><a href=\"https://plus.google.com/share?url=http://avalanche.ca\"><i class=\"fa fa-google-plus fa-fw fa-lg\"></i></a></li></ul></div>");}]);