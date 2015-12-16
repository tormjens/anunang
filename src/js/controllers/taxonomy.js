app.controller('Taxonomy', function($scope, $http, $routeParams, $location, taxonomy, taxonomy_slug, $pageTitle) {
	var url = App.api + '/terms/'+ taxonomy_slug +'/?filter[slug]=' + $routeParams.slug;
	$scope.taxonomy_slug = taxonomy_slug;
	$scope.taxonomy = taxonomy;
	$http.get(url).success(function(terms){
		$scope.term = terms[0];
		$pageTitle.set(terms[0].name);
		var url = App.api + '/posts?'+ taxonomy_slug +'=' + $routeParams.slug;
		$http.get(url).success(function(posts) {
			$scope.posts = posts;
		});
	});
});