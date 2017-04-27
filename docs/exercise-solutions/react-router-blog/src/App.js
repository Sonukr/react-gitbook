import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import About from './About';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            {/*
            The {" "} things are inserted after every link so React puts
            some empty whitespace between each link instead of cramming
            them all together.
            
            Also, this comment syntax is how you do comments in JSX.
            */}
            <a href="/">Home</a>{" "}
            <a href="/blog">Blog</a>{" "}
            <a href="/favorite-movie">Favorite Movie</a>{" "}
            <a href="/favorite-food">Favorite Food</a>{" "}
            <a href="/about">About</a>
          </nav>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/favorite-movie" component={FavoriteMovie} />
            <Route path="/favorite-food" component={FavoriteFood} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
