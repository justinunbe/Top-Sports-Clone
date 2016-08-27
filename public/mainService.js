angular.module("app").service("mainService", function($http){


this.allProducts = function() {
    return $http({
            method: "GET",
            url: "/products"
        })
        .then(function(response) {
            // console.log(response);
            return response.data;
        });
};

this.allCartProducts = function() {
    return $http({
            method: "GET",
            url: "/cart"
        })
        .then(function(response) {
          // console.log(response.data);
            return response.data;
        });
};

this.allCartProductsPrice = function() {
    return $http({
            method: "GET",
            url: "/cart"
        })
        .then(function(response) {
          console.log("price ",response.data);
          var total = 0;
          for (var i = 0; i < response.data.length; i++) {
            // console.log(response.data[0].price);
            total += parseFloat(response.data[i].price);
          }
          console.log(total);
            return total;
        });
};

//step 3
  this.addToCart = function(product) {
    // console.log(product);
      return $http({
              method: "POST",
              url: "/cart/" + product
          })
          .then(function(response) {
              return response.data;
          });
  };

  this.deleteFromCart = function(productId) {
    return $http({
            method: "DELETE",
            url: '/cart/' + productId
    })
    .then(function(response) {
        return response.data;
    });
  };
}); //end of service
