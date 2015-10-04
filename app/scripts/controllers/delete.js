/**
 * Created by Kathleen on 03/02/2015.
 */
angular.module('conmanfrontApp')


    .controller('DeleteCtrl', function ($http, $scope, $routeParams) {

        $http.get("http://conmanapi.app/api/v1/contacts/"+$routeParams.id)
            .success(function(data){
                $scope.contacts = data;
            })

        $scope.delete = function(){
            $http.delete("http://conmanapi.app/api/v1/contacts/"+$routeParams.id)
                .success(function(data){
                    $scope.contacts = data;
                   alert('Deleted!');
                })
        }
    });