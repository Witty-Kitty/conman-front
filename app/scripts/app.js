'use strict';

/**
 * @ngdoc overview
 * @name conmanfrontApp
 * @description
 * # conmanfrontApp
 *
 * Main module of the application.
 */
angular
  .module('conmanfrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
        .when('/contacts/:id', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/contacts/:id/edit', {
            templateUrl: 'views/edit.html',
            controller: 'EditCtrl'
        })
        .when('/contacts/:id/delete', {
            templateUrl: 'views/delete.html',
            controller: 'DeleteCtrl'
        })
        .when('/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateCtrl'
        })
        .when('/contacts/:id/archive', {
            templateUrl: 'views/archive.html',
            controller: 'ArchiveCtrl'
        })
        .when('/archived', {
            templateUrl: 'views/archived.html',
            controller: 'ArchivedCtrl'
        })
        .when('/archived/restore/:id', {
            templateUrl: 'views/restore.html',
            controller: 'RestoreCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
