angular.module("app").directive("carouselDirective", function(){
return {
  restrict: "EA",
  link: function(scope, element, attribute){
    $(document).ready(function(){

      idArray = [{id:'backpacking-page-dot-route-one',
            background: 'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'},
           {id:'backpacking-page-dot-route-two', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-13.jpg)'},
           {id:'backpacking-page-dot-route-three', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'},
           {id:'backpacking-page-dot-route-four', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-13.jpg)'},
           {id:'backpacking-page-dot-route-five', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'},
           {id:'backpacking-page-dot-route-six', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-13.jpg)'},
           {id:'backpacking-page-dot-route-seven', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'},
           {id:'backpacking-page-dot-route-eight', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-13.jpg)'},
           {id:'backpacking-page-dot-route-nine', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'}
        ];

          smallIdArray = [{id:'backpacking-page-dot-route-one',
                background: 'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'},
                {id:'backpacking-page-dot-route-two', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-13.jpg)'},
                {id:'backpacking-page-dot-route-three', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'},
                {id:'backpacking-page-dot-route-four', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-13.jpg)'},
               {id:'backpacking-page-dot-route-five', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'},
               {id:'backpacking-page-dot-route-six', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-13.jpg)'},
               {id:'backpacking-page-dot-route-seven', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'},
               {id:'backpacking-page-dot-route-eight', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-13.jpg)'},
               {id:'backpacking-page-dot-route-nine', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-2/scene-2-11.jpg)'}
            ];

var currentIndex=-1;


      //start jquery code CLICK FUNCTION
      $(".backpacking-page-dot-routes").click(function() {

        for(var i = 0; i<idArray.length; i++){
            if($(this).attr("id") === idArray[i].id){
              console.log("clicked");
                  $(".backpacking-page-full-page-background").css('background-image', idArray[i].background);
                  $(".backpacking-page-small-pic-container").css('background-image', smallIdArray[i].background);
              currentIndex = i;
              break;
                }
          }
}); //end click function

//highlight function
setInterval(function(){
  for(var i = 0; i<idArray.length; i++){
    if (idArray[i].id !== idArray[currentIndex].id){
      $('#' + idArray[i].id).css('border', 'none');
      // console.log("Inside the if", '#' + idArray[i].id);
    }
    else{
      $('#' + idArray[i].id).css('border', 'lightblue 5px solid');
    }
  }
  // console.log('#' + idArray[currentIndex].id);
}, 100);//end highlight function

//stop highlight
$("#home-page-hame-menu-icon").hover(function() {
  for(var i = 0; i<idArray.length; i++){
    if (idArray[i].id === idArray[currentIndex].id){
      $('#' + idArray[i].id).css('border', 'none');
      // console.log("Inside the if", '#' + idArray[i].id);
    }
    currentIndex=-1;
  }
}); //end click function

//auto timer function
// $(".backpacking-page-dot-routes").click(function(){
    var stopTimer = setInterval(function(){
    if(currentIndex === idArray.length - 1){
      currentIndex = 0;
    }
    else{currentIndex = currentIndex + 1;}
   $(".backpacking-page-full-page-background").css('background-image', idArray[currentIndex].background);
   $(".backpacking-page-small-pic-container").css('background-image', smallIdArray[currentIndex].background);
  console.log(currentIndex);
}, 3000);
//}); //end auto timer function

//auto stop function
 $(".backpacking-page-dot-routes").click(function(){
   clearInterval(stopTimer);
}); //end auto stop function

//auto stop function 2
$("#home-page-hame-menu-icon").hover(function(){
  clearInterval(stopTimer);
});//end auto stop function 2

//right arrow click
$(".backpacking-page-right-arrow-container").click(function() {
  if(currentIndex === idArray.length - 1){
    currentIndex = 0;
  }
  else{currentIndex = currentIndex + 1;}
 $(".backpacking-page-full-page-background").css('background-image', idArray[currentIndex].background);
 $(".backpacking-page-small-pic-container").css('background-image', smallIdArray[currentIndex].background);
}); //end right arrow click

//left arrow click
$(".backpacking-page-left-arrow-container").click(function() {
  if(currentIndex === 0){
    currentIndex = idArray.length-1;
  }
  else{currentIndex = currentIndex - 1;}
 $(".backpacking-page-full-page-background").css('background-image', idArray[currentIndex].background);
 $(".backpacking-page-small-pic-container").css('background-image', smallIdArray[currentIndex].background);
});//end left arrow click

      });//end of jquery code
  }
};

});
