-- add email and password to USER table
INSERT INTO users(email, password) 
VALUES('chicken@feed.com', 'seeds');

-- get email/password from USER table
SELECT * FROM users
WHERE email = 'drno@name.com';