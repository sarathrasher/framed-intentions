import React from 'react';
import InteractWrapper from './InteractWrapper';

const draggableOptions = {
  onmove: event => {
    const target = event.target
  // keep the dragged position in the data-x/data-y attributes
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
  }
}

const InteractiveImages = (props) => 
  <InteractWrapper
    className='sidebar-image-container'
    key={props.image.id}
    draggable
    draggableOptions={draggableOptions}
    >
    <img 
    className='sidebar-image'
    src={props.image.smallURL}
    alt={props.image.description}></img>
  </InteractWrapper>


export default InteractiveImages;
