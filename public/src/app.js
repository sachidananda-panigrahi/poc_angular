angular.module('ContactsApp', ['ngRoute'])
	.config(function($locationProvider,$routeProvider) {
		$routeProvider
			.when('/contacts',{
			controller: 'ListController',
			templateUrl: 'views/list.html'
		});
		$locationProvider.html5Mode(true);
})