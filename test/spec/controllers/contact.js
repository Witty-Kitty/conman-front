///**
//* Created by Kathleen on 09/02/2015.
//*/
//
//'use strict';
//
//describe('Controller: ContactCtrl', function () {
//
//    // load the controller's module
//    beforeEach(module('conmanfrontApp'));
//
//    var ContactCtrl,
//        scope;
//    var $httpBackend;
//    var $routeParams;
//
//    // Initialize the controller and a mock scope
//    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _$routeParams_) {
//        scope = $rootScope.$new();
//        ContactCtrl = $controller('ContactCtrl', {
//            $scope: scope
//        });
//        $httpBackend = _$httpBackend_;
//        $routeParams = _$routeParams_;
//    }));
//
//    //it('should attach a list of awesomeThings to the scope', function () {
//    //    expect(scope.awesomeThings.length).toBe(3);
//    //});
//
//    describe('when retrieving a message', function() {
//        beforeEach(function () {
//            $httpBackend.expectGET("http://conmanapi.app/api/v1/contacts/" + $routeParams.id, {message: 'Ok.'})
//                .respond(200, {message: 'Ok.', id: 0});
//
//            $httpBackend.flush();
//        })
//
//
//    it('should send an http get request returning one contact', function () {
//        $httpBackend.verifyNoOutstandingExpectation();
//        $httpBackend.verifyNoOutstandingRequest();
//    });
//    });
//});

'use strict';

describe('contact controller', function() {

    describe('ContactCtrl', function () {
        var scope, ctrl, $httpBackend, $routeParams;

        // Load our app module definition before each test.
        beforeEach(module('conmanfrontApp'));

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service in order to avoid a name conflict.
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, _$routeParams_) {
            $httpBackend = _$httpBackend_;
            $routeParams  = 1;
            //$routeParams = 1;
            $httpBackend.expectGET('http://conmanapi.app/api/v1/contacts/'+$routeParams.id).
                respond([{name: 'Kit Kat'}]);

            scope = $rootScope.$new();
            ctrl = $controller('ContactCtrl', {$scope: scope});
        }));

        it('should create "phones" model with 2 phones fetched from xhr', function() {
            expect(scope.contact).toBeUndefined();
            $httpBackend.flush();

            expect(scope.contact).toEqual([{name: 'Kit Kat'}]);
        });

    })
})
