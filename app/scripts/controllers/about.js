'use strict';

/**
 * @ngdoc function
 * @name espnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the espnApp
 */
angular.module('espnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
