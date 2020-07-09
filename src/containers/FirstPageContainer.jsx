import React, { Component } from 'react'
import { connect } from 'react-redux';
import { randomJokeAPI, jokeActionCreator, ADD_JOKE_TO_FAVORITES_ASYNC } from '../actions'
import NavLink from '../components/NavLink'
import TextButton from '../components/TextButton'
import CustomButton from '../components/CustomButton'

class RandomJokeContainer extends Component {

    componentDidMount() {
        this.props.dispatchRandomJokeAPI();
    }

    handleNewJokeAction = () => {
        this.props.dispatchRandomJokeAPI();
    }

    render() {
        return (
            <div className="content-container">
                <div className="top">
                    <div className="horizontal-container">
                        <div className="left"></div>
                        <div className="right">
                            <NavLink to="/favoriteJokes" type="FORWARD">Go to my favorite jokes</NavLink>
                        </div>

                    </div>
                </div>


                <div className="content">
                    <div className="centered-container">
                        {
                            this.props.joke &&
                            <span className="random-joke-text">
                                {this.props.joke.text}
                                <TextButton onClick={() => this.props.dispatchAddJokeToFavorite(this.props.joke)}>+</TextButton>
                            </span>
                        }

                        <CustomButton onClick={this.handleNewJokeAction}>New Joke</CustomButton>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    joke: state.randomJoke
})

const mapDispatchToProps = (dispatch) => ({
    dispatchRandomJokeAPI: () => dispatch(randomJokeAPI()),
    dispatchAddJokeToFavorite: (joke) => dispatch(jokeActionCreator(ADD_JOKE_TO_FAVORITES_ASYNC, joke))
})


export default connect(mapStateToProps, mapDispatchToProps)(RandomJokeContainer);