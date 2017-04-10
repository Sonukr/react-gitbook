## Catch your breath!

It is time to stop for a moment and review all of the topics that we've discussed so far. React may seem very confusing at first with all of the jargon so let's break everything down:

* **React** is a framework created by developers at Facebook. It is aimed at being the 'view' of your Javascript application. It focuses on creating a component based architecture that focuses on the individual pieces of your user interface.
* The **Virtual DOM** is a virtual representation of the DOM, or an abstraction of the DOM. React doesn't apply your changes to the DOM directly. While it creates and manipulates elements, it does so through custom React objects. The results of that are then rendered to the DOM. This keeps you from having to focus on changing the constant state of a `<div>` tag.
* **JSX** is a standard that React uses to represent HTML elements as XML tags. It looks like a template language but is much more powerful. Each JSX tag represents a React Element and a React Class is composed of multiple elements. You express your visual user interface through nested XML tags that can render additional components.
* **Properties** are arguments passed into a **Component**, as if they were arguments to a function. The component can then use this data to render or pass it on to another component.

Let's put something together really quickly to re-inforce what you've learned so far.


#### Codealong

We're going to spin up yet another _React_ app. Use `create-react-app` to create `mordor` application.

> Refer to the Initial Setup to remember how to do this; make sure you stop the currently running application first!

Open up your `./src` directory in your favourite text editor.

Inside of `./src` folder, create a new React Component called `Mordor.js`.

```jsx
import React, { Component } from 'react';
import Sauron from './eye.png';
import './Mordor.css';

class Mordor extends Component {
  render() {
    return (
      // soon
    );
  }
}

export default Mordor;
```

Where it says "soon", you're going to create a `<section>` to represent Mordor. Inside of Mordor is an `<article>` that represents Mount Doom, where Frodo is to throw the One Ring of Power into lava for destruction (ONCE AND FOR ALL).

The _JSX_ inside your Mordor component's return function will therefore look something like this:

```jsx
<section id="mordor">
  <article id="mt-doom">
    Ring destroyed: {this.props.doesFrodoHaveTheOneRing}!
  </article>
</section>
```

Notice that this JSX has _properties_, or `props`. When a React Component's render() method is called, it takes any properties that were supplied to the component when it is instantiated. Later, we're going to call the Mordor class from inside App.js. When we call the component, it looks like this:

```jsx
<Mordor />
```

However, we also want to pass a prop into the component, right? The Mordor component needs to know whether or not Frodo has the ring. So our call to instantiate the component is instead going to look like:

```jsx
<Mordor doesFrodoHaveTheOneRing="yeah, he still does" />
```

Notice the value that we have assigned to this React Component's `prop` of `doesFrodoHaveTheOneRing`. We can supply a custom argument here that the React element will receive for use as props. Eventually, Frodo throws the Ring of Power into the volcano. Then the next time we call the Mordor component, we could instead send a props like so:

```jsx
<Mordor doesFrodoHaveTheOneRing="NO! SAURON IS DEFEATED!" />
```

We can make the value of the prop anything we'd like, just as long as the key matches. In the Mordor component, it's looking for ` Ring destroyed: {this.props.doesFrodoHaveTheOneRing}!`, so we need to be sure to call the component and pass in a prop with a key of `doesFrodoHaveTheOneRing`.

Let's take a look at this in action. Save your changes to your Mordor component. It should look something like this (feel free to be creative).

```jsx
import React, { Component } from 'react';
import Sauron from './eye.png';
import './Mordor.css';

class Mordor extends Component {
  render() {
    return (
      <section id="mordor">
		  <article id="mt-doom">
		    Ring destroyed: {this.props.doesFrodoHaveTheOneRing}!
		  </article>
		</section>
    );
  }
}

export default Mordor;
```

Once you're done, open the `./src/App.js`. We're going to render Mordor! We can do so by replacing the interior of `<p className="App-intro" />` with the first version of Mordor. Open your Web browser and you'll notice your component has loaded.

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import Mordor from './Mordor.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Mordor doesFrodoHaveTheOneRing="yeah, he still does" />
        </p>
      </div>
    );
  }
}

export default App;
```

Now, let's wrap things up by modifying the properties of your Mordor component... because it is time to defeat Sauron!

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import Mordor from './Mordor.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Mordor doesFrodoHaveTheOneRing="NO! SAURON IS DEFEATED!" />
        </p>
      </div>
    );
  }
}

export default App;
```

#### Check Yourself: Virtual DOM

Take a moment to consider the following scenario: it is the year 2007 and you are hard at work on a website. ECMAScript5 is the hot new rave and you're working hard to create user interface components using _vanilla Javascript_. How would you create the React Components using vanilla Javascript for organization? Here are a few things to consider:

- The use of `prototype` for inheritance vs the ES2015 model of `Class`
- Pure DOM manipulation using `createElement` and `getElement...` methods.
- Building constructor objects that contain an `element` (or `el`) that is rendered using a `render()` method.
- How would you handle the updating of properties going into the component? How would this affect your constructor?

As you consider this scenario, think about the ease that the Virtual DOM provides you by directly handling the creation and updating of DOM elements on the page. React creates special elements on the Virtual DOM and then elements are rendered for you with ease so you don't have to create individual React Elements to build each React Component.
