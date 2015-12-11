var app = angular.module('app', ['ngRoute', 'ngPageTitle'])
.config(function($pageTitleProvider, $routeProvider, $locationProvider) {

	$locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

    /**	
     * Default page title
     */
    $pageTitleProvider.setDefault(App.title);

    /**
     * Route for the home page
     */
	$routeProvider.when('/', {
		templateUrl: App.partials + 'main.html',
		controller: 'Main'
	});

    /**
     * Create routes for all post types
     */
	angular.forEach(App.post_types, function(post_type) {
		var slug = post_type.name;
		var template = {
			archive: App.partials + 'archive-' + post_type.name + '.html',
			single: App.partials + 'single-' + post_type.name + '.html'
		}
		if(post_type.rest_base) {
			slug = post_type.rest_base;
		}
		else {
			if(post_type.rewrite) {
				slug = post_type.rewrite.slug;
			}
			if(post_type.has_archive) {
				$routeProvider.when('/' + post_type.has_archive, {
					templateUrl: template.archive,
					controller: 'Archive',
					resolve: {
						post_type: function() {
							return post_type;
						}
					}
				})
				.otherwise({
					redirectTo: '/'
				});
			}
		}
		$routeProvider.when('/' + slug + '/:slug', {
			templateUrl: template.single,
			controller: 'Single',
			resolve: {
				post_type: function() {
					return post_type;
				}
			}
		})
		.otherwise({
			redirectTo: '/'
		});

	});
    /**
     * Create routes for all post types
     */
	angular.forEach(App.taxonomies, function(taxonomy) {
		var slug = taxonomy.rewrite.slug;
		var template = {
			archive: App.partials + slug + '.html',
		}
		$routeProvider.when('/' + slug + '/:slug', {
			templateUrl: template.archive,
			controller: 'Taxonomy',
			resolve: {
				taxonomy: function() {
					return taxonomy;
				}
			}
		})
		.otherwise({
			redirectTo: '/'
		});
	});
})