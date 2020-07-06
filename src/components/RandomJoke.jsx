import React, { Component } from 'react';
import ForwardLink from '../components/ForwardLink';
import CustomButton from '../components/CustomButton'
import TextButton from '../components/TextButton';
import CustomText from './CustomText';
import axios from 'axios';
import './RandomJoke.scss'

class RandomJokeContainer extends Component {

    handleNewJokeAction = () => {
        console.log('handle new jock')
        axios.post('http://api.icndb.com/jokes/random/1')
            .then(res => {
                this.props.dispatchRandomJoke({ text: res.data.value[0].joke });
            })
    }

    render() {
        return (
            <div className="contentcontainer">
                <div className="top">
                    <ForwardLink to="/favoriteJokes">Go to my favorite jokes</ForwardLink>
                </div>
                <div className="content">
                    <CustomText>{this.props.joke.text}</CustomText>
                    <TextButton onClick={() => this.props.dispatchAddJokeToFavorite(this.props.joke)}>+</TextButton>
                    <br />
                    <CustomButton onClick={this.handleNewJokeAction}>New Joke</CustomButton>
                </div>
            </div>
        )
    }
}

export default RandomJokeContainer;