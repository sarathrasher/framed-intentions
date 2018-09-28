const pgp = require('pg-promise')();
const { DATABASE_URL } = require('./secrets');
const dbConfig = DATABASE_URL;
const db = pgp(dbConfig);

// where sql queries will go



let addNewUser = (email, password) => {
  return db.one('INSERT INTO users(email, password) \
    VALUES($1, $2) RETURNING id',
    [email, password]);
}


// let retrieveUser = 


module.exports = {
  addNewUser: addNewUser
};

// addNewUser('hello@world.com', 'password')
//   .then(console.log)
//   .catch(console.error);
