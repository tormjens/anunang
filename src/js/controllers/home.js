app.controller('Main', function($scope, $window, $http, $routeParams, $pageTitle) {
	$pageTitle.set('Home');
	$scope.helpers = helpers;
	$http.get(App.api + '/posts/').success(function(res){
		$scope.posts = res;
	});
});