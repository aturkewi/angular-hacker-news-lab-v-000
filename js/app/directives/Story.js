function Story(location, HackerNewsAPI){
  return{
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
    controllerAs: 'storyController',
    controller: function(){
      storyId = location.$$path.split('/')[2];
      debugger;
    },
    link: function(){
      console.log(myStory)
    }
  }
}

Story.$inject = ['$location', 'HackerNewsAPI']

angular
  .module('app')
  .directive('story', Story)
