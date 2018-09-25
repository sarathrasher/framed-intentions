const { UNSPLASH_API_KEY } = require('../../secrets');
const fetch = require('node-fetch');

let query = 'dogs';

fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=9&query=${query}&client_id=${UNSPLASH_API_KEY}`)
  .then(response => {
  return response.json();
  })
  .then(products => products.results)
  .then(results => results.map(result => {
    return (
      { id: result.id, rawURL: result.urls.raw }
    )
  })).then(resultsObjects => console.log(resultsObjects))
  .catch(err => console.log(err));

