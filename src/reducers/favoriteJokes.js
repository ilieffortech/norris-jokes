let currentIndex = 4;
let favoriteJokesList = [
    {
        id: 1,
        text: 'Joke 1',
    },
    {
        id: 2,
        text: 'Joke 2',
    },
    {
        id: 3,
        text: 'Joke 3',
    }

]

const favoriteJokes = (state = favoriteJokesList, action) => {
    if (action.type === 'ADD_JOKE_TO_FAVORITES') {
        return [...state, { ...action.joke, id: currentIndex++ }];
    }
    if (action.type === 'REMOVE_JOKE') {
        let updatedJokesList = [...state];
        updatedJokesList = updatedJokesList.filter(joke => joke.id !== action.joke.id);
        return updatedJokesList;
    }
    if (action.type === 'EDIT_JOKE') {
        let updatedJokesList = [...state];
        updatedJokesList = updatedJokesList.map(joke => (joke.id === action.joke.id ?
            { ...joke, text: action.joke.text } : joke))
        return updatedJokesList;
    }
    return state;
}

export default favoriteJokes;