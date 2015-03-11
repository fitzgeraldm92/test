'use strict';

/**
 * @ngdoc function
 * @name espnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the espnApp
 */
angular.module('espnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
