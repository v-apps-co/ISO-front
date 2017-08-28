'use strict';

app.controller('SigninFormController', ['$scope', '$http', '$state', '$log', '$base64', '$translate', '$auth', 'ISO_CONST', 'httpStatusCodes',
    function ($scope, $http, $state, $log, $base64, $translate, $auth, ISO_CONST, httpStatusCodes) {
        var vm = this;

        vm.user = {};
        vm.authError = null;
        vm.login = login;


        ////////////

        function login() {
            $auth.login({}, {
                    params: {grant_type: 'password', username: vm.user.username, password: vm.user.password},
                    paramSerializer: '$httpParamSerializerJQLike',
                    headers: {
                        'Authorization': 'Basic ' + $base64.encode("my-trusted-client:secret")
                    }
                })
                .then(function (success) {
                    if (!$auth.isAuthenticated()) {
                        vm.authError = $translate.instant("msg.SERVER_ERROR");
                    } else {
                        $state.go('app.dashboard');
                    }
                })
                .catch(function (x) {
                    $auth.logout();
                    if (x.status == httpStatusCodes.BAD_REQUEST)
                        vm.authError = $translate.instant("msg.AUTH_ERROR");
                });
        }

        function login1() {
            vm.authError = null;

            var req = {
                method: 'POST',
                url: ISO_CONST.AUTH_BASE_URL + "/oauth/token",
                params: {grant_type: 'password', username: vm.user.username, password: vm.user.password},
                paramSerializer: '$httpParamSerializerJQLike',
                headers: {
                    'Authorization': 'Basic ' + $base64.encode("my-trusted-client:secret")
                }
            };

            $http(req).then(function (success) {
                if (!success.data.access_token) {
                    vm.authError = $translate.instant("msg.SERVER_ERROR");
                } else {
                    $state.go('app.dashboard');
                }
            }, function (x) {
                if (x.status == httpStatusCodes.BAD_REQUEST)
                    vm.authError = $translate.instant("msg.AUTH_ERROR");
            });
        }

    }]);
