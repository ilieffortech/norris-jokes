import React, { Component } from 'react';
import BackLink from './BackLink';
import CustomText from './CustomText';
import TextButton from './TextButton';

class FavoriteJokeContainer extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" type="BACK">Back to main page</NavLink>
                <br />
                <br />
                <ul>
                    {this.props.jokes && this.props.jokes.map((joke) => (
                        <li key={joke.id} >
                            <CustomText>
                                {joke.text}
                            </CustomText>

                            <TextButton onClick={() => this.props.dispatchEditJoke(joke)}>edit</TextButton>
                            <TextButton onClick={() => this.props.dispatchRemoveJoke(joke)}>remove</TextButton>

                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default FavoriteJokeContainer;