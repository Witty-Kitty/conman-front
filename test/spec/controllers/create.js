///**
// * Created by Kathleen on 09/02/2015.
// */
//
//'use strict';
//
//describe('Controller: CreateCtrl', function () {
//
//    // load the controller's module
//    beforeEach(module('conmanfrontApp'));
//
//    var CreateCtrl,
//        scope;
//    var $httpBackend;
//
//    // Initialize the controller and a mock scope
//    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
//        scope = $rootScope.$new();
//        CreateCtrl = $controller('CreateCtrl', {
//            $scope: scope
//        });
//
//        scope.contact = [{
//           first_name: 'kevin',
//            last_name: 'Sanders',
//            email_address: 'sandersk@gmail.com',
//            twitter: 'sanders'
//        }];
//        $httpBackend = _$httpBackend_;
//
//    }))
//
//
//    describe('when creating new contact', function() {
//        beforeEach(function () {
//            $httpBackend.expectPOST("http://conmanapi.app/api/v1/contacts", scope.contact, {})
//                .respond(200, {message: 'Ok.', id: 0});
//
//
//            //$scope.responsePromise();
//            $httpBackend.flush();
//        })
//
//
//        it('should send an http post request creating one contact', function () {
//            $httpBackend.verifyNoOutstandingExpectation();
//            $httpBackend.verifyNoOutstandingRequest();
//        });
//    });
//
//    //it("should send an http get request returning one contact", function () {
//    //    $httpBackend.whenGET("http://conmanapi.app/api/v1/contacts")
//    //        .respond(200, {message: 'Ok.', id: 0});
//    //
//    //    $httpBackend.flush();
//    //
//    //    expect(service.getData()).toBeDefined();
//    //});
//});

describe('Controller: CreateCtrl', function () {

    // load the controller's module
      beforeEach(module('conmanfrontApp'));


    it("expects POST http calls and returns mock data", inject(function ($http, $httpBackend) {
        var url = 'http://conmanapi.app/api/v1/contacts',
            data = [{
             first_name: 'kevin',
              last_name: 'Sanders',
              email_address: 'sandersk@gmail.com',
              twitter: 'sanders'
          }],
            header = {'LWSSO': 'token value'},
            successCallback = jasmine.createSpy('success'),
            errorCallback = jasmine.createSpy('error');

        // Create expectation
        // headers is a unction that receives http header object and returns true
        // if the headers match the current expectation.
        $httpBackend.expectPOST(url, data, function(headers) {
            // check if the header was send, if it wasn't the expectation won't
            // match the request and the test will fail
            return headers['LWSSO'] === 'token value';
        }).respond(500, 'Oh no!');

        // Call http service
        $http({
            method: 'POST',
            url: url,
            data: data,
            headers: header
        }).success(successCallback).error(errorCallback);

        // flush response
        $httpBackend.flush();

        // Verify expectations
        expect(successCallback).not.toHaveBeenCalled();
        //expect(errorCallback.mostRecentCall.args).toContain('Oh no!');
        //expect(errorCallback.mostRecentCall.args).toContain(500);
    }));


})
