import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.scss';
import Footer from './components/Footer';
import FavoriteJokePageContainer from './containers/SecondPageContainer';
import FirstPageContainer from './containers/FirstPageContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <div className="maincontainer">
        <div className="header">
          <HeaderContainer />
        </div>
        <Router>
          <div className="middle">
            <Route path="/" exact component={FirstPageContainer} />
            <Route path="/favoriteJokes" component={FavoriteJokePageContainer} />
          </div>
        </Router>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
