-- User table (login info)
CREATE TABLE users(
    id serial PRIMARY KEY NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

