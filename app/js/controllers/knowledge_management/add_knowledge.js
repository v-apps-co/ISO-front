'use strict';

app.controller('AddKnowledgeController', ['$scope', '$log', '$translate', '$auth', 'toaster', 'FileUploader',
    function ($scope, $log, $translate, $auth, toaster, FileUploader) {
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
                managerName: "",
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


        ////////////////// upload
        var uploader = $scope.uploader = new FileUploader({
            headers: {"Authorization": 'bearer ' + $auth.getToken()},
            url: 'http://localhost:8081/iso/upload'
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function () {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);

    }]);
