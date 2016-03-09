'use strict';

/**
 * @ngdoc overview
 * @name flixetteApp
 * @description
 * # flixetteApp
 *
 * Main module of the application.
 */
angular
  .module('flixetteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('result', {
        url: '/result',
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl',
        controllerAs: 'result'
      });
        $urlRouterProvider.otherwise('/');
  });

angular.module('flixetteApp')
    .controller('AppCtrl', function($scope, $state) {
    $scope.goToStart = function() {
            $state.go('main');
        };
});

