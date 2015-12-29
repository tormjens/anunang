app.controller('Archive', function($scope, $http, $window, $routeParams, $location, post_type, $pageTitle) {
	$pageTitle.set(post_type.label);
	$scope.post_type = post_type;
	$window.active = 'archive' +'-'+ post_type;
	$scope.$window = $window;
	var url = $window.helpers.buildApiUrl(post_type.base);
	$http.get(url).success(function(res){
		$scope.posts = res;
	});
});