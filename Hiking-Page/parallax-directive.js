angular.module("app").directive("ParallaxDirective", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attribute) {
            $(window).scroll(function() {
                var winscroll = $(this).scrollTop();
                // console.log(winscroll);
                var theta = $(this).scrollTop() / 10 % Math.PI;
                $('.hiking-page-orange-square').css({
                    'transform': 'translate(0px, -' + winscroll / 15 + '%)'
                });

            });
        }
    };
});
