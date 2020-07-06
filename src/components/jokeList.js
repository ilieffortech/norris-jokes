import React from 'react'
import Joke from './joke'
import JokeButton from '../containers/JokeButton'

const JokeList = ({ jokes }) => (
    <ul>
        {jokes && jokes.map((joke) => (
            <li key={joke.id} ><Joke joke={joke}><JokeButton joke={joke} jokeAction='EDIT_JOKE' style='joke-action-button'>edit</JokeButton></Joke></li>
        ))
        }
    </ul>
)

export default JokeList;