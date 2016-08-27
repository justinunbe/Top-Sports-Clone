angular.module("app").directive("smallPicDirective", function(){
return {
  restrict: "EA",
  link: function(scope, element, attribute){
    $(document).ready(function(){
      //start jquery code
      $(".backpacking-page-dot-routes").click(function() {

        if($(this).attr("id") === 'backpacking-page-dot-route-one'){
          $(".backpacking-page-small-pic-container").css('background-image', 'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)');
        }
        if($(this).attr("id") === 'backpacking-page-dot-route-two'){
          $(".backpacking-page-small-pic-container").css('background-image', 'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-13.jpg)');
        }
      });//end of click function
      });
  }
};

});
