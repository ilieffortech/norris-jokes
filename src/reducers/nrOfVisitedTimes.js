const nrOfVisitedTimes = (state = null, action) => {
    switch (action.type) {
        case 'CHANGE_VISITED_TIMES': return action.nrOfVisitedTimes; break;
    }
    return state;
}

export default nrOfVisitedTimes;