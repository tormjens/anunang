app.controller('Single', function($scope, $http, $window, $routeParams, $pageTitle, slug, post_type, $pageTitle, $sce) {
	$scope.slug = slug;
	$scope.post_type = post_type;
	var url = $window.helpers.buildApiUrl(post_type.base, '', {
		name: $routeParams.slug,
	});
	$window.active = slug +'-'+ $routeParams.slug;
	$scope.$window = $window;
	$http.get(url).success(function(res){
		var post = res[0];
		$scope.post = post;
		$pageTitle.set($sce.trustAsHtml(post.title.rendered));
	});
});