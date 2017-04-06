## The Virtual DOM

App.js is our component class, which returns the 'Hello World' and tea headers. Being good programmers, we've separated our class into a different file. But that component still needs to actually be called from somewhere.

Now, let's use `/src/index.js` to load in our new component and render it on the DOM.

Look at your index.js file and contrast it with this below.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
```

The smallest change is that we've dropped the .css file import - we just aren't using it.

The next change is that `import App from './App';` has turned into `import Hello from './App.js'`

> This imports the `Hello` class from our App.js file. Because in our App.js file we'd made the `Hello` class default, it's what was already being imported, but for good practice, we're explicitly defining importing the `Hello` class.

The last change is that `ReactDOM.render(
  <App />,` has turned into `ReactDOM.render(
    <Hello />,`.
> This changes the default call to explicitly say "Render whatever the component `Hello` returns."

`ReactDOM`, specifically, doesn't call the regular DOM as we know it. Instead, it calls the Virtual DOM. How is that different? Watch this video to find out.

<iframe src="//fast.wistia.net/embed/iframe/v5qyqsir0s?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>

So for React, the virtual DOM is a staging area for changes that will eventually be implemented.
![Virtual DOM Diagram](https://docs.google.com/drawings/d/11ugBTwDkqn6p2n5Fkps1p3Elp8ZToIRzXzvM4LJMYaU/pub?w=543&h=229)

  > If you're interested in learning more about the Virtual DOM, [check this video out](https://www.youtube.com/watch?v=-DX3vJiqxm4).

Every component has, at a minimum, a render method that generates a Virtual DOM node to be added to the actual DOM.

The contents of this node are defined in the method's return statement using JSX.

The .render function takes two arguments:
```js
ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
```

- `<Hello />` is the component to render - inside this component in our `App.js` file, we returned the content to render - those Hello World and tea headers (written in JSX).
- `document.getElementById('root')` finds the DOM element to append that content to. This can be any element on the page; here, we're simply appending it to `root`.

When our index.js is called, our virtual DOM is compared to the regular DOM, and only the 'root' element on the page updates.

> Side note: What is `<Hello />` written in? JSX! Whenever you use a self-closing tag in JSX, you **MUST** end it with a `/`, like `<Hello />` in the above example. It's just one of the rules!



### Hello World exercise - You do!
#### Code along: Calling our component

Update your `index.js` file to have these three changes - deleting the .css import and changing both the Component name that's imported and the Component name that's called.

> Check it out! You should be able to browse to http://localhost:3000 - and see that nothing has changed.
