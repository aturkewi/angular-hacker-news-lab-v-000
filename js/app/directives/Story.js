function Story(){
  return{
    // scope:{},
    template:[
      '<div class="some_class">',
      '</div>'
    ].join(''),
    controllerAs: 'story',
    controller: function(){

    }
  }
}

angular
  .module('app')
  .directive('story', Story)
