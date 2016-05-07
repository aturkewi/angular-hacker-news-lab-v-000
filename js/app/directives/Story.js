function Story(){
  return{
    // scope:{},
    template:[
      '<div class="some_class">',
        'This is my story directive',
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
