import React from 'react';
import InteractWrapper from './InteractWrapper';
import resizableOptions from '../Actions/resize';
import draggableOptions from '../Actions/dragAndDrop'
import { connect } from 'react-redux';

class InteractiveImages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: {
        top: this.props.image.location[1],
        left: this.props.image.location[0],
        width: this.props.image.size[0],
        height: this.props.image.size[1]
      }
    }
  }

  render() {
    return (
      <InteractWrapper
      className='sidebar-image-container'
      draggable
      resizable
      className='board-container dropzone'
      userBoard={this.props.userBoard}
      className='board-container dropzone'
      draggableOptions={draggableOptions}
      ressizableOptions={resizableOptions}
      {...this.props}
      >
      <img style={this.state.styles}
      className='sidebar-image'
      src={this.props.image.smallURL}
      alt={this.props.image.description}
      data-x={this.props.image.location[0]}
      data-y={this.props.image.location[1]}
      width={this.props.image.size[0]}
      height={this.props.image.size[1]}
      ></img>
    </InteractWrapper>
    )
  }
}
 

let SmartInteractiveImages = connect(state => ({
  dispatch: state.dispatch, 
  userBoard: state.userBoard
}))(InteractiveImages);

export default SmartInteractiveImages;
