function HackerNewsAPI($http) {
  this.getTopStoryIds = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  }

  this.getItem = function(itemID) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/'+itemID+'.json');
  }
}

angular
  .module('app')
  .service('HackerNewsAPI', HackerNewsAPI);
