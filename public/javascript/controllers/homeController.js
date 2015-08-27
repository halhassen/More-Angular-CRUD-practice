app.controller("homeController", ["homeFactory", function(homeFactory){
	var vm = this;
	vm.page = "Home";
	vm.Exercise = homeFactory.exerciseArr;
	vm.edit = function(idx) {
		homeFactory.startEdit(vm.exercise[idx])
		console.log("Home Controller editor ran")
		$state.go("Edit");
	}
	vm._delete = functions(idx) {
		homeFactory._delete(idx);
		
	}
}]);