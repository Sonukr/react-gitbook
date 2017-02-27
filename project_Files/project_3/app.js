import React, { Component } from 'react';
import Comment from './Comment.js'
import './App.css';


class Post extends Component {
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
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.handleClick(e)}>Edit Body</button>
        </div>
        <h3>Comments:</h3>
        <Comment body={this.props.comment} />
      </div>
    );
  }
}

export default Post;
