function Router($stateProvider){
  $stateProvider
  .state('top', {
    url: '/top',
    templateUrl: 'views/top.html'
  })
  .state('post', {
    url: '/post/:id',
    templateUrl: 'views/post.html'
    // controller: "StoryController as storyController"
    // resolve: {
    //   article: function($stateParams, $http){
    //     return $http.get('https://hacker-news.firebaseio.com/v0/item/'+$stateParams.id+'.json')
    //   }
  // }
  })
}

angular
  .module('app')
  .config(Router)
