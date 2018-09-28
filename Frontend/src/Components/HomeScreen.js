import React from 'react';
import BoardTemplate from './BoardTemplate';
import SearchBarFormContainer from './SearchBarFormContainer';

class ImageSearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBoard: []
    }
  }
  fetchImages() {
    fetch(`${SERVER_URL}/api/load-board`, {
      method: "GET", 
      headers: {
        Accept: 'application/json'
      },
    })
    .then(response => response.text())
    .then(stringResponse => JSON.parse(stringResponse))
    .then(data => this.setState({ userBoard: data}))
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.fetchImages();
    }
  }
 render() {
  if (this.state.imageSearchResults.length > 0) {
    return (
      <div className='home-page'>
        <h1 className='title'>Framed Intentions</h1>
        <SearchBarFormContainer history={props.history}/>
        <BoardTemplate />)
  } else {
    return null
  }
 }
}

export default HomeScreen;