CREATE DATABASE budget;

CREATE SEQUENCE generic
    MINVALUE 0
    START 0
    AS integer
    OWNED BY users.userId;
    

CREATE TABLE users(
    userId SERIAL PRIMARY KEY,
    userName varchar (60) NOT NULL,
    userSurname varchar (60) NOT NULL,
    email varchar (60) NOT NULL,
    passwordHash varchar (255) NOT NULL
);

CREATE TABLE records(
    recordId integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    concept varchar (100),
    dateHour date NOT NULL,
    amount float NOT NULL,
    method bytea NOT NULL,
    author integer REFERENCES users (userId)
);

insert into users values
('leoda','Dangeli', 'leodangeli11@gmail.com','passwordhash');

insert into records values
('Transaction','2021/03/22', 17.000, 'Ingreso', 1);   