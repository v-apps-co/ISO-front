// lazyload config

angular.module('app')
    /**
     * jQuery plugin config use ui-jq directive , config the js and css files that required
     * key: function name of the jQuery plugin
     * value: array of the css js file located
     */
    .constant('JQ_CONFIG', {
            easyPieChart: ['components/jquery.easy-pie-chart/dist/jquery.easypiechart.js'],
            sparkline: ['components/jquery.sparkline/dist/jquery.sparkline.retina.js'],
            plot: ['components/flot/jquery.flot.js',
                'components/flot/jquery.flot.pie.js',
                'components/flot/jquery.flot.resize.js',
                'components/flot.tooltip/js/jquery.flot.tooltip.min.js',
                'components/flot.orderbars/js/jquery.flot.orderBars.js',
                'components/flot-spline/js/jquery.flot.spline.min.js'],
            moment: ['components/moment/moment.js'],
            screenfull: ['components/screenfull/dist/screenfull.min.js'],
            slimScroll: ['components/slimscroll/jquery.slimscroll.min.js'],
            sortable: ['components/html5sortable/jquery.sortable.js'],
            nestable: ['components/nestable/jquery.nestable.js',
                'components/nestable/jquery.nestable.css'],
            filestyle: ['components/bootstrap-filestyle/src/bootstrap-filestyle.js'],
            slider: ['components/bootstrap-slider/bootstrap-slider.js',
                'components/bootstrap-slider/bootstrap-slider.css'],
            chosen: ['components/chosen/chosen.jquery.min.js',
                'components/chosen/bootstrap-chosen.css'],
            TouchSpin: ['components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                'components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
            wysiwyg: ['components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                'components/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
            dataTable: ['components/datatables.net/js/jquery.dataTables.min.js',
                'components/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                'components/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
            vectorMap: ['components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
                'components/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                'components/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                'components/bower-jvectormap/jquery-jvectormap.css'],
            footable: ['components/footable/v3/js/footable.min.js',
                'components/footable/v3/css/footable.bootstrap.min.css'],
            fullcalendar: ['components/moment/moment.js',
                'components/fullcalendar/dist/fullcalendar.min.js',
                'components/fullcalendar/dist/fullcalendar.css',
                'components/fullcalendar/dist/fullcalendar.theme.css'],
            daterangepicker: ['components/moment/moment.js',
                'components/bootstrap-daterangepicker/daterangepicker.js',
                'components/bootstrap-daterangepicker/daterangepicker-bs3.css'],
            tagsinput: ['components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                'components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']

        }
    )
    .constant('MODULE_CONFIG', [
            {
                name: 'ngGrid',
                files: [
                    'components/ng-grid/build/ng-grid.min.js',
                    'components/ng-grid/ng-grid.min.css',
                    'components/ng-grid/ng-grid.bootstrap.css'
                ]
            },
            {
                name: 'ui.grid',
                files: [
                    'components/angular-ui-grid/ui-grid.min.js',
                    'components/angular-ui-grid/ui-grid.min.css',
                    'components/angular-ui-grid/ui-grid.bootstrap.css'
                ]
            },
            {
                name: 'ui.select',
                files: [
                    'components/angular-ui-select/dist/select.min.js',
                    'components/angular-ui-select/dist/select.min.css'
                ]
            },
            {
                name: 'angularFileUpload',
                files: [
                    'components/angular-file-upload/angular-file-upload.js'
                ]
            },
            {
                name: 'ui.calendar',
                files: ['components/angular-ui-calendar/src/calendar.js']
            },
            {
                name: 'ngImgCrop',
                files: [
                    'components/ngImgCrop/compile/minified/ng-img-crop.js',
                    'components/ngImgCrop/compile/minified/ng-img-crop.css'
                ]
            },
            {
                name: 'angularBootstrapNavTree',
                files: [
                    'components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                    'components/angular-bootstrap-nav-tree/dist/abn_tree.css'
                ]
            },
            {
                name: 'toaster',
                files: [
                    'components/angularjs-toaster/toaster.js',
                    'components/angularjs-toaster/toaster.css'
                ]
            },
            {
                name: 'textAngular',
                files: [
                    'components/textAngular/dist/textAngular-sanitize.min.js',
                    'components/textAngular/dist/textAngular.min.js'
                ]
            },
            {
                name: 'vr.directives.slider',
                files: [
                    'components/venturocket-angular-slider/build/angular-slider.min.js',
                    'components/venturocket-angular-slider/build/angular-slider.css'
                ]
            },
            {
                name: 'com.2fdevs.videogular',
                files: [
                    'components/videogular/videogular.min.js'
                ]
            },
            {
                name: 'com.2fdevs.videogular.plugins.controls',
                files: [
                    'components/videogular-controls/controls.min.js'
                ]
            },
            {
                name: 'com.2fdevs.videogular.plugins.buffering',
                files: [
                    'components/videogular-buffering/buffering.min.js'
                ]
            },
            {
                name: 'com.2fdevs.videogular.plugins.overlayplay',
                files: [
                    'components/videogular-overlay-play/overlay-play.min.js'
                ]
            },
            {
                name: 'com.2fdevs.videogular.plugins.poster',
                files: [
                    'components/videogular-poster/poster.min.js'
                ]
            },
            {
                name: 'com.2fdevs.videogular.plugins.imaads',
                files: [
                    'components/videogular-ima-ads/ima-ads.min.js'
                ]
            },
            {
                name: 'xeditable',
                files: [
                    'components/angular-xeditable/dist/js/xeditable.min.js',
                    'components/angular-xeditable/dist/css/xeditable.css'
                ]
            },
            {
                name: 'smart-table',
                files: [
                    'components/angular-smart-table/dist/smart-table.min.js'
                ]
            },
            {
                name: 'angular-skycons',
                files: [
                    'components/angular-skycons/angular-skycons.js'
                ]
            }
        ]
    )
    // oclazyload config
    .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function ($ocLazyLoadProvider, MODULE_CONFIG) {
        // We configure ocLazyLoad to use the lib script.js as the async loader
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: MODULE_CONFIG
        });
    }])
;
