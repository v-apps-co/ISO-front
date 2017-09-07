'use strict';

app.controller('AddKnowledgeController', ['$scope', '$log', '$translate', 'toaster',
    function ($scope, $log, $translate, toaster) {
        var vm = this;

        vm.knObj = {};
        vm.isSelectKnClass = {};

        vm.initFormValues = initFormValues;
        vm.initIsSelectKnClassValues = initIsSelectKnClassValues;

        vm.onSelectKnClassAvailable = onSelectKnClassAvailable;
        vm.onSelectKnClassNeed = onSelectKnClassNeed;

        vm.knKindRequireValidator = knKindRequireValidator;
        vm.knHowRequireValidator = knHowRequireValidator;

        vm.saveKnowledge = saveKnowledge;

        ////////////

        vm.initFormValues();
        function initFormValues() {
            vm.knObj = {
                name: "",
                dept: "",
                class: "available",
                kind: "",
                how: "",
                place: "",
                period: "",
                plan: "",
                managerName:"",
                notes: ""
            }
        }

        vm.initIsSelectKnClassValues();
        function initIsSelectKnClassValues() {
            vm.isSelectKnClass = {
                available: true,
                need: false
            };

        }

        function onSelectKnClassAvailable() {
            vm.isSelectKnClass.available = true;
            vm.isSelectKnClass.need = false;

            vm.knObj.period = "";
            vm.knObj.plan = "";

            $log.info(vm.knObj);
        }

        function onSelectKnClassNeed() {
            vm.isSelectKnClass.need = true;
            vm.isSelectKnClass.available = false;

            vm.knObj.kind = "";
            vm.knObj.how = "";
            vm.knObj.place = "";

            $log.info(vm.knObj);
        }

        function knKindRequireValidator() {
            if (vm.knObj.kind.trim() != "")
                return true;
            else
                return false;
        }

        function knHowRequireValidator() {
            if (vm.knObj.how.trim() != "")
                return true;
            else
                return false;
        }

        function saveKnowledge() {
            $log.info(vm.knObj);
            toaster.pop('success', 'Added Successfully', 'Knowledge Added Successfully');

            $scope.addKnowledgeForm.reset();
            vm.initFormValues();
            vm.initIsSelectKnClassValues();
        }

    }]);
