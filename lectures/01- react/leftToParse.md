

## Break (10 minutes / 1:05)

---

### You Do: A Blog Post (25 minutes / 1:30)

> 20 Minutes Exercise. 5 Minutes Review.

Let's have some practice creating a React component from scratch. How about a blog post?
* Create a `post` object literal in `src/index.js` that has the below properties.
  1. `title`
  2. `author`
  3. `body`
  4. `comments` (array of strings)
* Render these properties using a Post component.
* The HTML (or more accurately, JSX) composition of your Post is up to you.

#### [Solution](https://github.com/ga-wdi-exercises/simple-react-blog/commit/f1088165898d1a20df956647c8e9b5ed67d9ad32)

---

### Nested Components (5 minutes / 1:35)

#### Q: What problems did you encounter when trying to add multiple comments to your Post?

It would be a pain to have to explicitly define every comment inside of `<Post />`, especially if each comment itself had multiple properties.
* This problem is a tell tale sign that our separation of concerns is being stretched, and it's time to break things into a new component.

We can nest Comment components within a Post component.
* We create these comments the same way we did with posts: `extends Component` and `.render`
* Then we can reference a comment using `<Comment />` inside of Post's render method.

Let's create a new file for our Comment component, `src/Comment.js`...

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

export default Comment
```

Then in `src/App.js`, we need to load in our `Comment` component and render it inside of our `Post` component...

```js
import React, { Component } from 'react';
// Load in Comment component
import Comment from './Comment.js'


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
        // Render Comment component, passing in data
        <Comment body={this.props.comments[0]} />
      </div>
    );
  }
}

export default Post;
```

> **Note**: We could put all of our code in one file, but it's considered a good practice to break components out into different files to help practice separation of concerns. The only downside is we have to be extra conscious of remembering to **export / import** each component to where it's rendered.

---

## You Do: Add Nested Comments To Blog (15 minutes / 1:50)

> 10 Minute Exercise. 5 Minute Review.

 Amend your `Post`'s render method to include reference to a variable, `comments`, that is equal to the return value of generating multiple `<Comment />` elements. Make sure to pass in the `comment` body as an argument to each `Comment` component. Then render the `comments` somewhere inside the UI for a `Post`.

> **NOTE:** You can use `.map` in `Post`'s `render` method to avoid having to hard-code all your `Comment`'s. Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [here](http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/).
>
> **HINT I:** You should only have to return one `<Comment />` inside of `.map`.
>
> **HINT II:** Remember that whenever you write vanilla Javascript inside of JSX, you need to surround it with single brackets (`{}`).

#### [Solution](https://github.com/ga-wdi-exercises/simple-react-blog/commit/d71120b727113d7f7d2305f9d2b91e6948c5dde3)

---

## Break (10 minutes / 2:00)

---

## State (10 minutes / 2:10)

So we know about React properties, and how they relate to our component's data.
* The thing is, `props` represent data that will be the same every time our component is rendered. What about data in our application that may change depending on user action?
* That's where `state` comes in..

Values stored in a component's state are mutable attributes.
* Like properties, we can access state values using `this.state.val`
* Setting up and modifying state is not as straightforward as properties. It involves explicitly declaring the mutation, and then defining methods to define how to update our state...

Lets implement state in our earlier `Hello` example by incorporating a counter into our greeting.

```js
class Hello extends Component {
  // when our component is initialized,
  // our constructor function is called
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      counter: 0 // initialize this.state.counter to be 0
    }
  }
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
        <p>The initial count is {this.state.counter}
        </p>
      </div>
    )
  }
}
```

Ok, we set an initial state. But how do we go about changing it?
* We need to set up some sort of trigger event to change our counter.

Take a look at how this event is implemented. We use an attribute called `onClick` to define what happens when we click this particular button. As its value, we're passing in an anonymous function that invokes handleClick, a function defined on this component.

<!-- AM: Modify this question. They don't know that event listeners are passed in as attributes yet. -->


```js
class Hello extends Component {
  constructor (props) {
    super()
    this.state = {
      counter: 0
    }
  }
  handleClick (e) {
    // setState is inherited from the Component class
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render () {
    // can only return one top-level element
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
        <p>The initial count is {this.state.counter}
        </p>
        <button onClick={(e) => this.handleClick(e)}>click me!</button>
      </div>
    )
  }
}
```

Whenever we run `.setState`, our component mimics a diff against the current DOM, and compares the Virtual DOM node with the updated state to the current DOM.

* Only replaces the current DOM with parts that have changed.

---

### Exercise: Implement State (20 minutes / 2:30)

> 15 Minute Exercise. 5 Minute Review.

Let's implement `state` in our Blog by making `body` a mutable value.

1. Initialize a state using a `constructor()` method for our `Post` to set a initial state. It should create a state value called `body`. Set it to the `body` of your hard-coded `post`.
2. Modify `Post`'s `render` method so that `body` comes from `state`, not `props`.
3. Create a `handleClick` method inside `Post` that updates `body` based on a user input.
  * You should use `setState` somewhere in this method.
  * How can you get a user input? Keep it simple and start with `prompt`.
4. Add a button to `Post`'s `render` method that triggers `handleClick`.

#### Bonus I

Use a form to take in user input.
* The post body should be updated using a method that is triggered by `onSubmit`.
* One option is to keep track of what the new input is going to be by triggering a method using `onChange` on the `<input>`
* Another option is to pass an event object to the `onSubmit` method and traverse the DOM from `e.target` to find the `<input>` value.

> **NOTE:** You're starting to mock Angular's two-way data binding!

#### [Solution](https://github.com/ga-wdi-exercises/simple-react-blog/commit/1a6d611e1a12fbe122029a33c5eec9234fc88406)

---

## Closing

### What's Next?

* [Router](https://github.com/reactjs/react-router)
* [API/Axios](https://www.npmjs.com/package/axios)
* [Events](https://facebook.github.io/react/tips/dom-event-listeners.html)
* [Forms](https://facebook.github.io/react/docs/forms.html)

---

## Additional Reading

* [Tyler McGinnis' React.js Program](http://www.reactjsprogram.com/)
* [Raw React: No JSX, Webpack, ES6, etc.](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)
* [Integrating React with Backbone](https://blog.engineyard.com/2015/integrating-react-with-backbone)
* [React DC (Meetup)](http://www.meetup.com/React-DC/)
* [React Tic-Tac-Toe (by Jesse Shawl)](https://github.com/jshawl/react-tic-tac-toe)
