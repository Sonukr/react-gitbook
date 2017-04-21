# Component Data with Props

The React framework was built to handle data that changes over time.

So far, we have defined a `Hello` component in `App.js`. The component's `render` method returns a div with a few headers, written in JSX.

In `index.js`, we are importing this component, appending what the `Home` component `render` method returns to the virtual DOM, and rendering that.

This is great, but it doesn't involve any data yet, let alone data that changes over time!   Let's make it more interesting.

Rather than simply display "Hello world", let's display a greeting to the user. We'll make that greeting dynamically changeable based on the user's name.

The question is, how do we add a name to our `Hello` component without hardcoding it into the component's `render` method?


Watch this video and follow along using [this codepen](https://codepen.io/susir/pen/vxWypq) to try it yourself!

<iframe src="http://fast.wistia.net/embed/iframe/gchiu63slo?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


### Hello World exercise - You do!
#### Code along: Adding props to our component

Let's use "props" to make our Hello World app more flexible.

##### First, a single prop

We want to make a greeting that's reusable for many different users, so we'll have a `name` prop for the name of the user.

In `src/index.js`, we'll change the line that renders the `Hello` component to include this `name` prop. The new line will be:

`<Hello name={"Nick"} />`

> We pass in data wherever we are rendering our component. In rendering the `Hello` component above, we pass in a prop called "name" with a value of "Nick".

Your `index.js` should now look like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
)
```

If you check your application now, nothing has changed.  We're passing the `name` prop into the component, but the component isn't _using_ it yet.

In our component definition, we will change the `<h1>Hello World!</h1>` to `<h1>Hello {this.props.name}!</h1>`. The portion `{this.props.name}` deserves a closer look:

- `this` refers to the specific component instance
- `this.props` will collect all the props for this component instance
- `this.props.name` pulls out the name property from `this.props`.

> The `{}` syntax in JSX renders the result of any expression inside it. It works even without props. If you wrote `{2+2}` in your JSX, `4` would be rendered.

In `App.js`, your `Hello` class should now look like this:

```jsx
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h3>It is time for tea.</h3>
      </div>
    )
  }
}
```

In the above example, we replaced "world" with `{this.props.name}`.

> Check it out! You should be able to browse to http://localhost:3000 to view this change!
