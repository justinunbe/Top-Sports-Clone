hoverArray = [{id:'home-page-pic-change-one',
      background: 'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/bgs/menu-scene-1.jpg)'},
     {id:'home-page-pic-change-two', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/bgs/menu-scene-2.jpg)'},
     {id:'home-page-pic-change-three', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/bgs/menu-scene-3.jpg)'},
     {id:'home-page-pic-change-four', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/bgs/menu-scene-5.jpg)'},
     {id:'home-page-pic-change-five', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/bgs/menu-scene-4.jpg)'}
  ];

var homeBackground = 'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/bgs/menu-default.jpg)';


angular.module("app").directive("hikingHoverDirective", function(){
return {
  restrict: "EA",
  link: function(scope, element, attribute){
    $(document).ready(function(){

      //start jquery code
      $(".home-page-individual-link-container").mouseenter(function() {

        for(var i = 0; i<hoverArray.length; i++){
            if($(this).attr("id") === hoverArray[i].id){
                  $(".home-page-main-content-container").css('background-image', hoverArray[i].background);
              currentIndex = i;
                }
          }
          // $(this).mouseleave(function(){
          //     $(".home-page-main-content-container").css('background-image', homeBackground);
          // });
}); //end of mouse enter function

$(".home-page-individual-link-container").mouseenter(function() {
  for(var i = 0; i<hoverArray.length; i++){
      if($(this).attr("id") === hoverArray[i].id){
            $(this).css('color', '#D8A772');
        currentIndex = i;
          }
    }
    $(this).mouseleave(function(){
      $(this).css('color', 'white');
     });
}); //end of mouse enter function

$(".home-page-individual-link-container").mouseenter(function() {
  for(var i = 0; i<hoverArray.length; i++){
      if($(this).attr("id") === hoverArray[i].id){
            $(".home-page-spring-summer-2016-container").fadeOut(400);
          }
    }

}); //end of mouse enter function

  }); //document .ready
} // link end
}; //return
});//end of directive
