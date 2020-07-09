let currentIndex = 1;

const favoriteJokes = (state = [], action) => {

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