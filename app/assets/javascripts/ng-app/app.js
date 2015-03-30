angular
    .module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
    }]);