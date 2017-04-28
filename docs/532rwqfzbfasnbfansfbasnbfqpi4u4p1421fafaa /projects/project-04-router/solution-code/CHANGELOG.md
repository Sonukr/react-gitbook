## CHANGELOG

App.js
```
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Blog from './Blog.js';
import Home from './Home.js';
import About from './About.js';
import Movie from './Movie.js';
import Food from './Food.js';
import './App.css';

const post = {
  title: "Baby's first post",
  author: "baby",
  body: "look at me i'm a posting baby!",
  comments: [
    "First!",
    "Great post!",
    "hire him!"
  ]
}

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">My Blog</Link></li>
        <li><Link to="/about">About moi</Link></li>
        <li><Link to="/movie">The best movie</Link></li>
        <li><Link to="/food">Favourite Food</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/movie" component={Movie}/>
      <Route exact path="/food" component={Food}/>
      <Route path="/blog" component={
        () => (<Blog title={post.title}
                  author={post.author}
                  body={post.body}
                  comments={post.comments} />
        )}/>
    </div>
  </Router>
)

export default App;
```

About.js
```js
import React from 'react';

const About = () => (
  <div>
    <h2>About Me!</h2>
    <p>I like the colour purple.</p>
  </div>
)

export default About;
```

Blog.js
```js
import React, { Component } from 'react';
import Comment from './Comment.js';

class Blog extends Component {
  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  handleClick (e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }
  render() {
    let comments = this.props.comments.map( (comment, index) => (
      <Comment body={comment} key={index} />
    ))
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>by {this.props.author}</p>
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.handleClick(e)}>Edit Body</button>
        </div>
        <h3>Comments:</h3>
        <p>{comments}</p>
      </div>
    );
  }
}

export default Blog;
```

Food.js
```js
import React from 'react';

const Food = () => (
  <div>
    <h2>My favourite food is poutine</h2>
    <p>
      <img src="http://www.labanquise.com/en/images/poutine1.png" />
    </p>
  </div>
)

export default Food;
```

Home.js
```js
import React, {Component} from 'react'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Home</h1>
        <p>Thanks for visiting my awesome website! Thank you Geocities for hosting me! YEAHH!!!!</p>
      </div>
    )
  }
}

export default Home;
```

Movie.js
```js
import React from 'react';

const Movie = () => (
  <div>
    <h2>The BEST movie</h2>
    <p>The Empire Strikes Back</p>
  </div>
)

export default Movie;
```