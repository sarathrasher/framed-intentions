import React, { Component, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'

import interact from 'interactjs'

export default class InteractWrapper extends Component {

	static defaultProps = {
		draggable: false,
		resizable: false,
		draggableOptions: {},
		resizableOptions: {}
	}

	render() {
		return cloneElement(this.props.children, {
			ref: node => this.node = node,
			draggable: false
		})
	}

	componentDidMount() {
		this.interact = interact(findDOMNode(this.node))
		this.setInteractions()
	}

	componentWillReceiveProps() {
		this.interact = interact(findDOMNode(this.node))
		this.setInteractions()
	}

	setInteractions() {
		if (this.props.draggable) this.interact.draggable(this.props.draggableOptions)
		if (this.props.resizable) this.interact.resizable(this.props.resizableOptions)
	}
}
