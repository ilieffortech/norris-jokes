import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FooterContainer from './FooterContainer';
import FavoriteJokePageContainer from './SecondPageContainer';
import FirstPageContainer from './FirstPageContainer';
import HeaderContainer from './HeaderContainer';

function App() {
  return (
    <div className="App">
      <div className="main-container">
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
          <FooterContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
