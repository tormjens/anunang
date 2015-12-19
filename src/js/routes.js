/**
 * Define app routes
 * @type {Array}
 */
var routes = [
	{
		path: '/',
		options: {
			templateUrl: App.partials + 'main.html',
			controller: 'Main'
		}
	}
];

/**
 * Create routes for all post types
 */
angular.forEach(App.post_types, function(post_type) {
	// the name of the post type
	var slug = post_type.name;

	// the templates for the post type views
	var template = {
		archive: App.partials + 'archive-' + post_type.name + '.html',
		single: App.partials + 'single-' + post_type.name + '.html'
	}

	if(post_type.rest_base) { // this is a native post type
		slug = post_type.name;
	} else { // this is a custom post type, maybe
		if(post_type.rewrite) { // change the slug if a rewrite is done
			slug = post_type.rewrite.slug;
		}
		if(post_type.has_archive) { // create an archive route if it has an archive
			routes.push({
				path: '/' + post_type.has_archive,
				options: {
					templateUrl: template.archive,
					controller: 'Archive',
					resolve: {
						// attach the post type object
						post_type: function() {
							return post_type;
						}
					}
				}
			});
		}
	}
	// for single post type posts
	routes.push({
		path: '/' + slug + '/:slug',
		options: {
			templateUrl: template.single,
			controller: 'Single',
			resolve: {
				// attach the post type object
				post_type: function() {
					return post_type;
				},
				// attach the post type slug
				slug: function() {
					return slug;
				}
			}
		}
	});
});

/**
 * Create routes for all taxonomies
 */
angular.forEach(App.taxonomies, function(taxonomy, taxonomy_slug) {
	var slug = taxonomy.rewrite.slug; // remember the slug
	// taxonomy templates
	var template = {
		archive: App.partials + slug + '.html',
	}
	// the route
	routes.push({
		path: '/' + slug + '/:slug',
		options: {
			templateUrl: template.archive,
			controller: 'Taxonomy',
			resolve: {
				// attach the taxonomy object
				taxonomy: function() {
					return taxonomy;
				},
				// attach the taxonomy slug
				taxonomy_slug: function() {
					return taxonomy_slug;
				}
			}
		}
	});
});