// JavaScript source code

var app = angular.module("ServiceApp", []);

app.controller("ServiceController", function ($scope) {

    var service = {
        title: "Programming Project",
        description: "Learning programming by doing project"
    };

    $scope.service = service;
});

app.controller("TeamController", function ($scope, $http) {

    var devop = {
        title: "Devop Team",
        member: "Khanh"
    };

    var devapp = {
        title: "Develop Application",
        member: "Luong"
    };

    $scope.devop = devop;
    $scope.devapp = devapp;
});

app.controller("MainController", function ($scope) {

    var onError = function (reason) {
        $scope.error = "can not obtain data";
        alert('on error occur');
    };

    var onComplete = function (response) {
        $scope.user = response.data;
    };

    var onRepos = function (data) {
        alert('on repo called');
        $scope.repos = data;
    };

    var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user);
    };

    $scope.search = function (username) {
        github.getUser(username).then(onUserComplete, onError);
    };


    $http.get('https://api.github.com/users/angular')
        .then(onComplete, onError);


    $scope.username = "angular";
    $scope.repoSortOrder = 'stargazers_count';

    $scope.onEnterButtonClick = function () {
        alert('onEnterButtonClick ');
        $scope.entername = "EnterClick";
    };
         
});