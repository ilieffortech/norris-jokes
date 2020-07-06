import axios from "axios"

export const randomJoke = (joke) => {
    console.log('in acction ', joke)
    return {
        type: 'RANDOM_JOKE',
        randomJoke: joke
    }
}


export const jokeActionCreator = (jokeActionType, joke) => {
    console.log('action to send ', joke);
    return {
        type: jokeActionType,
        joke: joke
    }
}
