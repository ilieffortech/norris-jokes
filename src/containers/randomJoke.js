import { connect } from 'react-redux'
import Joke from '../components/joke'
import { randomJoke } from '../actions'


const mapStateToProps = state => ({
    randomJoke: state.randomJoke
})


export default connect(mapStateToProps)(Joke)