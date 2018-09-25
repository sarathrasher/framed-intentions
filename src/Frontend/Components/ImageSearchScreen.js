import React from 'react';
import SearchBarFormContainer from './SearchBarFormContainer';

class ImageSearchScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let query = this.props.match.params.query;
    fetch(`/api/search/${query}`, {
          method: "GET", 
          headers: {
            Accept: 'application/json'
          },
        })
        .then(data => console.log(data))
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