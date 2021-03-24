CREATE DATABASE budget;

/* CREATE SEQUENCE generic
    MINVALUE 0
    START 0
    AS integer
    OWNED BY users.userId; */
-- CREATE SCHEMA userSchema;

CREATE TABLE users(
    userId SERIAL PRIMARY KEY,
    userName varchar (40) NOT NULL,
    email varchar (60) NOT NULL,
    passwordHash varchar (255) NOT NULL
);

CREATE TABLE records(
    recordId SERIAL PRIMARY KEY,
    concept varchar (100),
    dateHour date NOT NULL,
    amount float NOT NULL,
    method bytea NOT NULL,
    author integer REFERENCES users (userId)
);

insert into users (userName, email, passwordHash) values
    ('leoda','leodangeli11@gmail.com','passwordhash'),
    ('jesus','apache@gmail.com', 'apachepass'),
    ('martin', 'romerogmail.com', 'romeropass');

insert into records (concept, dateHour, amount, method, author) values
('Transaction','2021/03/22', 17.000, 'Ingreso', 1);