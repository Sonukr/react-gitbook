# JSX Props

So far, we have a component defined in `App.js` which returns a header written in JSX.

In `index.js`, we are calling this component, appending what `App.js` returns to the virtual DOM, and rendering that.

This is great, but overall, our `Hello` component isn't too helpful. Let's make it more interesting.
* Rather than simply display "Hello world", let's display a greeting to the user. Let's make that dynamically changeable based on the user's name.
* So the question is, how do we feed a name to our `Hello` component without hardcoding it into our render method?

Watch this video and follow along using [this codepen](https://codepen.io/susir/pen/vxWypq) to try it yourself!

<iframe src="//fast.wistia.net/embed/iframe/gchiu63slo?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


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
