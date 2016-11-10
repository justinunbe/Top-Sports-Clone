var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres:tennis123@localhost:5432/topsports";

var app = module.exports = express();
var massiveInstance = massive.connectSync({
  connectionString: connectionString
});
app.set('db', massiveInstance);
var db = app.get('db');

var cartCtrl = require('./controllers/cartCtrl');

// console.log(db);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));


// get all products
app.get('/products', function(req, res, next){
  db.get_all_products(function(err, products){
    res.status(200).json(products);
  });
});

//get cart
// app.get('/cart', function(req, res, next){
//   db.get_cart(function(err, cart){
//     res.status(200).json(cart);
//   });
// });

app.get('/cart', function(req, res, next){
  db.join_cart_and_product(function(err, resp){
    res.status(200).json(resp);
   console.log("my cart ",resp);
  });
});

// find particular products
app.get('/products/name/:name', function(req, res, next){
  db.get_product_by_name(req.params.name, function(err, product){
    res.status(200).send(product);
  });
});
//create product
app.post('/products', function(req, res, next){

});
//add product
//step 4
app.post('/cart/:products_id', cartCtrl.addProduct);

//update product
app.put('/products/:products_id', function(req, res, next){

});
//delete cart item
app.delete('/cart/:cart_id', function(req, res, next){
  db.remove_product_from_cart(req.params.cart_id, function(err, product){
    if(err){
      // console.log(err);
    res.status(500).send(err);
    }
    else{res.status(200).send(product);
    }
  });
});

app.listen(80, function() {
  console.log("listening");
});
