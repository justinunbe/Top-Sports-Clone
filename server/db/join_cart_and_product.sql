SELECT * FROM products
JOIN cart
ON (cart.products_id = products.products_id);
