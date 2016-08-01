var app= angular.module("badge-app");

app.controller("ajaxCtrl1", function($http,$scope){
$http ( {
	method: 'GET',
	url: 'https://teamtreehouse.com/katiegolicz.json'
}).then (function successCallback(response) {
	$scope.badges=response.data.badges;
	console.log($scope.badges);
},
function errorCallback(response) {
	console.log(response);
});
});

app.controller("ajaxCtrl2", function($http, $scope) {
	$http ({
		method: 'GET',
		url: 'https://teamtreehouse.com/davebrunetti.json'
	}).then (function successCallback(response) {
		$scope.badges=response.data.badges;
	},
	function errorCallback(response) {
	console.log(response);
});
});