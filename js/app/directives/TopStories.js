function TopStories(HackerNewsAPI){
  return{
    scope:{},
    template:[
      '<div class="top-stories">',
        'These are my stories:',
        '<ul>',
          '<li ng-repeat="story in topStories.topStories">',
            '<a href="#/post/{{story.id}}">{{story.title}}</a>',
            'by: {{story.by}}',
          '</li>',
        '</ul>',
      '</div>'
    ].join(''),
    controllerAs: 'topStories',
    controller: function(){
      var self = this;
      self.topStories = [];
      HackerNewsAPI.getTopStoryIds().then(function(res){
        var topStoryIds = res.data.slice(0,30);
        for (var i=0; i < 30; i++) {
          HackerNewsAPI.getItem(topStoryIds[i]).then(function(res){
            // debugger;
            self.topStories.push(res.data);
          });
        };
      });
    }
  }
}

// TopStories.$inject = ['hackerNewsAPI']

angular
  .module('app')
  .directive('topStories', TopStories)
