app.controller('Taxonomy', function($scope, $http, $routeParams, $location, taxonomy, taxonomy_slug, $pageTitle) {
	var url = buildApiUrl('terms', taxonomy_slug, {
		slug: $routeParams.slug
	});
	$scope.taxonomy_slug = taxonomy_slug;
	$scope.taxonomy = taxonomy;
	$http.get(url).success(function(terms){
		$scope.term = terms[0];
		$pageTitle.set(terms[0].name);
		$scope.posts = terms[0].posts;
	});
});