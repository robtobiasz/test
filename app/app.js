(function(){

  var app = angular.module('app', [
    'ngAnimate',
    'toastr',
    'app.other',
    'app.main'
  ]);

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'app/main/main.html',
        controller: 'mainCtrl'
      })
      .when('/my_account', {
        templateUrl: 'app/other/other.html',
        controller: 'otherCtrl'
      })
      .when('/transactions', {
        templateUrl: 'app/other/other.html',
        controller: 'otherCtrl'
      })
      .when('/incoming_operations', {
        templateUrl: 'app/other/other.html',
        controller: 'otherCtrl'
      })
      .when('/reset_password', {
        templateUrl: 'app/other/other.html',
        controller: 'otherCtrl'
      })
      .when('/income', {
        templateUrl: 'app/other/other.html',
        controller: 'otherCtrl'
      })
      .otherwise({ redirectTo: '/dashboard'});
    $locationProvider
      .html5Mode(true);
  });


})();
