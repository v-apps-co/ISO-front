'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(['$rootScope', '$state', '$stateParams', '$log', '$auth',
        function ($rootScope, $state, $stateParams, $log, $auth) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams) {
                if ($auth.isAuthenticated()) {
                    //$log.info('$stateChangeError app.dashboard');
                    event.preventDefault();
                    $state.go("app.dashboard");
                } else {
                    //$log.info('$stateChangeError access.signin');
                    event.preventDefault();
                    $state.go("access.signin");
                }
            });
        }
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$authProvider', 'JQ_CONFIG', 'MODULE_CONFIG', 'ISO_CONST',
        function ($stateProvider, $urlRouterProvider, $authProvider, JQ_CONFIG, MODULE_CONFIG, ISO_CONST) {

            //$urlRouterProvider.otherwise('/app/dashboard');

            // https://github.com/angular-ui/ui-router/issues/2183
            $urlRouterProvider.otherwise(function ($injector) {
                var $state = $injector.get("$state");
                $state.go('app.dashboard');
            });

            // Navigation Rules
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'tpl/app.html'
                })
                .state('app.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'tpl/app_dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'dashboard',
                    resolve: load(['js/controllers/dashboardController.js'], 'app.dashboard')
                    /*{

                     deps: function ($ocLazyLoad, $auth, $q) {
                     if ($auth.isAuthenticated())
                     return $ocLazyLoad.load([
                     'js/controllers/dashboardController.js'
                     ]);
                     else
                     return $q.reject();
                     }
                     }*/
                })
                .
                state('app.knowledgeManagement', {
                    url: '/knowledge/management',
                    templateUrl: 'tpl/knowledge_management/knowledge_management.html',
                    controller: 'knowledgeManagementController',
                    controllerAs: 'knowledgeManagement',
                    resolve: load(['js/controllers/knowledge_management/knowledge_management.js'])
                })
                .state('app.addKnowledge', {
                    url: '/knowledge/add',
                    templateUrl: 'tpl/knowledge_management/add_knowledge.html',
                    controller: 'AddKnowledgeController',
                    controllerAs: 'addKnowledge',
                    resolve: load(['js/controllers/knowledge_management/add_knowledge.js'])
                })
                // others
                .state('access', {
                    url: '/access',
                    template: '<div ui-view class="fade-in-right-big smooth"></div>'
                })
                .state('access.signin', {
                    url: '/signin',
                    templateUrl: 'tpl/page_signin.html',
                    controller: 'SigninFormController',
                    controllerAs: 'signin',
                    resolve: load(['js/controllers/signin.js'], 'access.signin')
                    /*{

                     deps: function ($ocLazyLoad, $auth, $q) {
                     if (!$auth.isAuthenticated())
                     return $ocLazyLoad.load([
                     'js/controllers/signin.js'
                     ]);
                     else
                     return $q.reject();
                     }
                     }*/
                })
                .state('access.forgotpwd', {
                    url: '/forgotpwd',
                    templateUrl: 'tpl/page_forgotpwd.html'
                })
                .state('access.404', {
                    url: '/404',
                    templateUrl: 'tpl/page_404.html'
                });

            function load(srcs, state, callback) {
                return {
                    deps: ['$ocLazyLoad', '$q', '$log', '$auth',
                        function ($ocLazyLoad, $q, $log, $auth) {

                            if (!$auth.isAuthenticated() && state != 'access.signin') {
                                //$log.info("!$auth.isAuthenticated() && state != 'access.signin'");
                                return $q.reject();
                            }

                            if ($auth.isAuthenticated() && state === 'access.signin') {
                                //$log.info("$auth.isAuthenticated() && state === 'access.signin'");
                                return $q.reject();
                            }

                            //$log.info('in deps');

                            var deferred = $q.defer();
                            var promise = false;
                            srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                            if (!promise) {
                                promise = deferred.promise;
                            }
                            angular.forEach(srcs, function (src) {
                                promise = promise.then(function () {
                                    if (JQ_CONFIG[src]) {
                                        return $ocLazyLoad.load(JQ_CONFIG[src]);
                                    }
                                    angular.forEach(MODULE_CONFIG, function (module) {
                                        if (module.name == src) {
                                            name = module.name;
                                        } else {
                                            name = src;
                                        }
                                    });
                                    return $ocLazyLoad.load(name);
                                });
                            });
                            deferred.resolve();
                            return callback ? promise.then(function () {
                                return callback();
                            }) : promise;


                        }]
                }
            }

            // satellizer configuration
            $authProvider.baseUrl = ISO_CONST.AUTH_BASE_URL;
            $authProvider.loginUrl = 'oauth/token';
            $authProvider.tokenName = 'access_token';

        }
    ]);
