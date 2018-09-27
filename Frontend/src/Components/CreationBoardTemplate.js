import React from 'react';
import InteractWrapper from './InteractWrapper'
import InteractiveImages from './InteractiveImages';
import dropzoneOptions from '../Actions/dropzoneOptions'

let CreationBoardTemplate = (props) => 
  <InteractWrapper className='board-container dropzone'
  dropzone 
  dropzoneOptions={dropzoneOptions}>
    <div className='board'>
      {props.images.map(image =>
        <InteractiveImages image={image} key={image.id}/>
      )}
    </div>
  </InteractWrapper>

export default CreationBoardTemplate;