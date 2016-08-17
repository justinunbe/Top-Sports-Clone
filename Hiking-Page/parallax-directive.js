angular.module("app").directive("parallaxDirective", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attribute) {
            $(window).scroll(function() {
                var winscroll = $(this).scrollTop();
                // console.log(winscroll);
                var theta = $(this).scrollTop() / 10 % Math.PI;

                // //first row for parallax on left side
                $('.hiking-page-orange-square').css({
                    'transform': 'translate(0px, -' + winscroll / 10 + '%)'
                });
                $('.hiking-page-tin-flask').css({
                    'transform': 'translate(0px, -' + winscroll / 6.5 + '%)'
                });
                $('#hiking-page-flask-1L-positioning').css({
                    'transform': 'translate(0px, -' + winscroll / 4 + '%)'
                });
                //
                //second row for parallax left side
                $('.hiking-page-pic-of-hiking-shoes-for-sale').css({
                    'transform': 'translate(0px, -' + winscroll / 18 + '%)'
                });
                // //
                // // // //third row for parallax left side
                $('.hiking-page-camp-big-container').css({
                    'transform': 'translate(0px, -' + winscroll /0.7 + '%)'
                });
                //
                //forth row for parallax left side
                $('.hinking-page-orange-background-bar').css({
                    'transform': 'translate(0px, -' + winscroll / 3 + '%)'
                });
                $('.hiking-page-pullover-jacket-pic-container').css({
                    'transform': 'translate(0px, -' + winscroll / 8 + '%)'
                });
                $('#hiking-page-pullover-arpenaz-positioning').css({
                    'transform': 'translate(0px, -' + winscroll / 2.5 + '%)'
                });
                //
                // fifth row for paralllax left side
                $('#hiking-page-Tshirt-Arpenaz-positioning').css({
                    'transform': 'translate(0px, -' + winscroll / 5 + '%)'
                });
                //
                //sixth row for parallax left side
                $('.hiking-page-orange-square-background-tent').css({
                    'transform': 'translate(0px, -' + winscroll / 6 + '%)'
                });
                $('.hiking-page-tent-picture').css({
                    'transform': 'translate(0px, -' + winscroll / 5.5 + '%)'
                });
                $('.hiking-page-tent-picture-description').css({
                    'transform': 'translate(0px, -' + winscroll / 0.8 + '%)'
                });
                //
                // //seventh row for parallax left side
                $('#hiking-page-light-100-positioning').css({
                    'transform': 'translate(0px, -' + winscroll / 7 + '%)'
                });
                //
                // // //eighth row for parallax left side
                $('.hiking-page-hammock-pic-container').css({
                    'transform': 'translate(0px, -' + winscroll / 8 + '%)'
                });
                $('.hiking-page-backpack-pic-container').css({
                    'transform': 'translate(0px, -' + winscroll / 12 + '%)'
                });
                $('#hiking-page-backpack-positioning').css({
                    'transform': 'translate(0px, -' + winscroll / 4.5 + '%)'
                });
                // //
                // // //ninth row for parallax left side FINAL ROW
                $('.hiking-page-second-hammock-pic-container').css({
                    'transform': 'translate(0px, -' + winscroll / 5.5 + '%)'
                });

                //first row for parallax RIGHT side
                $('.hiking-page-backpack-sleeping-bag-pic-container').css({
                    'transform': 'translate(0px, -' + winscroll / 6.5 + '%)'
                });
                //
                //second row for parallax RIGHT side
                $('#hiking-page-shoes-positioning').css({
                    'transform': 'translate(0px, -' + winscroll / 5.5 + '%)'
                });
                // //
                // // //third row for parallax RIGHT side
                $('.hiking-page-vest-guitar-pic-container').css({
                    'transform': 'translate(0px, -' + winscroll / 40 + '%)'
                });
                $('.hiking-page-vest-guitar-pic-description').css({
                    'transform': 'translate(0px, -' + winscroll / 7.5 + '%)'
                });
                $('#hiking-page-ing-big-container').css({
                    'transform': 'translate(0px, -' + winscroll / 1.5 + '%)'
                });
                // //
                //  //fourth row for parallax RIGHT side
                //  //fifth row for parallax RIGHT side
                $('.hiking-page-washing-hands-pic-container').css({
                    'transform': 'translate(0px, -' + winscroll / 13 + '%)'
                });
                //sixth row for parallax RIGHT side
                $('#hiking-page-tent-positioning').css({
                    'transform': 'translate(0px, -' + winscroll / 6.5 + '%)'
                });
                // // // //seventh row for parallax RIGHT side
                $('.hiking-page-light-pic-with-guitar-container').css({
                    'transform': 'translate(0px, -' + winscroll / 29 + '%)'
                });
                $('.hiking-page-light-pic-with-tent-container').css({
                    'transform': 'translate(0px, -' + winscroll / 80 + '%)'
                });
                // // //eighth row for parallax RIGHT side
                $('#hiking-page-pullover-positioning').css({
                    'transform': 'translate(0px, -' + winscroll / 7 + '%)'
                });
                $('.hiking-page-close-line-pic-container').css({
                    'transform': 'translate(0px, -' + winscroll / 40 + '%)'
                });
                //ninth row for parallax RIGHT side
                $('#hiking-page-hammock-positioning').css({
                    'transform': 'translate(0px, -' + winscroll / 2.8 + '%)'
                });
            });//end of parallax
        }
    };
});
