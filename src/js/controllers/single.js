app.controller('Single', function($scope, $http, $routeParams, $pageTitle, slug, post_type, $pageTitle, $sce) {
	$scope.slug = slug;
	$scope.post_type = post_type;
	var url = buildApiUrl(post_type.base, '', {
		name: $routeParams.slug,
	});
	$http.get(url).success(function(res){
		console.log(res);
		var post = res[0];
		$scope.post = post;
		$pageTitle.set($sce.trustAsHtml(post.title.rendered));
	});
});