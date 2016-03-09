'use strict';

/**
 * @ngdoc function
 * @name flixetteApp.controller:ResultCtrl
 * @description
 * # ResultCtrl
 * Controller of the flixetteApp
 */

angular.module('flixetteApp')
    .controller('ResultCtrl', function ($scope, $http, MovieService) {
        var roulette = function () {
            var genre = MovieService.genre;
            $http.get('https://api.themoviedb.org/3/discover/movie?api_key=aa4107fec7bb4b7d821b9c023eabe815&with_genres=' + genre)
                .then(function (response) {
                    $scope.pages = response.data;
                    var page = Math.floor(Math.random() * $scope.pages.total_pages) + 1;
                    $http.get('https://api.themoviedb.org/3/discover/movie?api_key=aa4107fec7bb4b7d821b9c023eabe815&with_genres=' + genre + '&page=' + page)
                        .then(function (response) {
                            $scope.randomPage = response.data;
                            var randomMovie = Math.floor(Math.random() * $scope.randomPage.results.length);
                            $scope.movie = $scope.randomPage.results[randomMovie];
                            var movieId = $scope.movie.id;
                            MovieService.visited[MovieService.category].push(movieId);
                            console.log(MovieService.visited[MovieService.category]);
                            $scope.getMovie(movieId);
                            $scope.number = MovieService.visited[MovieService.category].length - 1;
                        });
                });
        };

        if (MovieService.categorychosen === true) {
            roulette();
        }
        $scope.anotherone = function () {
            var genres = MovieService.genres;
            var genreId = Math.floor(Math.random() * genres.length);
            MovieService.genre = genres[genreId];
            roulette();
            $scope.left = true;
        };
        $scope.getMovie = function (movieId) {
            $http.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=aa4107fec7bb4b7d821b9c023eabe815')
                .then(function (response) {
                    $scope.details = response.data;
                    if ($scope.details.backdrop_path === null) {
                        $scope.details.backdrop_path = 'https://placekitten.com/1001/400';
                    } else {
                        $scope.details.backdrop_path = 'https://image.tmdb.org/t/p/w1000' + $scope.details.backdrop_path;
                    }
                });
        };
        $scope.next = function () {
            if ($scope.number !== MovieService.visited[MovieService.category].length - 1) {
                $scope.number++;
                $scope.getMovie(MovieService.visited[MovieService.category][$scope.number]);
                $scope.left = true;
            } else {
                $scope.right = false;
            }
        };
        $scope.previous = function () {
            if ($scope.number !== 0) {
                $scope.number--;
                $scope.getMovie(MovieService.visited[MovieService.category][$scope.number]);
                $scope.right = true;
            } else {
                $scope.left = false;
            }
        };
    });