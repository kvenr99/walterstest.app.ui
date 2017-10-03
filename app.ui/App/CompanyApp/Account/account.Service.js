(function () {
    'use strict';
    angular.module('companyApp').factory('accountService', ['$http',function ($http) {

        var service = {
            searchAccountsByName: _searchAccountsByName
        }

        return service;

        function _searchAccountsByName(searchText) {
            $http({
                method: "GET",
                url: "http://localhost/CompanyApi/account/" + searchText
            }).then(function mySuccess(response) {
                return = response.data;
            }, function myError(response) {
                return response.statusText;
            });
        }

    }]);
}
)();