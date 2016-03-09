'use strict';

/**
 * @ngdoc function
 * @name flixetteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flixetteApp
 */
angular.module('flixetteApp')
    .controller('MainCtrl', function($scope, $state, MovieService) {
    
    $scope.randomGenre = function(genres){
        var genreId = Math.floor(Math.random()*genres.length);
        MovieService.genre = genres[genreId];
        MovieService.genres = genres;
        MovieService.categorychosen = true;
        $state.go('result');
    };
    $scope.randomSerious = function() {
        var genres = [99,18,36,10752];
        $scope.randomGenre(genres);
        MovieService.category = 'serious';
    };
    $scope.randomExcited = function() {
        var genres = [28,12,80,9648,37];
        $scope.randomGenre(genres);
        MovieService.category = 'excited';
    };
    $scope.randomLight = function() {
         var genres = [10749,10402,35];
        $scope.randomGenre(genres);
        MovieService.category = 'lighthearted';
    };
    $scope.randomFamily = function() {
        var genres = [10751,16];
        $scope.randomGenre(genres);
        MovieService.category = 'family';
    };
    $scope.randomFantasy = function() {
        var genres = [878,14];
        $scope.randomGenre(genres);
        MovieService.category = 'fantasy';
    };
    $scope.randomScary = function() {
        var genres = [27,53];
        $scope.randomGenre(genres);
        MovieService.category = 'scary';
    };
});
