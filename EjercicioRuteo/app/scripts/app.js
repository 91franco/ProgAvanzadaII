angular
  .module('miApp', ['ngAnimate','ui.router'])
  .config(function($stateProvider,$urlRouterProvider){
     $stateProvider
        .state('home',{
          url:'/home',
          controller: 'MainCtrl',
          templateUrl:'views/list.html'

          views:{
            principal:{
              controller: 'MainCtrl',
              templateUrl:'views/list.html'
            },
            secundaria:{
              controller: 'CargaCtrl',
              templateUrl:'views/form.html'
            }
          }
    })
      $stateProvider
        .state('form',{
          url:'/form',
          controller: 'MainCtrl',
          templateUrl:'views/form.html'
    })
      $stateProvider
        .state('calculos.cargar',{
          abstract: true,
          url:'/cargar',
          controller: 'MainCtrl',
          templateUrl:'views/calculos.html'
    })
      $urlRouterProvider.otherwise('home');
  })

  .filter('miFiltro',function(){
    return function(item){
      if(item!='margeryhatfield@duflex.com')
        return item;
      else {
        return "Sin mail";
      }
    }
  })
  .filter('sexoEspanol',function(){
    return function(item){
      if(item==='female')
        return 'femenino';
      else {
        return "masculino";
      }
    }
  })
 
  .filter('filtroArray',function(){
    return function(valor,edad){
      if(!edad)edad=30;
      var miArray = [];
      for(var i = 0 ; i < valor.length; i++){
        if(valor[i].age>edad)
          miArray.push(valor[i]);
      };
      return miArray;
      console.log(lista);

    }
  })
  
  .filter('filtroAmigos',function(){
    return function(item){
      return item
      .reduce(function(prev,next){
        return prev+ next.name
      }, ''
      );
    }
  })
