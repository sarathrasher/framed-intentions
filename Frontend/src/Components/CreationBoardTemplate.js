import React from 'react';
import InteractWrapper from './InteractWrapper'
import InteractiveImages from './InteractiveImages';
import dropzoneOptions from '../Actions/dropzoneOptions'
import { connect } from 'react-redux';

let CreationBoardTemplate = (props) => 
  // <InteractWrapper className='board-container dropzone'
  // dropzone 
  // dropzoneOptions={dropzoneOptions} 
  // userBoard={props.userBoard}>
    <div className='board'>
      {props.userBoard.map(image =>
        <InteractiveImages key={image.id} userBoard={props.userBoard} image={image}
          onDragEnd={(x, y) => props.dispatch({type: 'UPDATE_LOCATION', 
          id: image.id, 
          x: x, 
          y: y})}
          onResizeEnd={(width, height) => props.dispatch({
            type: 'UPDATE_SIZE', 
            id: image.id, 
            width: width, 
            height: height})} />
      )}
      { props.saved 
      ?      
        <p className='saved-script'>Your board has been saved.</p>
      :
       <p className='saved-script' />
      }
    </div>
  // </InteractWrapper>

let SmartCreationBoardTemplate = connect(state => ({userBoard: state.userBoard, saved: state.saved}))(CreationBoardTemplate)

export default SmartCreationBoardTemplate;