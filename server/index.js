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
  db.join_cart_and_product(function(err, cart){
    res.status(200).json(cart);
    console.log("my cart ",cart);
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
app.post('/cart/:id', cartCtrl.addProduct);

//update product
app.put('/products/:id', function(req, res, next){

});
//delete cart item
app.delete('/cart/:id', function(req, res, next){
  db.remove_product_from_cart(req.params.id, function(err, product){
    if(err){
      // console.log(err);
    res.status(500).send(err);
    }
    else{res.status(200).send(product);
    }
  });
});

app.listen(3000, function() {
  console.log("listening");
});
