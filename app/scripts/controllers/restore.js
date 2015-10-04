/**
 * Created by Kathleen on 03/02/2015.
 */
angular.module('conmanfrontApp')


    .controller('RestoreCtrl', function ($http, $scope, $routeParams) {

        $http.get("http://conmanapi.app/api/v1/contacts/archived/"+$routeParams.id)
            .success(function(data){
                $scope.contacts = data;
                console.log('hi');
                console.log($scope.contacts);
            })

        $scope.restore = function(){
            $http.put("http://conmanapi.app/api/v1/contacts/"+$routeParams.id+"/restore")
                .success(function(data){
                    $scope.contacts = data;
                    alert('Restored!');
                })
        }
    });