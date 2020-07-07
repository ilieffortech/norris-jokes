import React, { Component } from 'react'
import CustomText from './CustomText'
import './Footer.scss'

class Footer extends Component {
    componentDidMount() {
        if (!this.props.nrOfVisitedTimes) {
            let nrOfVisitedTimes = localStorage.getItem('nrOfVisitedTimes');
            let updatedNrOfvisitedTimes = ++nrOfVisitedTimes
            this.props.incrementVisitedTimes(updatedNrOfvisitedTimes);
            localStorage.setItem('nrOfVisitedTimes', updatedNrOfvisitedTimes);
        }
    }

    render() {
        return (<div className="footercontainer">
            <div className="center">
                <CustomText>You have visited {this.props.nrOfVisitedTimes} times this fan page!</CustomText>
            </div>
        </div>)
    }
}

export default Footer;