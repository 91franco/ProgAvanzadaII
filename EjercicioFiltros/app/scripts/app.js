angular
  .module('miApp', ['ngAnimate'])

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
