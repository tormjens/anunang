app.controller('Archive', function($scope, $http, $routeParams, $location, post_type, $pageTitle) {
	$pageTitle.set(post_type.label);
	$scope.post_type = post_type;
	var url = App.api + '/posts/?type=' + post_type.name;
	$http.get(url).success(function(res){
		for (var i = res.length - 1; i >= 0; i--) {
			res[i].url = '/' + res[i].type + '/' + res[i].slug;
		};
		$scope.posts = res;
	});
});