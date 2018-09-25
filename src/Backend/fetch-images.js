const { UNSPLASH_API_KEY } = require('../../secrets');
const fetch = require('node-fetch');

let fetchImages = (req, res) => {
  console.log(res);
  let fetchPromise = fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=9&query=dogs&orientation=squarish&client_id=${UNSPLASH_API_KEY}`, {
    method: 'GET',
  })
  .then(response => {
  return response.json();
  })
  .then(products => products.results)
  .then(results => results.map(result => {
    return (
      { id: result.id, description: result.description, smallURL: result.urls.small }
    )
  })).then(resultsObjects => res.send(JSON.stringify(resultsObjects)))
  .catch(err => console.log(err));

  return fetchPromise;
}

exports.module = fetchImages;