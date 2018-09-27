import React from 'react';
import InteractWrapper from './InteractWrapper';
import draggableOptions from '../Actions/dragAndDrop';
import resizableOptions from '../Actions/resize'
import { connect } from 'react-redux'


const InteractiveImages = (props) => 
  <InteractWrapper
    className='sidebar-image-container'
    draggable
    draggableOptions={draggableOptions}
    resizable
    resizableOptions={resizableOptions}
    {...props}
    >
    <img 
    className='sidebar-image'
    src={props.image.smallURL}
    alt={props.image.description}
    ></img>
  </InteractWrapper>

export default InteractiveImages;
