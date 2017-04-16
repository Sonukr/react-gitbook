## CHANGELOG

index.js
```js
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
```

App.js
```js
class Post extends Component {
  render() {
    let authors = [
      <Author author={this.props.allAuthors[0]}/>,
      <Author author={this.props.allAuthors[1]}/>,
      <Author author={this.props.allAuthors[2]}/>
    ];

    /**
     * Bonus: using .map!
     * @type {Array}
     */
    // let authors = this.props.allAuthors.map( (author, index) => (
    //   <Author author={author} key={index} />
    // ));

    return (
      <div>
        <h1>{this.props.title}</h1>
        {authors}
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        <Comment body={this.props.comments[0]} />
      </div>
    );
  }
}
```

Author.js
```js
import React, {Component} from 'react'

class Author extends Component {
  render () {
    return (
      <div>
        <p>Written by {this.props.author}</p>
      </div>
    )
  }
}

export default Author;
```
