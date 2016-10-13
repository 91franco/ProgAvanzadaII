angular
  .module('miApp')
  .controller('ListadoCtrl', ['$scope', 'Datos', 'Personas',
   function($scope, Datos,Personas){
     console.log(Datos.listado());

     $scope.personas=[];
     $scope.borrar = Datos.borrar;
     Personas.listado().
     then(function (rta) {
     	$scope.personas=rta;
     	console.log(rta);
     })
     
    


  }]);
