CREATE TABLE users(
    userId integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    userName varchar (60) NOT NULL,
    userSurname varchar (60) NOT NULL,
    email varchar (60) NOT NULL,
    passwordHash varchar (255) NOT NULL
);

CREATE TABLE record(
    recordId integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    concept varchar (100),
    dateHour date NOT NULL,
    amount float NOT NULL,
    method bytea NOT NULL,
    author integer REFERENCES users (userId)
);