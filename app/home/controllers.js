///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="../typings/angularjs/angular.d.ts" />
'use strict';
angular.module('traxis').controller('HomeCtrl', ['$scope', HomeCtrl]);

function HomeCtrl($scope) {
    $scope.sections = [
        "Top",
        "This is the middle",
        "Bottom"
    ];
}
