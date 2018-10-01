import React from 'react';

let BoardSquare = (props) => {
    let styles = {
      top: props.image.location[1],
      left: props.image.location[0],
      width: props.image.size[0],
      height: props.image.size[1]
    }
  return (
    <div>
      <img style={styles}
      className='sidebar-image'
      src={props.image.image_url}
      alt={props.image.description}
      data-x={props.image.location[0]}
      data-y={props.image.location[1]}
      width={props.image.size[0]}
      height={props.image.size[1]}
    ></img>
    </div>
  )
}

export default BoardSquare;