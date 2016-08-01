var app = angular.module('badgeApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/view1', {
		controller: "ajaxCtrl1",
		templateUrl: "partials/view1.html"
	})
	.when('/view2', {
		controller: "ajaxCtrl2",
		templateUrl: "partials/view1.html"
	});
});