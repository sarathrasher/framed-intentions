const { UNSPLASH_API_KEY } = require('./secrets.js');
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

module.exports = { fetchImages }