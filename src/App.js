import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import JokeButton from './containers/JokeButton';
import RandomJoke from './containers/randomJoke'
import RandomJokeButton from './containers/RandomJokeButton';
import FavoriteJokeList from './containers/favoriteJokeList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="middle">
          <RandomJoke><RandomJokeButton style="joke-action-button" jokeAction="ADD_JOKE_TO_FAVORITES">+</RandomJokeButton>  </RandomJoke>
          <RandomJokeButton jokeAction='RANDOM_JOKE'>New Joke</RandomJokeButton>
          <FavoriteJokeList />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
