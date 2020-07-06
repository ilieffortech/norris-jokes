import { combineReducers } from 'redux';
import RandomJoke from './randomJoke'
import FavoriteJokes from './favoriteJokes';

const allReducers = combineReducers({
    randomJoke: RandomJoke,
    favoriteJokes: FavoriteJokes
})

export default allReducers;