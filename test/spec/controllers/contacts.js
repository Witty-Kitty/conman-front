/**
* Created by Kathleen on 09/02/2015.
*/

'use strict';

describe('contacts controller', function() {

    describe('ContactsCtrl', function () {
        var scope, ctrl, $httpBackend;

        // Load our app module definition before each test.
        beforeEach(module('conmanfrontApp'));

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service in order to avoid a name conflict.
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('http://conmanapi.app/api/v1/contacts').
                respond([{name: 'Kit Kat'}, {name: 'Katy Kat'}]);

            scope = $rootScope.$new();
            ctrl = $controller('ContactsCtrl', {$scope: scope});
        }));

        it('should create "phones" model with 2 phones fetched from xhr', function() {
            expect(scope.contacts).toBeUndefined();
            $httpBackend.flush();

            expect(scope.contacts).toEqual([{name: 'Kit Kat'},
                {name: 'Katy Kat'}]);
        });

    })
})