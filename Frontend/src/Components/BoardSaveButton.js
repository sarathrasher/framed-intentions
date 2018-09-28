import React from 'react';
import { connect } from 'react-redux';
import CreationScreen from './CreationScreen'

let boardSaveFetch = (props) =>
  fetch(`http://localhost:3001/api/add-board`, {
    method: 'POST',
    body: JSON.stringify(props.userBoard),
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
      boardSaveFetch(props)
      }
    }
    >Save Board
  </button>

let SmartBoardSaveButton = connect(state => ({userBoard: state.userBoard}))(BoardSaveButton)
export default SmartBoardSaveButton;

