import React from 'react';
import InteractWrapper from './InteractWrapper'
import InteractiveImages from './InteractiveImages';
import dropzoneOptions from '../Actions/dropzoneOptions'
import { connect } from 'react-redux';

let CreationBoardTemplate = (props) => 
  <InteractWrapper className='board-container dropzone'
  dropzone 
  dropzoneOptions={dropzoneOptions} 
  userBoard={props.userBoard}>
    <div className='board'>
      {props.userBoard.map(image =>
        <InteractiveImages image={image}/>
      )}
    </div>
  </InteractWrapper>

let SmartCreationBoardTemplate = connect(state => ({userBoard: state.userBoard}))(CreationBoardTemplate)

export default SmartCreationBoardTemplate;