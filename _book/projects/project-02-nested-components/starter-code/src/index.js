import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

var post = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: [
    "First!",
    "Great post!",
    "Hire him!"
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
