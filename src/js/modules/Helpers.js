var module = angular.module('Helpers', []);

module.filter('post_link', function() {
	return function(post) {
		return '/' + post.type + '/' + post.slug;
	}
});

module.filter('post_title', function($sce) {
	return function(post) {
		var title = post.title;
		if(post.title.rendered) {
			title = post.title.rendered;
		}
		return $sce.trustAsHtml(title);
	}
});

module.filter('post_excerpt', function($sce) {
	return function(post) {
		var excerpt = post.excerpt;
		if(post.excerpt.rendered) {
			excerpt = post.excerpt.rendered;
		}
		return $sce.trustAsHtml(excerpt);
	}
});

module.filter('post_content', function($sce) {
	return function(post) {
		var content = post.content;
		if(post.content.rendered) {
			content = post.content.rendered;
		}
		return $sce.trustAsHtml(content);
	}
});

module.filter('term_link', function($sce) {
	return function(term) {
		var taxonomy = App.taxonomies[term.taxonomy];
		var slug = taxonomy.rewrite.slug; // remember the slug
		return '/' + slug + '/' + term.slug;
	}
});