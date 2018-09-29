import React from 'react';

let BoardSquare = (props) => {
  return (
    <img style={props.styles}
      className='sidebar-image'
      src={props.image.smallURL}
      alt={props.image.description}
      data-x={props.image.location[0]}
      data-y={props.image.location[1]}
      width={props.image.size[0]}
      height={props.image.size[1]}
    ></img>
  )
}

export default BoardSquare;