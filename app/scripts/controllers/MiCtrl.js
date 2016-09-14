angular
  .module('miApp')
  .controller('MiCtrl',['$scope','$http','Data','Datos',
  	function($scope,$http,Data,Datos){
  	console.log(Data);
  	console.log(Datos);
  	// Datos.listado()
  	// .then(function(rta){
  	// 	console.log(rta)
  	// })
  	// .catch(function(error){
  	// 	console.log(error);
  	// })
  	$scope.enviar=enviar
  	$scope.user={}
  	function enviar(){
  		Data.cargar($scope.user)
  		console.log(Data.listado())
  	}
  	// Data.cargar($scope.form)

  	// $scope.mail = "mi@mails";
   //  $scope.vista = 1;
   //  $scope.enviado=true;
   //  $scope.aPartir=1;
    
   //  $scope.form={};
   //  $scope.enviar=function(){
   //  	console.log($scope.form);
   //  	 $scope.enviado=false;
    // }

   //  //$scope.cambiarVista = cambiarVista; //si lo declaro asi le da la funcion entera, si le pongo parentesis seria el return
   //  $scope.cambiarVista = function(vista){
   //  	$scope.vista=vista;
   //  }
   //  var unmail = "dsd";
   //  $scope.personas = [];


   //  $http
   //  	.get('./scripts/persona.json')
   //  	.then(function(rta){
   //  		console.log(rta)
   //  		 $scope.personas = rta.data;
   //  	})
   //  	.catch(function(error){
   //  		console.log(error)
   //  	})

   //  	console.log('Despues del get');

  }]);