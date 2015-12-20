app.controller('Main', function($scope, $http, $routeParams, $pageTitle) {
	$pageTitle.set('Home');
	$http.get(App.api + '/posts/').success(function(res){
		$scope.posts = res;
	});
});