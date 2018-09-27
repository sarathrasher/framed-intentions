const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'framed-app',
    user: 'postgres',
    password: ''
};
const db = pgp(cn);

// where sql queries will go



let addNewUser = (email, password) => {
  return db.one('INSERT INTO users(email, password) \
    VALUES($1, $2) RETURNING id',
    [email, password]);
}


let retrieveUser = 


module.exports = {
  addNewUser: addNewUser
};

// addNewUser('hello@world.com', 'password')
//   .then(console.log)
//   .catch(console.error);
