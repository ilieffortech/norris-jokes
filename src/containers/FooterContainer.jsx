import { connect } from 'react-redux';
import { incrementVisitedTimes } from '../actions'
import React, { Component } from 'react'

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
        return (<div className="footer-container">
            <div className="center">
                You have visited {this.props.nrOfVisitedTimes} times this fan page!
            </div>
        </div>)
    }
}


const mapStateToProps = state => ({
    nrOfVisitedTimes: state.nrOfVisitedTimes
})

const mapDispatchToProps = (dispatch) => ({
    incrementVisitedTimes: (counter) => dispatch(incrementVisitedTimes(counter))
})


export default connect(mapStateToProps, mapDispatchToProps)(Footer);