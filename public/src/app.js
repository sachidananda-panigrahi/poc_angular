angular.module('ContactsApp', ['ngRoute', 'ngResource']).config(function($locationProvider,$routeProvider){
    $routeProvider.when('/contacts',{
        controller: 'ListController',
        templateUrl: 'views/list.html'
    })
        .when('/contacts/new', {
            controller: "NewController",
            templateUrl: "views/new.html"
        });
    $locationProvider.html5Mode(true);
});