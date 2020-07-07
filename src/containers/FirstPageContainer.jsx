import React, { Component } from 'react'
import { connect } from 'react-redux';
import { randomJoke, jokeActionCreator } from '../actions'
import axios from 'axios'
import NavLink from '../components/NavLink'
import TextButton from '../components/TextButton'
import CustomButton from '../components/CustomButton'

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
                    <NavLink to="/favoriteJokes" type="FORWARD">Go to my favorite jokes</NavLink>
                </div>


                <div className="content">
                    {
                        this.props.joke &&
                        <>
                            {this.props.joke.text}
                            <TextButton onClick={() => this.props.dispatchAddJokeToFavorite(this.props.joke)}>+</TextButton>
                        </>
                    }
                    <br />
                    <CustomButton onClick={this.handleNewJokeAction}>New Joke</CustomButton>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    joke: state.randomJoke
})

const mapDispatchToProps = (dispatch) => ({
    dispatchRandomJoke: (joke) => dispatch(randomJoke(joke)),
    dispatchAddJokeToFavorite: (joke) => dispatch(jokeActionCreator('ADD_JOKE_TO_FAVORITES', joke))
})


export default connect(mapStateToProps, mapDispatchToProps)(RandomJokeContainer);