/**
 * Main App File
 *
 * Used to setup Angular with the correct routes, and add 404-stuff.
 */

/**
 * Angular stuff
 */
var app = angular.module('app', ['ngRoute', 'ngPageTitle', 'Helpers'])
.config(function($pageTitleProvider, $routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

    /**
     * Default page title
     */
    $pageTitleProvider.setDefault(App.title);

    /**
     * Add routes from the route definitions file
     */
	angular.forEach(routes, function(route) {
		$routeProvider.when(route.path, route.options);
	});

    $routeProvider.otherwise({
        templateUrl: App.partials + 'error.html',
        controller: function($pageTitle) {
            $pageTitle.set('Page Not Found');
        }
    });
});

/**
 * jQuery Stuff
 */
/**
 * DOM Based routing
 */
(function($) {
    jQuery(document).ready(function($) {
        $(document).foundation();
    });
})(jQuery); // Fully reference jQuery after this point.
