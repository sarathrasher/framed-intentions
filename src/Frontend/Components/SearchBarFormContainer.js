import React from 'react';
import ImageSearchBar from './ImageSearchBar';
import { connect } from 'react-redux';

class SearchBarFormContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          newInput: "",
      }
  }
  render() {
    let searchImages = (event) => {
      console.log(this.props);
      event.preventDefault();
      let input = event.target.children[0].value;
      this.props.history.push(`/search/${input}`);
      this.setState({ newInput: "" });
    } 
    let handleNewInput = (event) => this.setState({ newInput: event.target.value });
    return <ImageSearchBar searchImages={searchImages} handleNewInput={handleNewInput} newInput={this.state.newInput}/>
    }
}

// let SmartSearchBarFormContainer = connect(state => state)(SearchBarFormContainer)
export default SearchBarFormContainer;