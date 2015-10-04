/**
 * Created by Kathleen on 03/02/2015.
 */
angular.module('conmanfrontApp')


    .controller('ArchivedCtrl', function ($http, $scope) {

        $http.get("http://conmanapi.app/api/v1/contacts/archived")
            .success(function(data){
                $scope.contacts = data;
            })

    });