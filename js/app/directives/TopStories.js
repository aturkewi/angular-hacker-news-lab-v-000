function TopStories(HackerNewsAPI){
  return{
    scope:{},
    template:[
      '<div class="top-stories">',
        'These are my stories:',
        '<ul>',
          '<li ng-repeat="story in topStories.stories">',
            '<a href="#/post/{{story}}">{{story}}</a>',
          '</li>',
        '</ul>',
      '</div>'
    ].join(''),
    controllerAs: 'topStories',
    controller: function(){
      var self = this;
      // this.stories = [];
      // HackerNewsAPI.getTopStoryIds()
      //   .then(function(res){
      //     self.topStoryIds = res.data.slice(0,30)
      //   })
    },
    link: function (scope, element, attrs, controller) {
      HackerNewsAPI.getTopStories()
      
        // .then(function(res){
        //   controller.topStoryIds = res.data.slice(0,30)
        //   debugger;
        // })
    }
  }
}

// TopStories.$inject = ['hackerNewsAPI']

angular
  .module('app')
  .directive('topStories', TopStories)
