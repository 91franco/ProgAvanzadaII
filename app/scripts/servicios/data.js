angular
	.module('miApp')
	.factory('Data',[function(){
		var data = [];
		return {
			listado:listado,
			cargar:cargar
		}

		function cargar(objeto){
			data.push(objeto);
		}

		function listado(){
			return data;
		}
	}]);