/*class Post extends Component {
  render() {
    let comments = this.props.comments.map( (comment, index) => (
      <Comment body={comment} key={index} />
    ))
*/
    
import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js'
import Author from './Author.js'

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Author authorList={this.props.allAuthors[0]} />
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        <Comment body={this.props.comments[0]} />
      </div>
    );
  }
}

export default Post;
