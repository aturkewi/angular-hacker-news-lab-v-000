function TopStories(){
  return{
    scope:{},
    template:[
      '<div class="top-stories">',
        'These are my stories:',
        '<ul>',
          '<li ng-repeat="story in topStories.stories">',
            '{{story}}',
          '</li>',
        '</ul>',
      '</div>'
    ].join(''),
    controllerAs: 'topStories',
    controller: function(){
      this.stories = [11543083,11543258,11544016,11542005,11544686];
    }
  }
}

angular
  .module('app')
  .directive('topStories', TopStories)
