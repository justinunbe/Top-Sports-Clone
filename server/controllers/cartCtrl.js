var app = require('./../index');
var db = app.get('db');


//step 5
module.exports = {
  addProduct: function(req, res, next){
    db.add_product_to_cart([req.params.id], function (err, response) {
      res.status(200).send(response);
    });
  }
};



// var p = [
//   req.body.name,
//   req.body.description,
//   req.body.price,
//   req.body.img
// ];
