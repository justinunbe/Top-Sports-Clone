angular.module("app").directive("routeDirective", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attribute) {



              $("#hiking-page-start-of-route").click(function(e) {
                e.preventDefault();
                $('html, body').animate({
                  scrollTop: $("#route").offset().top
                }, 1500);
});


        }
    };
});
