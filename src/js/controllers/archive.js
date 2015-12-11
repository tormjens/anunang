app.controller('Archive', function($scope, $http, $routeParams, $location, post_type, $pageTitle) {
	$pageTitle.set(post_type.label);
	var url = App.api + '/posts/?type=' + post_type.name;
	$http.get(url).success(function(res){
		$scope.posts = res;
	});
});