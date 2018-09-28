import React from 'react';
import { connect } from 'react-redux';
import CreationScreen from './CreationScreen'

let boardSaveFetch = (props) =>
  fetch(`http://localhost:3001/api/add-board`, {
    method: 'POST',
    body: JSON.stringify(props),
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(responseObj => 
    <div class='home-screen'>
      <CreationScreen />
      <p className='saved-script'>Your board has been saved.</p>
    </div>
  )

let BoardSaveButton = (props) =>
  <button className='submit-button'
    onClick={ event => {
      event.preventDefault();
      boardSaveFetch(props);
      console.log(props);
      }
    }
    >Save Board
  </button>

let SmartBoardSaveButton = connect(state => ({userBoard: state.userBoard, userId: state.id}))(BoardSaveButton)
export default SmartBoardSaveButton;
