import React, { Component } from 'react'

class CustomButton extends Component {
    render() {
        return <button onClick={this.props.onClick} className="customButton">{this.props.children}</button>
    }
}

export default CustomButton;
