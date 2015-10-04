/**
 * Created by Kathleen on 03/02/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name conmanfrontApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the conmanfrontApp
 */
angular.module('conmanfrontApp')


    .controller('ContactCtrl', function ($http, $scope, $routeParams) {
        $http.get("http://conmanapi.app/api/v1/contacts/"+$routeParams.id, {id: '@id'})
            .success(function(data){
                $scope.contact = data;
            })
    });


