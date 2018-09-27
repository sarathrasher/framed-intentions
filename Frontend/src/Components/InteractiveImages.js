import React from 'react';
import InteractWrapper from './InteractWrapper';

const InteractiveImages = (props) => 
  <InteractWrapper
    className='sidebar-image-container'
    key={props.image.id}
    draggable
    resizable
    {...props}
    >
    <img 
    className='sidebar-image'
    src={props.image.smallURL}
    alt={props.image.description}
    ></img>
  </InteractWrapper>

export default InteractiveImages;
