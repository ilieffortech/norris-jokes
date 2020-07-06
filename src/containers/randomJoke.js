import { connect } from 'react-redux'
import Joke from '../components/joke'


const mapStateToProps = state => ({
    joke: state.randomJoke
})


export default connect(mapStateToProps)(Joke)