import React from 'react';
import InteractiveImages from './InteractiveImages'

let CreationSideBar = (props) =>
  <div className='side-bar'>
    {props.images.map(image =>
      <InteractiveImages image={image}/>
    )}
  </div>

export default CreationSideBar