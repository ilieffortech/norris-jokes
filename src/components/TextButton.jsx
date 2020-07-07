import React, { Component } from 'react'

class TextButton extends Component {
    render() {
        return <button onClick={this.props.onClick} style={{ color: 'red' }}>{this.props.children}</button>
    }
}

export default TextButton;