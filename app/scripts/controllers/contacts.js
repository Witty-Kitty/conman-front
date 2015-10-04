/**
 * Created by Kathleen on 02/02/2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name conmanfrontApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the conmanfrontApp
 */
angular.module('conmanfrontApp')


    .controller('ContactsCtrl', function ($http, $scope) {

            $http.get("http://conmanapi.app/api/v1/contacts")
                .success(function(data){
                    $scope.contacts = data;
                })

    });




