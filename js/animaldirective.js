var app= angular.module("badgeApp");

app.directive('overWith', function() {
	return {
		restrict: 'AE',
		templateUrl: 'partials/view1.html'
	};
	});