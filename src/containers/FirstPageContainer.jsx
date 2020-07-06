import { connect } from 'react-redux';
import { randomJoke, jokeActionCreator } from '../actions'
import RandomJokeContainer from '../components/RandomJoke'

const mapStateToProps = state => ({
    joke: state.randomJoke
})

const mapDispatchToProps = (dispatch) => ({
    dispatchRandomJoke: (joke) => dispatch(randomJoke(joke)),
    dispatchAddJokeToFavorite: (joke) => dispatch(jokeActionCreator('ADD_JOKE_TO_FAVORITES', joke))
})


export default connect(mapStateToProps, mapDispatchToProps)(RandomJokeContainer);