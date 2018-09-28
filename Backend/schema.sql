-- User table (login info)
CREATE TABLE users(
    id serial PRIMARY KEY NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE board_images(
    board_id integer,
    image_id VARCHAR 255,
    img_url VARCHAR 255,
    location integer[],
    size integer[],
    type VARCHAR 255
);

CREATE TABLE user_boards(
    board_id serial PRIMARY KEY NOT NULL,
    user_id VARCHAR 255
)