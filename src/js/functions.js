/**
 * Helper functions
 * @type {Object}
 */
window.helpers = {

	/**
	 * Build the URL to the api
	 * @param  {String} endpoint Endpoint to use
	 * @param  {String} slug     The ID of the resource
	 * @param  {Object} filters  Filters to send
	 * @return {String}          Full url to the API
	 */
	buildApiUrl: function(endpoint, slug, filters) {

		// get the api url from WP
		var url = App.api;

		// add the endpoint at once
		url += '/' + endpoint;

		// append the slug if its not null or empty
		if(slug) {
			url += '/' + slug;
		}

		// iff filters are set and it is a object
		if(filters && filters instanceof Object) {
			url += '/?' // add the questionmark to the string
			var i = 0; // to be iterated

			for (var k in filters) { // loop through all filters
				i++;
				var filter = filters[k]; // the filter
				if(i !== 1) { // if its the second or greater iteration add an &ampersand
					url += '&';
				}

				if(endpoint === 'pages' && k === 'slug') {
					k = 'name'; // for pages we have to rewrite slug to be name
				}

				url += 'filter['+ k +']='+ filter; // at last add the filter to the query
			};
		}

		return url; // return the url
	},
	/**
	 * Create a URL for the API
	 * @param  {Array}  parts All parts of the URL
	 * @return {String}       An URL relative to the root
	 */
	createUrl: function(parts) {

		var object = App.post_types[parts[0]];
		if(object.length !== 0) { // check if the first part is one of the post types
			var slug = object.name; // set the slug to the post type name
			if(object.rewrite) { // change the slug if a rewrite is done
				slug = object.rewrite.slug;
			}
			parts[0] = slug; // the first part is changed to the correct string
		} else { // this is not a post type
			object = App.taxonomies[parts[0]];
			if(object.length !== 0) { // maybe its a taxonomy?
				parts[0] = object.rewrite.slug; // set to the rewrite slug
			}
		}
		// if the array still is an array return the contents with a slash join
		if(parts instanceof Array) {
			return parts.join('/');
		}
		return '';
	}
};