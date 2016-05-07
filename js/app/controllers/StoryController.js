function StoryController(){
  this.story = "some data"
}

angular
  .module('app')
  .controller('StoryController', StoryController)
