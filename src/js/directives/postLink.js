app.directive('postLink', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		template: '<a class="post-link" href="/{{post.type}}/{{post.slug}}" ng-bind-html="post.title.rendered"></a>'
	};
});