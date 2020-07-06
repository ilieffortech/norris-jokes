const randomJoke = (state = { text: "init joke" }, action) => {
    console.log('randomjkokw', action)
    switch (action.type) {
        case 'RANDOM_JOKE': return action.randomJoke; break;
    }
    return state;
}

export default randomJoke;