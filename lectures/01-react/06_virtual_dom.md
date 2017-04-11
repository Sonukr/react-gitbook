## The Virtual DOM

### Review and Refactor

`Hello` in `src/App.js`  is our component class, with a `render` method that returns the JSX for the "Hello World!" and tea headers. Keeping components separate and organized is a best practice, so we created that class in its own file.

To show up on the page, though, that component still needs to actually be called from somewhere.  The main "hub" of our React app is `src/index.js`.  We'll investigate how `src/index.js` is currently loading and rendering the component, and we'll improve the code by making it more explicit and readable.

Look at your `src/index.js` file, and contrast it with the code below.


```js
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
```

The first (and smallest) change is that we've dropped the CSS file import. We just aren't using it.

The next change is that `import App from './App';` has turned into `import Hello from './App.js'`.

>  This line imports from the `src/App.js` file. Remember, the `default` part of `export default Hello` in `src/App.js` means that importing other names - like `App` - actually _already_ brings in the `Hello` class! As a best practice, though, we're going to explicitly import the `Hello` class.


The last change is that `ReactDOM.render(
  <App />,` has turned into `ReactDOM.render(
    <Hello />,`.

> This changes the `ReactDOM.render` call to explicitly say "Render whatever the component `Hello` returns."

### Virtual DOM Intro

You should be familiar with the DOM.  You may have noticed that our `src/index.js` code mentions `ReactDOM`.  `ReactDOM` doesn't refer to the same DOM we know. Instead, it refers to a "Virtual DOM." The Virtual DOM is a key piece of how React works. So how is different?

<iframe src="//fast.wistia.net/embed/iframe/v5qyqsir0s?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>

In React, the virtual DOM is a staging area for changes that will eventually be implemented.

![Virtual DOM Diagram](https://docs.google.com/drawings/d/11ugBTwDkqn6p2n5Fkps1p3Elp8ZToIRzXzvM4LJMYaU/pub?w=543&h=229)

  > If you're interested in learning more about the Virtual DOM, [check this video out](https://www.youtube.com/watch?v=-DX3vJiqxm4).

You know every component has, at a minimum, a `render` method. The `render` method generates a Virtual DOM node to be added to the actual DOM.

The contents of this node are what we define in the method's return statement, using JSX.

The `ReactDOM.render` function takes two arguments:

```js
ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
```

- `<Hello />` uses **the name of the component to render**. Inside the `Hello` component in our `App.js` file, we returned the content to render:  a div with those "Hello World!" and tea headers (written in JSX).

- `document.getElementById('root')` finds **the DOM element to append that content to**. This argument can be any element on the page. Here, we're simply appending it to an element with the id `root`.  (Look through the `index.html` file if you're curious about the HTML structure from `create-react-app`.)

When our `index.js` is processed, our virtual DOM is compared to the regular DOM, and only the 'root' element on the page updates.


> Side note: What is `<Hello />` written in? JSX! Whenever you use a self-closing tag in JSX, you **MUST** end it with a `/`, like `<Hello />` in the above example. It's just one of the rules!

### Hello World exercise - You do!
#### Code along: Calling our `Hello` component explicitly

Update your `index.js` file to have the three changes listed above: deleting the CSS import and changing both the component name that's imported and the component name that's used inside `ReactDOM.render`.

> Check it out! You should be able to browse to http://localhost:3000 and see that nothing has changed.
