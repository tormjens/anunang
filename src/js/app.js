var app = angular.module('app', ['ngRoute', 'ngPageTitle'])
.config(function($pageTitleProvider, $routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

    /**
     * Default page title
     */
    $pageTitleProvider.setDefault(App.title);

    /**
     * Add routes
     */
	angular.forEach(routes, function(route) {
		$routeProvider.when(route.path, route.options);
	});
})