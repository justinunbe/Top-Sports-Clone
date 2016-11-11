-- insert into products(
--   name, description, price, img
-- )
-- values
-- ('Isothermal Flask', 'keeps water cold', 11.99,'http://www.decathlon.co.uk/media/817/8172380/big_f3bd406bdd75407f885783e11a006b9a.jpg');

insert into products(
  name, description, price, img
)
values
($1, $2, $3,$4);
