import React, { Component, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'
import draggableOptions from '../Actions/dragAndDrop';
import resizableOptions from '../Actions/resize'
import interact from 'interactjs'

export default class InteractWrapper extends Component {

	constructor(props) {
		super(props);
		this.state = {
			styles: {
				top: this.props.x,
				left: this.props.y,
				width: this.props.width,
				height: this.props.height
			}
		}
	}

	static defaultProps = {
		draggable: false,
    resizable: false,
    dropzone: false,
		draggableOptions: {},
    resizableOptions: {},
    dropzoneOptions: {},
	}

	render() {
		return cloneElement(this.props.children, {
			ref: node => this.node = node,
			draggable: false, style: this.state.styles
		})
	}

	componentDidMount() {
		this.interact = interact(findDOMNode(this.node))
		this.setInteractions()
		// this.setState({
		// 	styles: {
		// 		top: computeTopWith(this.refs.node),
		// 		left: computeLeftWith(this.refs.node),
		// 		width: computeWidthWith(this.refs.node),
		// 		height: computeHeightWith(this.refs.node),
		// 	}
		// })
	}

	componentWillReceiveProps() {
		this.interact = interact(findDOMNode(this.node))
		this.setInteractions()
	}

	setInteractions() {
		if (this.props.draggable) {
			this.interact.draggable({...draggableOptions, onmove: event => {
			const target = event.target
			target.style.zIndex = '1';
		// keep the dragged position in the data-x/data-y attributes
		const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
		const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
	
		// translate the element
		target.style.webkitTransform =
		target.style.transform =
			'translate(' + x + 'px, ' + y + 'px)'
	
		// update the posiion attributes
		target.setAttribute('data-x', x);
		target.setAttribute('data-y', y);
		},
		onend: event => {
			const target = event.target
			target.style.zIndex = '0';
			const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
			const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
			console.log(x, y);
			this.props.onDragEnd(x, y);
		}})
	} if (this.props.resizable) this.interact.resizable({...resizableOptions, onmove: (event) => {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);
    target.style.zIndex = '1';
    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';
  
    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;
  
    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';  
  },
  onend: event => {
    const target = event.target;
		target.style.zIndex = '0';
		this.props.onResizeEnd(event.interaction.resizeRects.previous.width, event.interaction.resizeRects.previous.height)
  }
	})}
}
