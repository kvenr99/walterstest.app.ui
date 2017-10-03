function () {
    'use strict';
    var app = app.module('companyApp', ['ngRoute']);
    app.config(['$routeProvider', '$httpProvider', function () {
        $routeProvider
            .when('/accounts', {
            templateUrl: '/App/Company/Account/account.tpl.html',
            controller: 'accountController',
            controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/accounts' });

    }]);
})();