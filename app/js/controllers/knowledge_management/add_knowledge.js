'use strict';

app.controller('AddKnowledgeController', ['$scope', 'toaster',
    function ($scope, toaster) {
        var vm = this;

        vm.knObj = {};
        vm.saveKnowledge = saveKnowledge;
        vm.resetKnowledge = resetKnowledge;

        ////////////

        vm.resetKnowledge();

        function saveKnowledge() {
            vm.resetKnowledge();
            toaster.pop('success', 'Added Successfully', 'Knowledge Added Successfully');
        };

        function resetKnowledge() {
            vm.knObj = {
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
            };
        }

    }]);
