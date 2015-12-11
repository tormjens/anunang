app.controller('Single', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams, $pageTitle) {
	console.log(App.api + '/posts/?filter[name]=' + $routeParams.slug);
	$http.get(App.api + '/posts/?filter[name]=' + $routeParams.slug).success(function(res){
		var post = res[0];
		$scope.post = post;
	});
}]);