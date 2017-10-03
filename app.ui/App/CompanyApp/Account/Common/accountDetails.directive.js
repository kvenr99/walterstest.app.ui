(function () {
    'use strict';

    
    function accountDetails() {
       
        function accountDetailsCtrl() {
            var vm = this;
        }

        return {
            templateUrl: '/App/CompanyApp/Account/Common/accountDetails.tpl.html',
            restrict: 'E',
            scope: {
                accountsToDisplay: "="
            },
            controller: accountDetailsCtrl,
            controllerAs: 'vm',
            bindToController: true
        }
    }
    accountDetails.$inject = [];
    angular.module('companyApp').directive('accountDetails', accountDetails);

})();

