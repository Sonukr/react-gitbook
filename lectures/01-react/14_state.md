
## State

So we know about React properties, and how they relate to our component's data.
* The thing is, `props` represent data that will be the same every time our component is rendered. What about data in our application that may change depending on user action?
* That's where `state` comes in..


Watch this video and follow along using [this codepen](https://codepen.io/susir/pen/GWONLp) to try it yourself!

<iframe src="//fast.wistia.net/embed/iframe/3ldc3tnyv0?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


Values stored in a component's state are mutable attributes.
* State is similar to props, but *is meant to be changed*.
* Like properties, which we access with `this.props.val`, we can access state values using `this.state.val`
* Setting up and modifying state is not as straightforward as properties and instead requires multiple methods. It involves explicitly declaring the mutation, and then defining methods to define how to update our state...

Let's switch gears back to our `Hello world` project
* Be sure to switch which is running locally!

Let's modify our earlier `HelloWorld` example to be a new `MoodTracker` component. There will be a mood displayed, and eventually a user will click a button to indicate on a scale of 1-10 how much of that mood they are feeling.

First, now that we're going to have a state, we're going to have an initial value. When we call classes, a good way to make initial values is by creating a constructor: `constructor (props) {}`. Constructors say, "When you call this class for the first time, do this." Without a constructor explicitly defined by us, when we first call a class the method will just do the default. That's why we didn't need a constructor before - we weren't doing anything differently than the normal default for the class.

The first thing we always put in a constructor is a call to `super()`, which just says "You should still do the normal initialization for this class."

After this, we can define what's new. What's new for us is that when the class first gets called, we want to set an initial state. We can do this by calling `this.state`, another built in function. Inside of this, we can define any state variables we'd like.

We'll call our state `moodPoints` and set its initial value to 1.

At the top of your App.js file, add the constructor function to the class.

```js
class Hello extends Component {

  constructor (props) {
      // make call to parent class' (Component) constructor
      super()
      // define an initial state
      this.state = {
        moodPoints: 1 // initialize this.state.moodPoints to be 1
      }
    }

  // what should the component render
  render () {
    ....
```
Now, let's make sure we display that to the user. Still in App.js, in your render method, we'll let the user know:
* `<p>You are this happy: {this.state.moodPoints}</p>`
 * for how many mood points they are at  (note how similar this call is to a prop call!).

All together, the render for our App.js can now look like:
```js
return (
  <div>
    <h1>Hello {this.props.name}</h1>
    <p>You are {this.props.age} years old</p>
    <p>You love {this.props.animals[0]}</p>
    <p>On a scale of 1-10</p>
    <p>You are this happy: {this.state.moodPoints}</p>`
  </div>
)
```
> Check it out! If you browse to http://localhost:3000, your state will be displayed.


Ok, we set an initial state. But how do we go about changing it?
* We need to set up some sort of trigger event to change our counter.

We will create a button that the user can click, which will increase their mood by one.

First, we will create a method to increase the mood that the button will call. Under the constructor, above the render method, add this method:

```js
increaseMood(e) {
  this.setState({
    moodPoints: this.state.moodPoints + 1
  })
}
```
Note that we call `this.setState` to change the state.

Now, we'll create the button to call it. A button will be displayed to the user, so we'll add it to the render function. When the user clicks it, we'll call the increaseMood() function.

```js
  render () {
    // can only return one top-level element
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
        <p>On a scale of 1-10</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>
      </div>
    )
  }
}
```

Altogether, your App.js file now looks like this:

```js
// bring in React and Component instance from React
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {

  constructor (props) {
      // make call to parent class' (Component) constructor
      super()
      // define an initial state
      this.state = {
        moodPoints: 1 // initialize this.state.counter to be 0
      }
    }

    increaseMood(e) {
      this.setState({
        moodPoints: this.state.moodPoints + 1
      })
    }

  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
        <p>You love {this.props.animals[0]}</p>
        <p>On a scale of 1-10</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>
      </div>
    )
  }
}

export default Hello
```

> Check it out! If you browse to http://localhost:3000, your button now changes the state.

Whenever we run `.setState`, our component runs a diff between the current DOM and the virtual DOM node to update the state of the DOM in as few manipulations as possible; it only replaces the current DOM with parts that have changed.

This is super important! Using React, we only change parts of the DOM that need to be changed.

* Implications on performance.
* We do not re-render the entire component like we have been in class.
* This is one of React's core advantages

#### Challenge: Count to 10

After 10 clicks, the user should see the counter reset to 1.


More on what [should & shouldn't go in state](https://facebook.github.io/react/docs/state-and-lifecycle.html)
