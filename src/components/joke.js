import React from 'react'
import PropTypes from 'prop-types'

const Joke = ({ joke, children }) => (
    <div>
        {joke ? joke.text : ''}
        {joke ? children : ''}
    </div>
)

export default Joke