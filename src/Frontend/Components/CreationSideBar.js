import React from 'react';
import InteractiveWrapper from './InteractiveWrapper'

let CreationSideBar = (props) =>
  <div className='side-bar'>
    {props.images.map(image =>
      <InteractiveWrapper image={image}/>
    )}
  </div>

export default CreationSideBar