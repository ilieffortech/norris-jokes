import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import RandomJoke from './containers/randomJoke'
import Joke from './components/joke';
import RandomJokeButton from './containers/RandomJokeButton';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="middle">
          <RandomJoke />
          <RandomJokeButton>New Joke</RandomJokeButton>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
