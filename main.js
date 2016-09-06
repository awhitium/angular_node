var app = angular.module('myApp', []);
app.controller('defaultController', function($scope, $http) {
    $http.get('http://angular.drupal-server:8080/get-titles').success(function(response){
        console.log(response);
        $scope.titles = []
        response.list.forEach(function(item){
            $scope.titles.push(item.title)
        })
    });    
});