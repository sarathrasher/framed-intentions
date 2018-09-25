const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const authRouter =  new express.Router();
const publicRouter = new express.Router();
// const { fetchImages } = require('./fetch-images');

const { UNSPLASH_API_KEY } = require('../../secrets');
const fetch = require('node-fetch');

let fetchImages = (req, res) => {
  let query = req.params.query;
  fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=9&query=${query}&orientation=squarish&client_id=${UNSPLASH_API_KEY}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  .then(response => response.json())
  .then(products => {
    return products.results})
  .then(results => results.map(result => {
    return (
      { id: result.id, description: result.description, smallURL: result.urls.small }
    )
  })).then(resultsObjects => res.send(JSON.stringify(resultsObjects)))
  .catch(err => res.send(err));
}

let allowCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

app.use(bodyParser.json());

app.use(express.static("public"));
app.use(allowCORS);
app.use(publicRouter);
app.use('/api', authRouter);
authRouter.get('/search/:query', fetchImages);

app.listen(3001);