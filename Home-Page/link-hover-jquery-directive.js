angular.module("app").directive("hikingHoverDirective", function(){
return {
  restrict: "EA",
  link: function(scope, element, attribute){
    $(document).ready(function(){
      //start jquery code
      $(".home-page-individual-link-container").hover(function() {
        if($(this).attr("id") === 'testing456'){
          $(".home-page-main-content-container").toggleClass("test-123");
        }
        if($(this).attr("id") === 'testing-second-pic'){
          $(".home-page-main-content-container").toggleClass("testing-number-2");
        }
        if($(this).attr("id") === 'testing-third-pic'){
          $(".home-page-main-content-container").toggleClass("testing-number-3");
        }
      });//end of hover function

  }); //document .ready
} // link end
}; //return
});//end of directive


//write an if statement that makes the different pictures turn on at different times use
//.has class to do the checking in the if statement.
