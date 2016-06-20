function Story(){
  return{
    scope:{
      myStory: '='
    },
    template:[
      '<div class="some_class">',
        'This is my story directive',
        '<br>',
        // '{{var foo = "testing";}}',
        '<br>',
        'Title: {{myStory.title}}',
        '<br>',
        // 'Test: {{foo}}',
      '</div>'
    ].join(''),
    link: function(){
      console.log(myStory)
    }
  }
}

angular
  .module('app')
  .directive('story', Story)
