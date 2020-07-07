import { combineReducers } from 'redux';
import RandomJoke from './randomJoke'
import FavoriteJokes from './favoriteJokes';
import NrOfVisitedTimes from './nrOfVisitedTimes';

const allReducers = combineReducers({
    nrOfVisitedTimes: NrOfVisitedTimes,
    randomJoke: RandomJoke,
    favoriteJokes: FavoriteJokes
})

export default allReducers;