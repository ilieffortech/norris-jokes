import React, { Component } from 'react';
import NavLink from './NavLink';
import CustomText from './CustomText';
import TextButton from './TextButton';

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
                                    <CustomText>
                                        {joke.text}
                                    </CustomText>
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

export default FavoriteJokeContainer;