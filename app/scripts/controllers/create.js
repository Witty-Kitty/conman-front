/**
 * Created by Kathleen on 03/02/2015.
 */
angular.module('conmanfrontApp')
    .controller('CreateCtrl', function ($http, $scope) {
                $scope.create = function(){
                    var dataObject = {
                        first_name : $scope.contact.first_name,
                        last_name  : $scope.contact.last_name,
                        email_address: $scope.contact.email_address,
                        twitter: $scope.contact.twitter
                    };
                    console.log(dataObject);

                    var responsePromise = $http.post("http://conmanapi.app/api/v1/contacts", dataObject, {});
                    responsePromise.success(function(dataFromServer, status, headers, config) {
                        alert("Created!");
                    });

                    responsePromise.error(function(data, status, headers, config) {
                        alert("Contact creation failed!");
                    });
                }
    })