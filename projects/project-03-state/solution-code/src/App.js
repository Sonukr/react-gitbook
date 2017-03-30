import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js'
import Author from './Author.js'

class Post extends Component {

  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  changeBody (e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Author authorList={this.props.allAuthors[0]} />
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        </div>
        <h3>Comments:</h3>
        <Comment body={this.props.comments[0]} />
      </div>
    );
  }
}

export default Post;
