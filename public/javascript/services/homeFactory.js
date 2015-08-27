app.factory("homeFactory", ["$http", '$q', function($http, $q) {
	var o = {};
	var firebase = "https://dogpound.firebaseio.com/";
	o.exerciseArr = [];
	o.editEx = {};
    // o.expressSuccess = function(){
    //
    // }
    o.createExercise = function(obj){
      var q = $q.defer(); // q is var for promise (injected above into factory)
      $http.post(firebase + "Exercises/" + ".json", obj).success(function (res) {
      	obj._id = res.name;
      	o.exerciseArr.push(obj);
      	console.log('this is the factory')
          o.editEx = obj; // command to tell controller to reslove promise
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

   o.dl = function(id){

     $http.delete(firebase + id + "/.json").success(function (res){
      o.exerciseArr.splice(id, 1)
      o.getExercise();
      console.log("delete works");
    })
   }

   o.startEdit = function(curentObject){
     console.log("start edit works");
     o.editEx = curentObject;

   }

   o.finishEdit = function(obj){
     $http.put(firebase + obj._id +"/.json", obj).success(function (res){
      console.log("this has been  mate");
    })

   }
   o.getExercise();
   return o;
 }])