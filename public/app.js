angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
.state('home', {
    url:"/",
    templateUrl: "Home-Page/home.html"
})
.state('hiking', {
  url:"/Hiking",
  templateUrl: "Hiking-Page/hiking.html",
  controller: 'mainCtrl'
})
.state('camping', {
  url:'/Camping',
  templateUrl: 'Camping-Page/camping.html',
})
.state('Upcoming', {
  url:'/Upcoming',
  templateUrl: 'Upcoming-Page/coming.html',
})
.state('shopping', {
  url:'/Shopping',
  templateUrl: 'Shopping-page/shopping.html',
  controller: 'mainCtrl'
})
.state('backpacking', {
  url:'/BackPacking',
  templateUrl: 'BackPacking-Page/BackPacking.html',
});
$urlRouterProvider
        .otherwise('/');

});//end of config
