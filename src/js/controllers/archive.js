app.controller('Archive', function($scope, $http, $routeParams, $location, post_type, $pageTitle) {
	$pageTitle.set(post_type.label);
	$scope.post_type = post_type;
	var url = buildApiUrl(post_type.base);
	$http.get(url).success(function(res){
		$scope.posts = res;
	});
});