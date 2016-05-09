function StoryController(article){
  // debugger;
  this.storyData = article.data
}

angular
  .module('app')
  .controller('StoryController', StoryController)
