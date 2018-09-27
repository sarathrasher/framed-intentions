const db = require('./db');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const authRouter =  new express.Router();
const publicRouter = new express.Router();
const { fetchImages } = require('./fetch-images');
const jwt = require('jsonwebtoken');
const secrets = require('./secrets');
const expressJwt = require('express-jwt');

let allowCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

let signup = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  db.addNewUser(email, password)
    .then(data => {
      let token = jwt.sign(
        {
          email: email,
          id: data.id
        },
        secrets.SIGNATURE,
        {expiresIn: '7d'});
        console.log({
          token: token, 
          email: email, 
          id: data.id
        })
    res.send({
      token: token, 
      email: email, 
      id: data.id
    });
})
    .catch(console.error)
}


app.use(bodyParser.json());

app.use(express.static("../Frontend/build"));
app.use(allowCORS);
app.use(publicRouter);
// app.post('/authenticate', authenticate);
publicRouter.post('/signup', signup);
app.use('/api', authRouter);
authRouter.get('/search/:query', fetchImages);

app.listen(3001);