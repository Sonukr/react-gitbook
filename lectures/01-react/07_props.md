So far, we have a component defined in `App.js` which returns a header written in JSX.

In `index.js`, we are calling this component, appending what `App.js` returns to the virtual DOM, and rendering that.

This is great, but overall, our `Hello` component isn't too helpful. Let's make it more interesting.
* Rather than simply display "Hello world", let's display a greeting to the user. Let's make that dynamically changeable based on the user's name.
* So the question is, how do we feed a name to our `Hello` component without hardcoding it into our render method?

# PROPS VIDEO here


### Hello World exercise - You do!
#### Code along: Adding props to our component

Let's use props to make our Hello app more flexible.

##### First, a single prop

In `src/index.js`, we'll change the component call to include the name prop. The new call will be:

`<Hello name={"Nick"} />`
> We pass in data wherever we are rendering our component. In the Hello component called, we pass in a prop called "name" with a value of "Nick".

Your `index.js` should now look like:
```js
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
)
```

Now, we're passing the prop into the component, but the component isn't using it yet. In our component definition, we will change the `<h1>Hello World!</h1>` to `<h1>Hello {this.props.name}</h1>`. This is a reference to that data via as a property on the `props` object, rendering the prop that was passed in.

Your `index.js` should now look like:
```js
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h3>It is time for tea.</h3>
      </div>
    )
  }
}
```

In the above example, we replaced "world" with `{this.props.name}`.

> Check it out! You should be able to browse to http://localhost:3000 to view this change!


##### What about... multiple props?

We can certainly pass multiple properties to our component! This is just a matter of adding another prop to the component call: `<Hello name={"Nick"} />,` changes to `<Hello name={"Nick"} age={24} />`.

Update your index.js file to reflect this:

```js
import React from 'react';
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} age={24} />,
  document.getElementById('root')
)
```

Now, in our component definition we have access to both values, so let's change App.js to use it!

```js
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
      </div>
    )
  }
}
```


> Check it out! You should be able to browse to http://localhost:3000 to view this change!

##### What about... multiple props passed from an object?

If we have many props, it might get difficult to keep track in the render function itself. Instead, something we can do is hold our values in an object, and then just pass props to the component from that object. Let's look.

Currently, in index.js, we are directly putting Nick's name and age into the ReactDOM.render() call. Instead, we'll create an object that holds Nick's name and age, making it clearer for other developers to change in the future. In your index.js file, below the imports, add the object definition:

``` js
var person = {
  personName: "Nick",
  personAge: 24
}
```

Then, we'll just change our component call. At the bottom of your index.js, update what's passed in to the class function.

``` js
ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
  />,
  document.getElementById('root')
);
```

We don't have to change anything in App.js, because it's still receiving two props - "name" and "age".

> Check it out! If you browse to http://localhost:3000 nothing should have changed.

Try changing the values in the `person` object, without changing the ReactDOM.render() call, and see how the page updates.
