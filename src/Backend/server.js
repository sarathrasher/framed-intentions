const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const authRouter =  new express.Router();
const publicRouter = new express.Router();
const { fetchImages } = require('./fetch-images');

let allowCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

authRouter.get('/search/:query', fetchImages)

app.use(bodyParser.json());
// authRouter.use(validateToken);
app.use(express.static("public"));
app.use(allowCORS);
app.use(publicRouter);
app.use('/api', authRouter);

app.listen(3000);