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

let login = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  db.checkUserCreds(email, password)
    .then(data =>  { console.log(data);
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
    .catch( ()=> res.send({error: "Error logging in. Please try again"}))
}

let addBoard = (req, res) => {
  let user_id = req.body.userId;
  let userBoard = req.body.userBoard;
  db.addBoard(user_id)
  .then((data) => {
    let board_id = data[0].board_id;
    userBoard.map(image => {
      let image_id = image.id;
      let description = image.description;
      let image_url = image.smallURL;
      let location = image.location;
      let size = image.size;
      let type = image.type;
      db.addImages(board_id, image_id, image_url, description, location, size, type)
      .then((response) => {
        res.end(JSON.stringify(response))
      }
      )
      .catch(err =>
        console.log(err)
      );
    })
  })
  .catch(err =>
    console.log(err)
  )
}

let fetchUserBoard = (req, res) => {
    let user_id = req.params.user_id;
    db.getBoardId(user_id)
    .then((data) => {
      let board_id = data[0].board_id;
      db.getBoardImages(board_id)
        .then((response) => {
          console.log(response)
          res.end(JSON.stringify(response))
          }
        )
        .catch(err =>
          console.log(err))
        })
    .catch(err =>
      console.log(err)
    )
}

app.use(bodyParser.json());

app.use(express.static("../Frontend/build"));
app.use(allowCORS);
app.use(publicRouter);
// app.post('/authenticate', authenticate);
publicRouter.post('/signup', signup);
publicRouter.post('/login', login);
app.use('/api', authRouter);
authRouter.get('/search/:query', fetchImages);
authRouter.post('/add-board', addBoard);
authRouter.get('/load-board/:user_id', fetchUserBoard)


app.listen(3001);
