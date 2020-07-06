const randomJoke = (state = null, action) => {
    console.log('randomjkokw', state)
    switch (action.type) {
        case 'RANDOM_JOKE': return action.randomJoke; break;
    }
    return state;
}

export default randomJoke;