app.controller('Main', function($scope, $http, $routeParams, $pageTitle) {
	$pageTitle.set('Home');
	$http.get(App.api + '/posts/').success(function(res){
		for (var i = res.length - 1; i >= 0; i--) {
			res[i].url = '/' + res[i].type + '/' + res[i].slug;
		};
		$scope.posts = res;
	});
});