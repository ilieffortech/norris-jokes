import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { RANDOM_JOKE, RANDOM_JOKE_API, ADD_JOKE_TO_FAVORITES, ADD_JOKE_TO_FAVORITES_ASYNC, EDIT_JOKE_ASYNC, REMOVE_JOKE_ASYNC } from '../actions'
import { fetchJokeAPI } from '../api/jokeApi'

const correspondingAction = {
    'ADD_JOKE_TO_FAVORITES_ASYNC': 'ADD_JOKE_TO_FAVORITES',
    'EDIT_JOKE_ASYNC': 'EDIT_JOKE',
    'REMOVE_JOKE_ASYNC': 'REMOVE_JOKE'
}


export function* fetchJoke() {
    try {
        const newJoke = yield call(fetchJokeAPI);
        yield put({ type: RANDOM_JOKE, randomJoke: newJoke })
    } catch (e) {

    }
}

export function* forwardJokeAction(action) {
    try {
        yield put({ type: correspondingAction[action.type], joke: action.joke })
    } catch (e) {

    }
}

export function* forwardAddJokeAction(action) {
    try {
        yield put({ type: correspondingAction[action.type], joke: action.joke })
        yield call(fetchJoke)
    } catch (e) {

    }
}

export function* randomJokeAPI() {
    yield takeLatest(RANDOM_JOKE_API, fetchJoke)
    yield takeLatest(ADD_JOKE_TO_FAVORITES_ASYNC, forwardAddJokeAction)
    yield takeLatest(EDIT_JOKE_ASYNC, forwardJokeAction)
    yield takeLatest(REMOVE_JOKE_ASYNC, forwardJokeAction)
}