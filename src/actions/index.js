import axios from "axios"

export const randomJoke = (actionType, joke) => {
    switch (actionType) {
        case 'RANDOM_JOKE':
            return (dispatch) => {
                axios.get('http://api.icndb.com/jokes/random/1')
                    .then(response => {
                        console.log({ text: response.data.value[0].joke });
                        dispatch(randomJokeWithSuccess({ text: response.data.value[0].joke }))
                    })
                    .catch(error => {

                    })
            }
            break;
        case 'ADD_JOKE_TO_FAVORITES':
            console.log('add joke', joke)
            return {
                type: 'ADD_JOKE_TO_FAVORITES',
                joke: joke
            }
    }
}

export const randomJokeWithSuccess = (joke) => {
    return {
        type: 'RANDOM_JOKE',
        randomJoke: joke
    }
}


export const jokeActionCreator = (jokeActionType, joke) => {
    console.log(jokeActionType, joke);
    return {
        type: jokeActionType,
        joke: joke
    }
}
