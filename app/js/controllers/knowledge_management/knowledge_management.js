app.controller('knowledgeManagementController', ['$scope','$translate',
    function ($scope, $translate) {

        console.log('Knowledge Controller');
        $scope.addKnowledge = $translate.instant("page.knowledgeManagement.KNOWLEDGE_NAME");
        $scope.dept = $translate.instant("page.knowledgeManagement.KNOWLEDGE_DEPT");
        $scope.class = $translate.instant("page.knowledgeManagement.KNOWLEDGE_CLASS");
        $scope.resp = $translate.instant("page.knowledgeManagement.KNOWLEDGE_RESP");
        $scope.status = $translate.instant("page.knowledgeManagement.KNOWLEDGE_STATUS");

        ////////////

    }]);