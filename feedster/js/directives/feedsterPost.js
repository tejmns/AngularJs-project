app.directive('feedsterPost',function(){
  return{
    restrict:'E',
    scope:{
      info: "="
    },
    templateUrl:'js/directives/feedsterPost.html'
  };
  
});