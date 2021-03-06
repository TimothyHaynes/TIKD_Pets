var app = angular.module("badgeApp");

app.controller("ajaxCtrl1", function($http, $scope) {
    $http({
        method: 'GET',
        url: 'https://teamtreehouse.com/katiegolicz.json'
    }).then(function successCallback(response) {
            $scope.badges = response.data.badges;
            console.log($scope.badges);
        },
        function errorCallback(response) {
            console.log(response);
        });
    $http({
        method: 'GET',
        url: 'https://teamtreehouse.com/davebrunetti.json'
    }).then(function successCallback(response) {
            $scope.badges = response.data.badges;
            console.log($scope.badges);
        },
        function errorCallback(response) {
            console.log(response);
        });
    $http({
        method: 'GET',
        url: 'https://teamtreehouse.com/ithicawilliams.json'
    }).then(function successCallback(response) {
            $scope.badges = response.data.badges;
            console.log($scope.badges);
        },
        function errorCallback(response) {
            console.log(response);
        });
    $http({
        method: 'GET',
        url: 'https://teamtreehouse.com/timothyhaynes2.json'
    }).then(function successCallback(response) {
            $scope.badges = response.data.badges;
            console.log($scope.badges);
        },
        function errorCallback(response) {
            console.log(response);
        });
});
