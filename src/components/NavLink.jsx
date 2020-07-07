import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavLink extends Component {
    render() {
        if (!this.props.type || this.props.type === 'BACK') return <Link to={this.props.to}>{"<-"} {this.props.children}</Link>
        if (this.props.type === 'FORWARD') return <Link to={this.props.to}>{this.props.children} {"->"}</Link>
    }
}

export default NavLink;