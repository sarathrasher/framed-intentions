import React from 'react';
import BoardSquare from './BoardSquare';

let BoardTemplate = (props) => 
  <div className='board-container'>
    <div className='board'>
      {props.userBoard.map(image =>
        <BoardSquare key={image.id} userBoard={props.userBoard} image={image} />
        )}
    </div>
  </div>

export default BoardTemplate;