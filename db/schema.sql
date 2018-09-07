create table houses (
id serial primary key,
name text,
address text,
city text,
state text,
zipcode integer
);

insert into houses (name, address, city, state, zipcode)
 
values ('Triplex', '1010 Main Street', 'Phoenix', 'AZ', 12345),
('Duplex', '2020 Awesome Drive', 'Tempe', 'AZ', 12345);