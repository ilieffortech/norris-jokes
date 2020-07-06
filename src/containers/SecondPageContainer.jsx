import { connect } from 'react-redux';
import { jokeActionCreator } from '../actions'
import FavoriteJokeContainer from '../components/FavoriteJokes'



const mapStateToProps = state => ({
    jokes: state.favoriteJokes
})

const mapDispatchToProps = (dispatch) => ({
    dispatchRemoveJoke: (joke) => dispatch(jokeActionCreator('REMOVE_JOKE', joke)),
    dispatchEditJoke: (joke) => dispatch(jokeActionCreator('EDIT_JOKE', joke))
})


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteJokeContainer);