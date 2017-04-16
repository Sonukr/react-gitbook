import React, { Component } from 'react'
import './App.css'

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>by {this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        <p>{this.props.comments[0]}</p>
      </div>
    )
  }
}

export default Post
