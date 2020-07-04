import React from 'react'
import PropTypes from 'prop-types'

const Joke = ({ randomJoke }) => (
    <div>
        {randomJoke ? randomJoke.text : ''}
    </div>
)

Joke.propTypes = {
    randomJoke: PropTypes.object.isRequired
}

export default Joke