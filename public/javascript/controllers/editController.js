app.controller("editController", ["homeFactory", function(homeFactory){
	var vm = this;
	vm.page = "Edit";
	vm.exercise = homeFactory.editEx;
	vm.sendToFactory = function() {
		homeFactory.finishEdit(vm.exercise)
	}
	console.log(vm.exercise)
}]);
