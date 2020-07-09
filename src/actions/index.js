export const RANDOM_JOKE = 'RANDOM_JOKE';
export const RANDOM_JOKE_API = 'RANDOM_JOKE_API';
export const ADD_JOKE_TO_FAVORITES = 'ADD_JOKE_TO_FAVORITES';
export const ADD_JOKE_TO_FAVORITES_ASYNC = 'ADD_JOKE_TO_FAVORITES_ASYNC';
export const REMOVE_JOKE = 'REMOVE_JOKE';
export const EDIT_JOKE = 'EDIT_JOKE';
export const REMOVE_JOKE_ASYNC = 'REMOVE_JOKE_ASYNC';
export const EDIT_JOKE_ASYNC = 'EDIT_JOKE_ASYNC';

export const randomJoke = (joke) => {
    return {
        type: 'RANDOM_JOKE',
        randomJoke: joke
    }
}

export const randomJokeAPI = () => {
    return {
        type: 'RANDOM_JOKE_API',
    }
}


export const jokeActionCreator = (jokeActionType, joke) => {
    return {
        type: jokeActionType,
        joke: joke
    }
}


export const incrementVisitedTimes = (counter) => {
    return {
        type: 'CHANGE_VISITED_TIMES',
        nrOfVisitedTimes: counter
    }
}
