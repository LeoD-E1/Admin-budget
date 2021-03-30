CREATE DATABASE budget;
/* CREATE SEQUENCE generic
 MINVALUE 0
 START 0
 AS integer
 OWNED BY users.userId; */
-- CREATE SCHEMA userSchema;
CREATE TABLE users(
  userId SERIAL PRIMARY KEY,
  username varchar (40) NOT NULL,
  email varchar (60) NOT NULL,
  password varchar (255) NOT NULL
);
CREATE TABLE records(
  recordId SERIAL PRIMARY KEY,
  concept varchar (100),
  date TIMESTAMP default CURRENT_TIMESTAMP,
  amount float NOT NULL,
  method INTEGER REFERENCES methodType(methodId),
  author INTEGER REFERENCES users (userId),
  category INTEGER REFERENCES category (categoryId)
);
CREATE TABLE methodType(
  methodId INTEGER PRIMARY KEY,
  methodname VARCHAR (30) NOT NULL
);
CREATE TABLE account(
  accountId SERIAL PRIMARY KEY,
  balance FLOAT NOT NULL,
  records INTEGER REFERENCES records(recordId),
  author INTEGER REFERENCES users(userId)
);
CREATE TABLE category(
  categoryId SERIAL PRIMARY KEY,
  category VARCHAR (60) NOT NULL
);
-- author integer REFERENCES users (userId)
insert into users (userName, email, passwordHash)
values (
    'leoda',
    'leodangeli11@gmail.com',
    'passwordhash'
  ),
  (
    'jesus',
    'apache@gmail.com',
    'apachepass'
  ),
  (
    'martin',
    'romerogmail.com',
    'romeropass'
  );
INSERT INTO records (concept, date, amount, method, author, category)
values (
    'Transaction',
    '2021/03/22',
    17.000,
    1,
    1,
    2
  );
INSERT INTO category(category)
VALUES('Comida'),
  ('Super mercado'),
  ('Lujos'),
  ('Dulces');
INSERT INTO methodType(methodId, methodname)
VALUES(0, 'Egreso'),
  (1, 'Ingreso');