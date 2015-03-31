angular
.module('AngularRails', [
    'ngRoute',
    'templates'
]).config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    })
    .when('/one', {
        templateUrl: 'one.html',
        controller: 'HomeCtrl'
      })
    .when('/two', {
        templateUrl: 'two.html',
        controller: 'HomeCtrl'
      })
    .when('/three', {
        templateUrl: 'three.html',
        controller: 'HomeCtrl'
      }) 
    .when('/four', {
        templateUrl: 'four.html',
        controller: 'HomeCtrl'
      })              
    .otherwise({
        redirectTo: '/'
    });
}]);