import React from 'react';
import ImageSearchBar from './ImageSearchBar';


class SearchBarFormContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          newInput: "",
      }
  }
  render() {
    let searchImages = (event) => {
      event.preventDefault();
      let input = event.target.children[0].value;
      this.setState({ newInput: "" });
      fetch(`/search/${input}`, {
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
      let handleNewInput = (event) => this.setState({ newInput: event.target.value });
      return <ImageSearchBar searchImages={searchImages} handleNewInput={handleNewInput} newInput={this.state.newInput}/>
  }
}

export default SearchBarFormContainer;