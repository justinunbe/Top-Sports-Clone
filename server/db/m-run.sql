-- this is a manual sql file. to run it's contents cd into the db folder and then run: psql -f m-run.sql
-- we need to keep this file clean as it will make the transfer to hosting much easier. And it will make endpoints much easier to create if after running a command such as create table we comment out the sql.
-- also use only single quotes as sql does not like double quotes for some reason

-- create database topsports;
-- \c topsports;
--
-- drop table cart CASCADE;
-- drop table products CASCADE;
-- drop table users CASCADE;

create table users(
	user_id serial primary key,
	username varchar(100),
	password varchar(100)
);

create table products(
	products_id serial primary key,
  name varchar(100),
  description varchar(40),
  price varchar(40),
  img varchar(1000)
);

create table cart(
	cart_id serial primary key,
	products_id integer not null references products(products_id)
);


--example insert statements for products
insert into products(products_id, name, description, price, img)
	values(1, 'Isothermal Flask', 'Keeps Water Cold', 11.99, 'http://www.decathlon.co.uk/media/817/8172380/big_f3bd406bdd75407f885783e11a006b9a.jpg');
insert into products(products_id, name, description, price, img)
  values(3, 'Hiking Shoes', 'Steel toe', 29.99, 'http://www.decathlon.co.uk/media/835/8354308/big_f3a42afdfa014feda4aef147254102dc.jpg ');
insert into products(products_id, name, description, price, img)
	values(4, 'Pullover Jacket', 'Machine Washable', 21.99, 'http://www.decathlon.co.uk/media/831/8319392/big_f2faa3c54e3e437490d9590880c43418.jpg');
insert into products(products_id, name, description, price, img)
  values(5, 'Women T-shirt', 'Machine Washable', 6.99, 'http://www.decathlon.co.uk/media/835/8355040/big_dde3a2524cd54340b66ce6c23742fcc8.jpg');
insert into products(products_id, name, description, price, img)
  values(6, 'Tent', 'Two Man Tent', 59.99, 'http://www.decathlon.co.uk/media/835/8357352/big_8077c58b052a47e9b0fc6a6f8c7d86e6.jpg');
insert into products(products_id, name, description, price, img)
  values(7, 'Lantern', '100 Lumens', 7.99, 'http://www.decathlon.co.uk/media/833/8331135/big_fa500d37350048beaa6d80e9012879d0.jpg');
insert into products(products_id, name, description, price, img)
  values(8, 'Pullover Shirt', 'Matchine Washable', 9.99, 'http://www.decathlon.co.uk/media/822/8226830/big_7a428cb81ccd426185cb11d546b7021e.jpg');
insert into products(products_id, name, description, price, img)
  values(9, 'Backpack', 'Durable', 6.99, 'http://www.decathlon.co.uk/media/833/8331244/big_bcc3e74ddc6d4d10abf4a05aafb8b49c.jpg');
insert into products(products_id, name, description, price, img)
  values(10, 'Hammock', 'Easy to Set Up', 9.99, 'http://www.decathlon.co.uk/media/833/8330395/big_ac3ff0962bdf4cdab12a1b96bb717159.jpg');
