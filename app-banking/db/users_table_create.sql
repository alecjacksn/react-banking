CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(180),
    email VARCHAR(180),
    img TEXT,
    authID TEXT
)