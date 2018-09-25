import React from 'react';
import SearchBarFormContainer from './SearchBarFormContainer';

class ImageSearchScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let query = this.props.match.params.query
    fetch(`/search/${query}`, {
          method: "GET", 
              headers: {
                "content-type": "application/json"
              },
              redirect: "follow", 
              referrer: "no-referrer", 
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
      }
 render() {
   return (
    <div className='image-search-screen'>
      <SearchBarFormContainer history={this.props.history}/>
      Images
    </div>)
 }
}

export default ImageSearchScreen;