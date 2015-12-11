app.controller('Taxonomy', function($scope, $http, $routeParams, $location, taxonomy, $pageTitle) {
	$pageTitle.set(taxonomy.labels.name);
	console.log(taxonomy);
	var url = App.api + '/taxonomies/?type=' + taxonomy.labels.name;
	$http.get(url).success(function(res){
		$scope.posts = res;
	});
});