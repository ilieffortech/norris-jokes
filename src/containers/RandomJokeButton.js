import { connect } from 'react-redux'
import { randomJoke } from '../actions'
import Button from '../components/button'

const mapStateToProps = state => ({
    joke: state.randomJoke
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleAction: (joke) => dispatch(randomJoke(ownProps.jokeAction, joke))
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)