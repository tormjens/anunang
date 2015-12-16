app.controller('Single', function($scope, $http, $routeParams, $pageTitle, slug, post_type, $pageTitle, $sce) {
	$scope.slug = slug;
	$scope.post_type = post_type;
	$http.get(App.api + '/posts/?filter[name]=' + $routeParams.slug).success(function(res){
		var post = res[0];
		post.title.rendered = $sce.trustAsHtml(post.title.rendered);
		post.excerpt.rendered = $sce.trustAsHtml(post.excerpt.rendered);
		post.content.rendered = $sce.trustAsHtml(post.content.rendered);
		$scope.post = post;
		$pageTitle.set(post.title.rendered);
	});
});