(function () {
    'use strict';
    angular.module('companyApp').factory('accountService', ['$http',function ($http) {

        return {
            searchAccountsByName: _searchAccountsByName
        };

    

        function _searchAccountsByName(searchText) {
            $http({
                method: "GET",
                url: "http://localhost/CompanyApi/account/v1/" + searchText
            }).then(function mySuccess(response) {
                return response.data;
            }, function myError(response) {
                return response.statusText;
            });
        }

    }]);
}
)();