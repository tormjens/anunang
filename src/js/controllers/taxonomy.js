app.controller('Taxonomy', function($scope, $http, $routeParams, $location, taxonomy, taxonomy_slug, $pageTitle) {
	$scope.helpers = helpers;
	var url = $window.helpers.buildApiUrl('terms', taxonomy_slug, {
		slug: $routeParams.slug
	});
	$window.active = taxonomy_slug +'-'+ $routeParams.slug;
	$scope.$window = $window;
	$scope.taxonomy_slug = taxonomy_slug;
	$scope.taxonomy = taxonomy;
	$http.get(url).success(function(terms){
		$scope.term = terms[0];
		$pageTitle.set(terms[0].name);
		$scope.posts = terms[0].posts;
	});
});