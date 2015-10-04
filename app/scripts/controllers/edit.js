/**
 * Created by Kathleen on 03/02/2015.
 */
angular.module('conmanfrontApp')
    .controller('EditCtrl', function ($http, $scope, $routeParams) {

        $http.get("http://conmanapi.app/api/v1/contacts/"+$routeParams.id)
            .success(function(data){
                $scope.contact = data;
            })


        $scope.update = function(item, event){
            var dataObject = {
                first_name : $scope.contact.first_name,
                last_name  : $scope.contact.last_name,
                email_address: $scope.contact.email_address,
                twitter: $scope.contact.twitter
            };
            console.log(dataObject);

            var responsePromise = $http.put("http://conmanapi.app/api/v1/contacts/"+$routeParams.id, dataObject, {});
            responsePromise.success(function(dataFromServer, status, headers, config) {
                alert("Updated!");
            });

            responsePromise.error(function(data, status, headers, config) {
                alert("Submitting form failed!");
            });

        }
    });

