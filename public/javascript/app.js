var app = angular.module("app", ["ui.router"]); 
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$stateProvider.state("Home", {
		url: "/",
		templateUrl: "javascript/templates/home.html",
		controller: "homeController",
		controllerAs: "vm"
	})
	.state("Create", {
		url: "/Exercise/Create",
		templateUrl: "javascript/templates/createExercise.html",
		controller: "createController",
		controllerAs: "vm"
	})
}])