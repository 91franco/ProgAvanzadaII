angular
  .module('miApp', ['ngAnimate'])
  .controller('MiCtrl', function($scope,$http){
    $scope.mail = "mi@mails";
    $scope.vista = 1;
    $scope.enviado=true;
    $scope.aPartir=1;
    
    $scope.form={};
    $scope.enviar=function(){
    	console.log($scope.form);
    	 $scope.enviado=false;
    }

    //$scope.cambiarVista = cambiarVista; //si lo declaro asi le da la funcion entera, si le pongo parentesis seria el return
    $scope.cambiarVista = function(vista){
    	$scope.vista=vista;
    }
    var unmail = "dsd";
    $scope.personas = [];


    $http
    	.get('./scripts/persona.json')
    	.then(function(rta){
    		console.log(rta)
    		 $scope.personas = rta.data;
    	})
    	.catch(function(error){
    		console.log(error)
    	})

    	console.log('Despues del get');
})
.animation('.slide', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);

      // remember to call doneFn so that angular
      // knows that the animation has concluded
    },

    move: function(element, doneFn) {
      jQuery(element).fadeIn(1000, doneFn);
    },

    leave: function(element, doneFn) {
      jQuery(element).fadeOut(1000, doneFn);
    }
  }
}])