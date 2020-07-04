import axios from "axios"

export const randomJoke = () => {
    return (dispatch) => {
        axios.get('http://api.icndb.com/jokes/random/1')
            .then(response => {
                console.log({ text: response.data.value[0].joke });
                dispatch(randomJokeWithSuccess({ text: response.data.value[0].joke }))
            })
            .catch(error => {

            })
    }



}
export const randomJokeWithSuccess = (joke) => {
    return {
        type: 'RANDOM_JOKE',
        randomJoke: joke
    }
}
