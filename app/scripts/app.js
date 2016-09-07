angular
  .module('miApp', ['ngAnimate'])
  .controller('MiCtrl', function($scope){
    $scope.mail = "mi@mails";
    $scope.vista = 1;
    //$scope.cambiarVista = cambiarVista; //si lo declaro asi le da la funcion entera, si le pongo parentesis seria el return
    $scope.form={};
    $scope.enviar=function(){
    	console.log($scope.form);
    }

    $scope.cambiarVista = function(vista){
    	$scope.vista=vista;
    }
    var unmail = "dsd";
  })
