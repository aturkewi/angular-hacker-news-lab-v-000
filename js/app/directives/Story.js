function Story(){
  return{
    scope:{
      targetStory: '='
    },
    template:[
      '<div class="some_class">',
        'This is my story directive',
        '<br>',
        'Title: {{targetStory.title}}',
      '</div>'
    ].join('')
  }
}

angular
  .module('app')
  .directive('story', Story)
