app.directive('appPartial', function() {
	return {
		restrict: 'E',
		replace: true,
		compile: function(element, attrs) {
			element.append("<div ng-include=\"'"+ App.partial_relative + attrs.src +"'\"></div>");
		}
	}
});