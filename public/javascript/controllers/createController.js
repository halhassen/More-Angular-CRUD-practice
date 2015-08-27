app.controller("createController", ["homeFactory", "$state", function(homeFactory, $state) {
	var vm = this;
	vm.exercise = {}

	vm.createExercise = function(){
		vm.exercise;
		// .then() runs after q.resolve in Factory
		homeFactory.createExercise(vm.exercise).then(function(){
			/* q.resolve() */
			console.log('controller activated')
			alert("Post successful");
			$state.go("Home");
		});

	}

}])