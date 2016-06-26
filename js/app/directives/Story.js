function Story(location, HackerNewsAPI){
  return{
    template:[
      '<div class="some_class">',
        'This is my story directive',
        '<br>',
        '<br>',
        'Title: {{storyController.myStory.title}}',
        '<br>',
      '</div>'
    ].join(''),
    controllerAs: 'storyController',
    controller: function(HackerNewsAPI){
      storyController = this;
      storyId = location.$$path.split('/')[2];
      storyPromise = HackerNewsAPI.getItem(storyId);
    },
    link: function(){
      this.storyPromise.then(function(data){
        storyController.myStory = data.data;
      })
    }
  }
}

Story.$inject = ['$location', 'HackerNewsAPI']

angular
  .module('app')
  .directive('story', Story)
