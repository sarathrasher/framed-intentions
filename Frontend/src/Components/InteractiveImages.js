import React from 'react';
import InteractWrapper from './InteractWrapper';
import draggableOptions from '../Actions/dragAndDrop';
import resizableOptions from '../Actions/resize'


const InteractiveImages = (props) => 
  <InteractWrapper
    className='sidebar-image-container'
    key={props.image.id}
    draggable
    draggableOptions={draggableOptions}
    resizable
    resizableOptions={resizableOptions}
    >
    <img 
    className='sidebar-image'
    src={props.image.smallURL}
    alt={props.image.description}></img>
  </InteractWrapper>


export default InteractiveImages;
