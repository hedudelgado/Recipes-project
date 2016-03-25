'use strict';

angular.module('recipesApp.postrecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-recipe', {
    templateUrl: 'recipes/add-recipe-form.html',
    controller: 'PostRecipesCtrl'
  });
}])

.controller('PostRecipesCtrl', [ "$scope", "$http", '$location', function($scope, $http, $location) {
 $scope.postRecipe = function(name, instructions) {
 	var param= {name, instructions}
 	$http.post('http://localhost:3000/recipes.json', param).success(function(data,status){
 		$location.path('/recipes');
 	});
 }
}]);