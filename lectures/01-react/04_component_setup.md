## Hello World exercise - You do!
#### Code along: A Very Basic Component

In this section, we'll:
- Remove the pre-filled contents of our `hello_world` app (`create-react-app` just filled it with sample content)
- Add our own component definition - it will simply display "Hello World!"
- Go through what we've done in detail!

To start, remove the entire contents of the `/src/App.js` file.

Then, add the component definition below - and yes, we know there are no semicolons here. Industry standards for React are to use semicolons as little as possible!

```js
// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <h1>Hello World!</h1>
    )
  }
}

export default Hello
```

Let's break down the things we see here...

##### `import React, {Component} from 'react'`
This imports React methods and the `Component` class from the React library.

##### `class Hello`
This is the component we're creating. In this example, we are creating a "Hello" component.

##### `extends Component`

`Component` is the React library class we inherit from to create our component definitions. Here, we are creating a new `Component` subclass called `Hello`.  Because it "extends" or "inherits from" `Component`, our `Hello` class gets to reuse code and capabilities from `React.Component`.

##### `render()`
Every component has, at minimum, a `render` method. The `render` function is what renders the component to the screen, so it controls what is displayed for this component. From this function, we return what we want to display - in this case, a "Hello World!" header.

> Note! That header tag above looks like it's straight out of HTML, but it's actually a special language called JSX, which you'll see on the next page. For now, know that it will act like HTML when it's rendered to the screen.

##### `export default Hello`
This exposes the `Hello` class to other files.  Those other files can `import` from the `App.js` file in order to use the `Hello` class.  (In our case, we'll import it into `index.js`.)


When we try to import something from `App.js`, JavaScript will first attempt to match a named export.  Our only named export is `Hello`.  The `default` keyword means that anything else we try to import from this file, whose name doesn't match our named export, will automatically revert to importing `Hello`. Only one default export is allowed per file.

### Check it out!

If you switch to your browser and navigate to http://localhost:3000, you can see your "Hello World!" header. This app dynamically reloads each time you save, so you can check your changes at any point.

### Next

Let's take a closer look at that header that got rendered.
