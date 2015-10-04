'use strict';

/**
 * @ngdoc function
 * @name conmanfrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the conmanfrontApp
 */
angular.module('conmanfrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
