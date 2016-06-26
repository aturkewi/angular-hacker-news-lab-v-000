function Story(location, HackerNewsAPI){
  return{
    template:[
      '<div class="some_class">',
        'This is my story directive',
        '<br>',
        // '{{var foo = "testing";}}',
        '<br>',
        'Title: {{storyController.myStory.title}}',
        '<br>',
        // 'Test: {{foo}}',
      '</div>'
    ].join(''),
    controllerAs: 'storyController',
    controller: function(HackerNewsAPI){
      storyId = location.$$path.split('/')[2];
      var myStory;
      HackerNewsAPI.getItem(storyId).then(function(data){
        myStory = data.data;
        debugger;
      });
    },
    link: function(){
      // console.log(myStory)
    }
  }
}

Story.$inject = ['$location', 'HackerNewsAPI']

angular
  .module('app')
  .directive('story', Story)
