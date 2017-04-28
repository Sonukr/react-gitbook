import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

var post = {
  title: "Dinosaurs are awesome",
  authors: [
    "Stealthy Stegosaurus",
    "Tiny trex",
    "Iguanadon Ivory"
  ],
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
    allAuthors={post.authors}
    body={post.body}
    comments={post.comments}
  />,
  document.getElementById('root')
);
