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
    return state;
}

export default favoriteJokes;