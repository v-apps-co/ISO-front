'use strict';

app.controller('addKnowledgeController', ['$scope','toaster',
    function ($scope, toaster) {

        console.log('knowledge controller here!!!!!!!');
        ////////////

        $scope.saveKnowledge = function () {
            $scope.resetKnowledge();
            toaster.pop('success', 'Added Successfully', 'Knowledge Added Successfully');
        };

        $scope.resetKnowledge = function () {
            $scope.kn = {
                name: "",
                dept: "",
                available: false,
                need: false,
                clear: false,
                embedded: false,
                elec: false,
                paper: false,
                place: "",
                notes: ""
            }
            return $scope.kn;
        }

        $scope.resetKnowledge();

    }]);
