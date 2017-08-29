'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$authProvider', 'JQ_CONFIG', 'MODULE_CONFIG', 'ISO_CONST',
        function ($stateProvider, $urlRouterProvider, $authProvider, JQ_CONFIG, MODULE_CONFIG, ISO_CONST) {

            // Logic
            var layout = "tpl/app.html";
            if (window.location.href.indexOf("material") > 0) {
                layout = "tpl/blocks/material.layout.html";
                $urlRouterProvider.otherwise('/app/dashboard');
            } else {
                $urlRouterProvider.otherwise('/app/dashboard');
            }

            // Navigation Rules
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: layout
                })
                .state('app.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'tpl/app_dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'dashboard',
                    resolve: load(['js/controllers/dashboardController.js'])

                })
                .state('app.knowledgeManagement', {
                    url: '/knowledge/management',
                    templateUrl: 'tpl/knowledge_management/knowledge_management.html',
                    controller: 'knowledgeManagementController',
                    controllerAs: 'knowledgeManagement',
                    resolve: load(['js/controllers/knowledge_management/knowledge_management.js'])
                })
                .state('app.addKnowledge', {
                    url: '/knowledge/add',
                    templateUrl: 'tpl/knowledge_management/add_knowledge.html',
                    controller: 'addKnowledgeController',
                    controllerAs: 'AddKnowledge',
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
                    resolve: load(['js/controllers/signin.js'])
                })
                .state('access.forgotpwd', {
                    url: '/forgotpwd',
                    templateUrl: 'tpl/page_forgotpwd.html'
                })
                .state('access.404', {
                    url: '/404',
                    templateUrl: 'tpl/page_404.html'
                });

            function load(srcs, callback) {
                return {
                    deps: ['$ocLazyLoad', '$q', '$auth', '$log',
                        function ($ocLazyLoad, $q, $auth, $log) {

                            $log.info($auth.isAuthenticated());

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
