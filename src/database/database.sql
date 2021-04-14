CREATE DATABASE budget;
/* CREATE SEQUENCE generic
 MINVALUE 0
 START 0
 AS integer
 OWNED BY users.userId; */
-- CREATE SCHEMA userSchema;
CREATE TABLE IF NOT EXISTS users(
  userId INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  username VARCHAR (40) NOT NULL CHECK (username <> ''),
  email varchar (60) NOT NULL CHECK (email <> ''),
  password VARCHAR (255) NOT NULL CHECK (password <> ''),
  date TIMESTAMP default CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS records(
  recordId INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  concept varchar (250),
  date TIMESTAMP default CURRENT_TIMESTAMP,
  amount FLOAT NOT NULL CHECK (amount < 1),
  methodId INTEGER NOT NULL CHECK (methodId < 1) REFERENCES method(methodId) ON DELETE CASCADE,
  userId INTEGER NOT NULL CHECK (userId < 1) REFERENCES users (userId) ON DELETE CASCADE,
  categoryId INTEGER NOT NULL CHECK (categoryId < 1) REFERENCES category (categoryId) ON DELETE CASCADE
);
CREATE TABLE method(
  methodId INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  method VARCHAR (75) NOT NULL CHECK (method <> '')
);
CREATE TABLE category(
  categoryId INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  category VARCHAR (60) NOT NULL CHECK (category <> '')
);
-- author integer REFERENCES users (userId)
INSERT INTO users (username, email, password)
VALUES (
    'leoda',
    'leoda@gmail.com',
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
    'rome@ropass'
  );
INSERT INTO category(category)
VALUES('Comida'),
  ('Super mercado'),
  ('Lujos'),
  ('Dulces');
INSERT INTO method(method)
VALUES(0, 'Egreso'),
  (1, 'Ingreso');