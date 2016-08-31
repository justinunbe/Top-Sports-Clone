angular.module("app").directive("loadingPageDirective", function(){
return {
  restrict: "EA",
  link: function(scope, element, attribute){
    $(window).load(function(){
      //start jquery code
    setTimeout(function(){
      $(".full-background").fadeOut(2000);
    }, 100);

      });
  }
};

});
