angular.module("app").controller("mainCtrl", function($scope, mainService, $anchorScroll, $location){


//step 2
$scope.buyFlask = function(flaskId) {
  console.log('mainCtrl', flaskId);
  mainService.addToCart(flaskId).then(function (response) {
    swal("Added To Cart!", "", "success");
  });
};

$scope.gotoAnchor = function() {
        var newHash = 'route';
        if ($location.hash() !== newHash) {
          // set the $location.hash to `newHash` and
          // $anchorScroll will automatically scroll to it
          $location.hash('route');
        } else {
          // call $anchorScroll() explicitly,
          // since $location.hash hasn't changed
          $anchorScroll();
        }
      };

$scope.deleteFromCart = function(productId) {
  // console.log(productId);
  mainService.deleteFromCart(productId)
  .then(function (response) {
    $scope.productPrice();
    $scope.grabAllCartProducts();
        swal("Removed From Cart!", "", "success");
  });
};

$scope.grabAllCartProducts = function() {
mainService.allCartProducts()
    .then(function(response) {
      // console.log(, response);
      $scope.allCartProducts = response;
      console.log(response);
  });
};

mainService.allCartProductsPrice()
    .then(function(response) {
      $scope.productPriceTotal = response;
      $scope.taxPrice = Number((response * 0.047).toFixed(2));
      var tax = $scope.taxPrice;
      console.log(response);
      console.log(tax);
      $scope.productFinalTotal = (response + tax).toFixed(2);
  });

$scope.productPrice = function(response) {
mainService.allCartProductsPrice()
    .then(function(response) {
      $scope.productPriceTotal = response;
      $scope.taxPrice = Number((response * 0.047).toFixed(2));
      var tax = $scope.taxPrice;
      console.log(response);
      console.log(tax);
      $scope.productFinalTotal = (response + tax).toFixed(2);
  });
};

// $scope.productPrice = function(response) {
//   mainService.allCartProductsPrice().then(function(response){
//
// });
//   });



$scope.grabAllCartProducts();

$scope.grabAllProducts = function() {
  mainService.allProducts()
  .then (function(response) {
  // console.log('data: ', response);
    $scope.productFlask = response[0];
    $scope.productShoes = response[1];
    $scope.productJacket = response[2];
    $scope.productTshirt = response[3];
    $scope.productTent = response[4];
    $scope.productLantern = response[5];
    $scope.productPshirt = response[6];
    $scope.productBackpack = response[7];
    $scope.productHammock = response[8];
  });
}();
}); //end of controller
