import React from 'react';
import { connect } from 'react-redux';


let SearchBoardSquare = (props) => {
  let toggleSelected = (event) => {
    event.target.classList.toggle('selected');
    props.dispatch({ type: 'TOGGLE_FROM_SAVED_IMAGES', image: props.image });
  }
  return (
  <div className='search-board-square'>
    <img src={props.image.smallURL} alt={props.image.description} onClick={toggleSelected}></img>
  </div>)
}

let SmartSearchBoardSquare = connect(state => state)(SearchBoardSquare)

export default SmartSearchBoardSquare;