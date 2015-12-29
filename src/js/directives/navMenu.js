app.directive('navMenu', ['$http', '$window', function($http, $window) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			loc: '@location',
		},
		link: function($scope, $element) {
			var url = $window.helpers.buildApiUrl('menu-locations', $scope.loc);
			$http.get(url).success(function(res){
				var menu_items = [];
				var i = 1;
				angular.forEach(res, function(item) {
					var url = item.url;
					var id = 'custom-' + i;
					if(item.type === 'post_type') {
						url = $window.helpers.createUrl([item.object, item.slug]);
						id = item.object +'-'+ item.slug;
					}
					else {
						i++;
					}
					menu_items.push({
						url: url,
						title: item.title,
						classes: item.classes,
						id: id,
						children: item.children,
					});
				});
				$scope.items = menu_items;
			});
			$scope.$window = $window;
		},
		template: function() {
			return '<ul class="nav location-{{loc}}">' +
				'<li ng-repeat="item in items" class="item ng-class: { active: item.id === $window.active, has_children: item.children };">' +
					'<a href="{{item.url}}">{{item.title}}</a>' +
					'<ul ng-if="item.children">' +
						'<li ng-repeat="child in item.children" class="item child ng-class: { active: child.id === $window.active };">' +
							'<a href="{{child.url}}">{{child.title}}</a>' +
						'</li>' +
					'</ul>' +
				'</li>' +
			'</ul>'
		}
	}
}]);