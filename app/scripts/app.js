/* global controllers:false */
define(['angular', 'controllers/main'], function (angular, controllers) {
  'use strict';

  return angular.module('angjsApp', ['angjsApp.controllers',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
