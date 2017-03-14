## CHANGELOG

App.js
```js
import React, { Component } from 'react';
import Comment from './Comment.js'
import './App.css';

class Post extends Component {
  render() {
    let comments = this.props.comments.map( (comment, index) => (
      <Comment body={comment} key={index} />
    ))
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>by {this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        <p>{comments}</p>
      </div>
    );
  }
}

export default Post;
```

Comment.js
```js
import React, {Component} from 'react'

class Comment extends Component {
  render () {
    return (
      <div>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Comment;
```