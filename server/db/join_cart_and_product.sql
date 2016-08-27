SELECT * FROM products
JOIN cart
ON (cart.products_id = products.id);
