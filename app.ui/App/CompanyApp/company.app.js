(function () {
    'use strict';
    var app = app.module('companyApp', ['ngRoute']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/account', {
            templateUrl: 'App/Companypp/Account/account.tpl.html',
            controller: 'accountController',
            controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/account' });

    }]);
})();