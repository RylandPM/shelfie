drop table if exists product;

create table
if not exists product
(id serial primary key,
name varchar
(25) not null,
price int not null,
img text not null);