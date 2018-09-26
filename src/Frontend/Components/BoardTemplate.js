import React from 'react';
import InteractWrapper from './InteractWrapper'
import InteractiveImages from './InteractiveImages';
import dropzoneOptions from '../Actions/dropzoneOptions'

let BoardTemplate = (props) => 
  <InteractWrapper className='board-container dropzone'
  dropzone 
  dropzoneOptions={dropzoneOptions}>
    <div className='board'>
      {props.images.map(image =>
        <InteractiveImages image={image}/>
      )}
    </div>
  </InteractWrapper>

export default BoardTemplate;