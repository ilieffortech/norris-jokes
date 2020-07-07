import { connect } from 'react-redux';
import Footer from '../components/Footer'
import { incrementVisitedTimes } from '../actions'

const mapStateToProps = state => ({
    nrOfVisitedTimes: state.nrOfVisitedTimes
})

const mapDispatchToProps = (dispatch) => ({
    incrementVisitedTimes: (counter) => dispatch(incrementVisitedTimes(counter))
})


export default connect(mapStateToProps, mapDispatchToProps)(Footer);