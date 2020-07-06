import { connect } from 'react-redux'
import JokeList from '../components/jokeList'

const mapStateToProps = state => ({
    jokes: state.favoriteJokes
})


export default connect(mapStateToProps)(JokeList)