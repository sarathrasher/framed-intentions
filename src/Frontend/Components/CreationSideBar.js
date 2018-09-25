import React from 'react';

let CreationSideBar = (props) =>
  <div className='side-bar'>
    {props.images.map(image =>
      <div className='sidebar-image-container'
      key={image.id}>
      <img 
        className='sidebar-image'
        src={image.smallURL}
        alt={image.description}></img>
      </div>
    )}
  </div>


export default CreationSideBar