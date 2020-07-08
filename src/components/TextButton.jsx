import React, { Component } from 'react'

class TextButton extends Component {
    render() {
        return <button onClick={this.props.onClick} className="textButton">{this.props.children}</button>
    }
}

export default TextButton;