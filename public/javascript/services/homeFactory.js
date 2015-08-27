app.factory("homeFactory", ["$http", '$q', function($http, $q) {
	var o = {};
	var firebase = "https://dogpound.firebaseio.com/";
	o.exerciseArr = [];
	o.editex = {}
    // o.expressSuccess = function(){
    //
    // }
    o.createExercise = function(obj){
      var q = $q.defer(); // q is var for promise (injected above into factory)
      $http.post(firebase + "Exercises/" + ".json", obj).success(function (res) {
      	obj._id = res.name;
      	o.exerciseArr.push(obj);
      	console.log('this is the factory');
      	o.editEx = obj;
          q.resolve(); // command to tell controller to reslove promise
      });
      return q.promise; // end promise
  }
  o.getExercise = function(){
  	$http.get(firebase + ".json").success(function (res){
  		for(var prop in res){
  			res[prop]._id = prop;
  			o.exerciseArr.push(res[prop])
  		}
  	})
  }

  o._delete = function(id) {
  	$http.delete(firebase + id + ".json").success(function (res) {
  		o.getExercise();
  	})
  }

  o.startEdit = function(currentObject) {
  	console.log("edit function!")
  	o.editEx = currentObject;

  }

  o.finishEdit = function(obj) {
  	$http.put(firebase + obj._id + ".json", obj).success(function (res) {
  		console.log("this has been edited")
  	})
  }
  o.getExercise();

  //for patching, retrieve the unique guid to edit
  return o;
}])