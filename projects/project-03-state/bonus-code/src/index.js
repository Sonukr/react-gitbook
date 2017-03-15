import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

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

ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments}
  />,
  document.getElementById('root')
);
