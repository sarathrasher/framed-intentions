import React from 'react';
import BoardTemplate from './BoardTemplate';
import SearchBarFormContainer from './SearchBarFormContainer';
let SERVER_URL = process.env.REACT_APP_SERVER_URL;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBoard: []
    }
  }
  fetchImages() {
    let user_id = this.props.match.params.user_id;
    fetch(`${SERVER_URL}/api/load-board/${user_id}`, {
      method: "GET", 
      headers: {
        Accept: 'application/json'
      },
    })
    .then(response => response.text())
    .then(data => {
      this.setState({ userBoard: JSON.parse(data)}) ;
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.user_id !== this.props.match.params.user_id) {
      this.fetchImages();
    }
  }
 render() {
  if (this.state.userBoard.length > 0) {
    return (
      <div className='home-page'>
        <h1 className='title'>Framed Intentions</h1>
        <SearchBarFormContainer history={this.props.history}/>
        <BoardTemplate userBoard={this.state.userBoard}/>
      </div>)
  } else {
    return (
      <div className='home-page'>
        <h1 className='title'>Framed Intentions</h1>
        <SearchBarFormContainer history={this.props.history}/>
      </div>)
  }
 }
}

export default HomeScreen;