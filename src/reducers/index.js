import { combineReducers } from 'redux';
import RandomJoke from './randomJoke'

const allReducers = combineReducers({
    randomJoke: RandomJoke
})

export default allReducers;