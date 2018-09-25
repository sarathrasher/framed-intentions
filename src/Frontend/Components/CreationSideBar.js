import React from 'react';

let CreationSideBar = (props) =>
  <div className='side-bar'>
    {props.images.map(image =>
      <div className='sidebar-image-container'>
      <img 
        className='sidebar-image'
        src={image.rawURL}
        alt='image'></img>
      </div>
    )}
  </div>


export default CreationSideBar