(function () {
    'use strict';
    function accountController(accountService) {
        var vm = this,
            _searchText = '',
            _accounts = {};

        /*members*/
        angular.extend(this, {
            searchText: _searchText,
            accounts: _accounts
        });

        /*functions*/
        angular.extend(this, {
            accountSearch: function () {
                accountService.searchAccountsByName(vm.searchText).then(function (result) {
                    if (result != null)
                    {
                        vm.accounts = result || {};
                    }
                });
            }
        });
    };
    accountController.$inject = ['accountService'];
    angular.module('companyApp').controller('accountController', accountController);
})();