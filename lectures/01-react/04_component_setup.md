### Hello World exercise - You do!
#### Code along: A Very Basic Component

We'll:
- Remove the pre-filled contents of our hello_world app (`create-react-app` just filled it with sample content)
- Add our own component definition - it will simply display "Hello World!"
- Go through what we've done!

To start, in our `/src/App.js` file, let's remove the entire contents. Then, add this component definition - and yes, we know there are no semicolons here!

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

Let's break down the things we see here...

##### `import React, {Component} from 'react'`
This imports React methods and the component class from the React library.

##### `class Hello`
This is the component we're creating. In this example, we are creating a "Hello" component.

##### `extends Component`
This is the React library class we inherit from to create our component definition. So, we are creating a new Component class called "Hello" that is inheriting from React.Component.

##### `render()`
Every component has, at minimum, a render method. The render function is what, well, renders the component to the screen. From this function, we return what we want to display - in this case, a Hello World! header.
> Note! That header tag is not HTML - it's something called JSX, which you'll see on the next page. For right now, though, it's acting as HTML for us that will be rendered to the screen.

##### `export default Hello`
This exposes the Hello class to other files which import from the App.js file (in our case, index.js). The `default` keyword means that any import whose name doesn't match a named export will automatically revert to this. Only one default is allowed per file.

### Check it out!

If you switch to your browser and navigate to http://localhost:3000, you can see your "Hello World!" header. This app dynamically reloads each time you save, so you can check your changes at any point.

### So -
Let's look into that header that got rendered.
