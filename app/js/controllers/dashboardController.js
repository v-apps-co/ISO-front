'use strict';

app.controller('DashboardController', ['$scope', '$http', '$state', '$log', '$base64', '$translate', '$auth', 'ISO_CONST', 'httpStatusCodes',
    function ($scope, $http, $state, $log, $base64, $translate, $auth, ISO_CONST, httpStatusCodes) {
        var vm = this;

        vm.userInfo = null;
        vm.authError = null;

        ///////////////////////////////////////

        var req = {
            method: 'GET',
            url: ISO_CONST.API_BASE_URL + "/endpointuser"
        };

        $http(req).then(function (success) {
            vm.userInfo = success.data.userInfo;
        }, function (x) {
            if (x.status == httpStatusCodes.UNAUTHORIZED)
                vm.authError = $translate.instant("msg.AUTH_ERROR");
        });

    }]);
