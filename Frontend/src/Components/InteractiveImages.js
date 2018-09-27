import React from 'react';
import InteractWrapper from './InteractWrapper';
import resizableOptions from '../Actions/resize';
import draggableOptions from '../Actions/dragAndDrop'
import { connect } from 'react-redux';

const InteractiveImages = (props) => 
  <InteractWrapper
    className='sidebar-image-container'
    draggable
    resizable
    className='board-container dropzone'
    userBoard={props.userBoard}
    className='board-container dropzone'
    draggableOptions={draggableOptions}
    ressizableOptions={resizableOptions}
    {...props}
    >
    <img 
    className='sidebar-image'
    src={props.image.smallURL}
    alt={props.image.description}
    ></img>
  </InteractWrapper>

let SmartInteractiveImages = connect(state => ({
  dispatch: state.dispatch, 
  userBoard: state.userBoard
}))(InteractiveImages);

export default SmartInteractiveImages;
