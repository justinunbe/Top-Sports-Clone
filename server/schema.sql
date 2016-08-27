create table products(
id serial primary key not null,
name varchar(70),
description varchar(180),
price money,
img text
);

create table cart(
  id serial primary key not null,
  products_id integer references products
);

create table users(
  id serial primary key not null,
  username varchar(20),
  password varchar(20)
);
