import React, { Component } from 'react'
import { connect } from 'react-redux';
import { jokeActionCreator } from '../actions'
import NavLink from '../components/NavLink'
import TextButton from '../components/TextButton'

class FavoriteJokeContainer extends Component {
    state = {
        editJoke: null
    }

    handleSaveBtnClick = () => {
        this.props.dispatchEditJoke(this.state.editJoke);
        this.setState({ editJoke: null });

    }

    handleTextChanged = (e) => {
        this.setState({ ...this.state, editJoke: { ...this.state.editJoke, text: e.target.value } })
    }

    render() {
        let editJokeId = this.state.editJoke ? this.state.editJoke.id : 0;
        let editJokeText = this.state.editJoke ? this.state.editJoke.text : '';
        return (
            <div>
                <NavLink to="/" type="BACK">Back to main page</NavLink>
                <br />
                <br />
                <ul>
                    {this.props.jokes && this.props.jokes.map((joke) => (
                        <li>
                            {joke.id !== editJokeId &&
                                <>

                                    {joke.text}

                                    <TextButton onClick={() => this.setState({ editJoke: { ...joke } })}>edit</TextButton>
                                    <TextButton onClick={() => this.props.dispatchRemoveJoke(joke)}>remove</TextButton>
                                </>
                            }

                            {joke.id === editJokeId &&
                                <>
                                    <input value={editJokeText} onChange={this.handleTextChanged} />
                                    <TextButton onClick={() => this.handleSaveBtnClick()}>save</TextButton>
                                    <TextButton onClick={() => this.setState({ editJoke: null })}>cancel</TextButton>
                                </>

                            }

                        </li>
                    ))
                    }
                </ul>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    jokes: state.favoriteJokes
})

const mapDispatchToProps = (dispatch) => ({
    dispatchRemoveJoke: (joke) => dispatch(jokeActionCreator('REMOVE_JOKE', joke)),
    dispatchEditJoke: (joke) => dispatch(jokeActionCreator('EDIT_JOKE', joke))
})


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteJokeContainer);