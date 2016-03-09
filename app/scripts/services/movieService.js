'use strict';

angular.module('flixetteApp')
    .factory('MovieService', MovieService);

function MovieService() {
    var movieVariables = {
        categorychosen: false,
        genres: [],
        genre: 0,
        visited: { 
                serious: [], 
                excited: [],
                lighthearted: [],
                family: [],
                fantasy: [],
                scary: []
            }
    };

    movieVariables.setVariable = function (key, value) {
        movieVariables[key] = value;
    };

    return movieVariables;
}