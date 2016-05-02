function HackerNewsAPI($http) {
  this.getTopStoryIds = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  }

  this.getTopStories = function() {
    var self = this;
    var topStories = [];
    self.getTopStoryIds().then(function(res){
      var topStoryIds = res.data.slice(0,30);
      for (var i=0; i < 30; i++) {
        self.getItem(topStoryIds[i]).then(function(res){
          debugger;
          topStories.push(res.data);
        });
      };
    });
    return topStories
  }

  this.getItem = function(itemID) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/'+itemID+'.json');
  }
}

angular
  .module('app')
  .service('HackerNewsAPI', HackerNewsAPI);
