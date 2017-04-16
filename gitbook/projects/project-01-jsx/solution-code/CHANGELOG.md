## CHANGELOG

App.js
```js
import React, { Component } from 'react';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        <p>{this.props.comments[0]}</p>
      </div>
    );
  }
}

export default Post;
```

index.css
```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  text-align: center;
}
```

index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

const post = {
  title: "Baby's First Post",
  author: "Baby",
  body: "Look at me I'm a posting baby.",
  comments: [
    "First!",
    "Great post",
    "Hire him"
  ]
}

ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments} />,
  document.getElementById('root')
);
```