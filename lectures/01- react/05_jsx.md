
### Wait - What's that HTML doing in my Javascript?

This is currently the contents of our `app.js` file:
```js
// bring in React and Component instance from React
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <h1>Hello World!</h1>
    )
  }
}

export default Hello
```

Let's talk about the header that's returned. It looks an awful lot like HTML, but it's not. Often times we write out React components in **JSX**.

What's that?

# JSX VIDEO HERE

So, JSX allows us to write code that strongly resembles HTML. It is eventually compiled to lightweight JavaScript objects. We're returning some JSX that creates a header with 'Hello World' in it for our component to render.

> React can be written without JSX. We won't be doing this, but if you want to learn more, [check out this blog post](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/).

### Challenge: Greet the day!
In your component, return multiple lines. Instead of just the Hello World! header, also add a line below it that would print out "It is time for tea." in an h3.

> Hint: Remember, the return statement in `render` can only return one DOM element. You can, however, place multiple elements within a parent DOM element.*

You can check your solution here.
