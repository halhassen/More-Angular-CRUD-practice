app.controller("homeController", ["homeFactory","$state", function(homeFactory,$state){
	var vm = this;
	vm.page = "Home";
	vm.Exercise = homeFactory.exerciseArr;

	vm.edit = function(idx){

		homeFactory.startEdit(vm.Exercise[idx]);
		console.log("home controller edit ran");
		$state.go("Edit");
	}
	vm.deletes = function(idx){
		homeFactory.dl(idx);
		console.log("The kid has picked up the guid = _id");
	}
}]);
