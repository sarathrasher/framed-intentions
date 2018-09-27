import React from 'react';
import SearchBarFormContainer from './SearchBarFormContainer';
import SearchBoardTemplate from './SearchBoardTemplate';
import { SERVER_URL } from '../../../Backend/secrets'

class ImageSearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSearchResults: []
  }
  }
  componentDidMount() {
    let query = this.props.match.params.query;
    fetch(`${SERVER_URL}api/search/${query}`, {
          method: "GET", 
          headers: {
            Accept: 'application/json'
          },
        })
        .then(response => response.text())
        .then(stringResponse => JSON.parse(stringResponse))
        .then(data => this.setState({ imageSearchResults: data}))
        .catch(err => console.log(err))
      }
 render() {
  return (
    <div className='image-search-screen'>
      <SearchBarFormContainer history={this.props.history}/>
      <SearchBoardTemplate images={this.state.imageSearchResults} />
    </div>)
 }
}

export default ImageSearchScreen;