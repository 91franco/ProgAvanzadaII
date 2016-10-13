angular
	.module('miApp')
	.service('Datos',['$http',function($http){
		
		this.listado= function listado(){
			return $http.get('scripts/persona.json')
			.then(function(rta){
  			    return rta.data;
  			})
  			.catch(function(error){
  			console.log(error);
  			})
		}
	}]);