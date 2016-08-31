angular.module("app").directive("carouselDirective", function(){
return {
  restrict: "EA",
  link: function(scope, element, attribute){
    $(document).ready(function(){

      idArray = [{id:'backpacking-page-dot-route-one',
            background: '#6EC3A6'},
           {id:'backpacking-page-dot-route-two', background:'#20274D'},
           {id:'backpacking-page-dot-route-three', background:'#585858'},
           {id:'backpacking-page-dot-route-four', background:'#3F1E22'},
           {id:'backpacking-page-dot-route-five', background:'#243047'},
           {id:'backpacking-page-dot-route-six', background:'#B73322'},
           {id:'backpacking-page-dot-route-seven', background:'#544333'},
           {id:'backpacking-page-dot-route-eight', background:'#312139'},
           {id:'backpacking-page-dot-route-nine', background:'#383835'}
        ];

          smallIdArray = [{id:'backpacking-page-dot-route-one',
                background: 'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-5/scene-5-8.png)'},
                {id:'backpacking-page-dot-route-two', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-1/scene-1-2.png)'},
                {id:'backpacking-page-dot-route-three', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-1/scene-1-8.png)'},
                {id:'backpacking-page-dot-route-four', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-3/scene-3-7.png)'},
               {id:'backpacking-page-dot-route-five', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-3/scene-3-12.png)'},
               {id:'backpacking-page-dot-route-six', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-4/scene-4-1.png)'},
               {id:'backpacking-page-dot-route-seven', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-4/scene-4-8.png)'},
               {id:'backpacking-page-dot-route-eight', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-4/scene-4-13.png)'},
               {id:'backpacking-page-dot-route-nine', background:'url(http://lookbook.quechua.com/spring-summer-2016/assets/img/others/scene-5/scene-5-2.png)'}
            ];

            textArray = [
                  {id:'backpacking-page-dot-route-two', text:'WATERPROOF'},
                 {id:'backpacking-page-dot-route-two', text:'WIND JACKET'},
                 {id:'backpacking-page-dot-route-two', text:'RUCKSACK'},
                 {id:'backpacking-page-dot-route-two', text:'HIKING BOOT '},
                 {id:'backpacking-page-dot-route-two', text:'LIGHT BACKPACK'},
                 {id:'backpacking-page-dot-route-two', text:'DOWN JACKET'},
                 {id:'backpacking-page-dot-route-two', text:'STEEL TOE BOOT'},
                 {id:'backpacking-page-dot-route-two', text:'FLEECE JACKET'},
                 {id:'backpacking-page-dot-route-two', text:'LIGHT SHOE'}
              ];


var currentIndex=1;


      //start jquery code CLICK FUNCTION
      $(".backpacking-page-dot-routes").click(function() {

        for(var i = 0; i<idArray.length; i++){
            if($(this).attr("id") === idArray[i].id){
                  $(".backpacking-page-full-page-background").css('background', idArray[i].background);
                  $(".backpacking-page-small-pic-container").css('background-image', smallIdArray[i].background);
                  $(".backpacking-page-text-container").text(textArray[i].text);
              currentIndex = i;
              break;
                }
          }
}); //end click function

//highlight function
var stopRunning = setInterval(function(){
  for(var i = 0; i<idArray.length; i++){
    if (idArray[i].id !== idArray[currentIndex].id){
      // console.log(idArray[i]);
      // console.log(idArray[currentIndex])
      $('#' + idArray[i].id).css('box-shadow', 'none');
      // console.log("Inside the if", '#' + idArray[i].id);
    }
    else if (idArray[i].id === idArray[currentIndex].id) {
      $('#' + idArray[currentIndex].id).css('box-shadow', '0px 0px 8px white');
      // console.log(idArray[i]);
      // console.log(idArray[currentIndex]);
    }
  }
  // console.log('#' + idArray[currentIndex].id);
}, 100);//end highlight function

//stop highlight
// $("#home-page-hame-menu-icon").hover(function() {
//   for(var i = 0; i<idArray.length; i++){
//     if (idArray[i].id === idArray[currentIndex].id){
//       $('#' + idArray[i].id).css('box-shadow', 'none');
//       // console.log("Inside the if", '#' + idArray[i].id);
//     }
//     currentIndex=-1;
//   }
//}); //end click function

//auto timer function

     var stopTimer = setInterval(function(){
      rightArrow();
}, 5000);
//end auto timer function

//auto stop function
 $(".home-page-ham-menu").click(function(){
  //  console.log("ham-clicked");
   clearInterval(stopRunning);
   clearInterval(stopTimer);
   currentIndex= 0;
});
 //end auto stop function

// auto stop function 2
// $(".backpacking-page-left-arrow-container").click(function(){
//   clearInterval(stopTimer);
//});//end auto stop function 2

$(".backpacking-page-dot-routes").click(function(){
  clearInterval(stopTimer);
}); //end auto stop function

$(".backpacking-page-left-arrow-container").click(function(){
  clearInterval(stopTimer);
}); //end auto stop function

$(".backpacking-page-right-arrow-container").click(function(){
  clearInterval(stopTimer);
}); //end auto stop function


//right arrow click
$(".backpacking-page-right-arrow-container").click(function() {
  // console.log(currentIndex);
  if(currentIndex === idArray.length - 1){
    currentIndex = 0;
  }
  else{currentIndex = currentIndex + 1;}
 $(".backpacking-page-full-page-background").css('background', idArray[currentIndex].background);
 $(".backpacking-page-small-pic-container").css('background-image', smallIdArray[currentIndex].background);
 $(".backpacking-page-text-container").text(textArray[currentIndex].text);
 runner();
  $('.backpacking-page-text-container').letterDrop();
}); //end right arrow click

//right arrow function test
function rightArrow() {
  // console.log(currentIndex);
  if(currentIndex === idArray.length - 1){
    currentIndex = 0;
  }
  else{currentIndex = currentIndex + 1;}
 $(".backpacking-page-full-page-background").css('background', idArray[currentIndex].background);
 $(".backpacking-page-small-pic-container").css('background-image', smallIdArray[currentIndex].background);
 $(".backpacking-page-text-container").text(textArray[currentIndex].text);
 runner();
 $('.backpacking-page-text-container').letterDrop();
}

var running = 0;
function runner(){
    if (running === 0){
      // console.log("im running");
        running = 1;
        $('.backpacking-page-dot-routes').css({
            '-webkit-animation-play-state': 'running'
        });
        setTimeout(function(){
            $('.backpacking-page-dot-routes').css({
                '-webkit-animation-play-state': 'paused'
            });
            running = 0;
        },2000);
    } else {
        // console.log('let me finish');
    }
}



//left arrow click
$(".backpacking-page-left-arrow-container").click(function() {
  if(currentIndex === 0){
    currentIndex = idArray.length-1;
  }
  else{currentIndex = currentIndex - 1;}
 $(".backpacking-page-full-page-background").css('background', idArray[currentIndex].background);
 $(".backpacking-page-small-pic-container").css('background-image', smallIdArray[currentIndex].background);
 $(".backpacking-page-text-container").text(textArray[currentIndex].text);
 runner();
  $('.backpacking-page-text-container').letterDrop();
});//end left arrow click



//code for letter drop
(function($) {

$.fn.letterDrop = function() {
  // Chainability
  console.log("letterDrop");
  return this.each( function() {

  var obj = $( this );

  var drop = {
    arr : obj.text().split( '' ),

    range : {
      min : 1,
      max : 9
    },

    styles : function() {
      var dropDelays = '\n', addCSS;

       for ( i = this.range.min; i <= this.range.max; i++ ) {
         dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';
       }

        addCSS = $( '<style>' + dropDelays + '</style>' );
        $( 'head' ).append( addCSS );
    },

    main : function() {
      var dp = 0;
      obj.text( '' );

      $.each( this.arr, function( index, value ) {

        dp = dp.randomInt( drop.range.min, drop.range.max );

        if ( value === ' ' )
          value = '&nbsp';

          obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );

      });

    }
  };

  Number.prototype.randomInt = function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  };


  // Create styles
  drop.styles();


    // Initialise
    drop.main();
  });

};

}(jQuery));


// USAGE
$('.backpacking-page-text-container').letterDrop();




      });//end of jquery code
  }
};

});
