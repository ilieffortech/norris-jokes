import { connect } from 'react-redux'
import Button from '../components/button'
import { jokeActionCreator } from '../actions'
import randomJoke from './randomJoke'

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleAction: (joke) => dispatch(jokeActionCreator(ownProps.jokeAction, joke))
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)