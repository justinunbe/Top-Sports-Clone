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
      $(".home-page-individual-link-container").hover(function() {
        for(var i = 0; i<hoverArray.length; i++){
            if($(this).attr("id") === hoverArray[i].id){
                  $(".home-page-main-content-container").css('background-image', hoverArray[i].background);
              currentIndex = i;
              break;
                }
          }
}); //end of hover function

$(".home-page-main-content-container").hover(function() {
$(".home-page-main-content-container").css('background-image', homeBackground);
}); //end of hover function

// $(".home-page-individual-link-container").hover(function() {
//     $(".home-page-main-content-container").css('background-image', homeBackground);
// }
// })

  }); //document .ready
} // link end
}; //return
});//end of directive


//write an if statement that makes the different pictures turn on at different times use
//.has class to do the checking in the if statement.
