# Creating Our Homepage Component
We've been editing `App.js`, which defines one component for our entire
application. So far our app manually shows just the homepage. Let's refactor
this so the content of the homepage is moved into its own component called
`Home`.

1. Create a new file called `Home.js`.
2. Copy and paste everything inside `App.js` into `Home.js` to use as a
  template for how to create a React component.
3. Delete the import statement for `./App.css`.
4. Find everywhere the file says `App` and rename it to `Home`. This code used
  to create a component called `App`. Now we're rewriting it to instead create a
  component called `Home`.
5. Look at the `render() { ... }` function and verify that it's returning
  content that represents our homepage. It should just be the one top-level
  `<div>`, the `<h1>` and a `<p>` paragraph element (if you used the same
  content as we did). Great. We actually don't need to make any changes here! Now you have your `Home` component.
6. Go back to the `App.js` file and delete the `<h1>` and `<p>` tags where we used to
  have content written directly inside our `App` component. We don't
  need that written inside `App` any longer, because we just moved it all to the
  new `Home` component.
7. Instead, we need to call our new component. Put `<Home></Home>` inside the `<div>` in the `App` component. This tells the
  `App` component to render the `Home` component right there inside the div.
  > Note: We have been using `<Home />` to call components. `<Home></Home>` is just a different syntax we're showing you so that if you see it elsewhere, you're familiar with it.
8. Let's try it out! Look at the browser and see if the homepage appears. Unfortunately, if you've been following along, it won't. You'll see an
  error, which should look like this:

![Home not defined](assets/home-not-defined-error.png)

It's not enough to simply create the `Home.js` file and create the `Home`
component. We must also remember to import the component into the `App.js` file. Any components you want to use in a file need to first be imported into that file.

Your `App.js` and `Home.js` files should look like this after you've properly
created and imported the `Home` component.

**App.js**
```js
import React, { Component } from 'react';
import './App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
      </div>
    );
  }
}
export default App;
```

**Home.js**
```js
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Dentist Website</h1>
        <p>
          Welcome to my dentist website.
        </p>
      </div>
    );
  }
}

export default Home;
```

# Create Components for Procedures and Contact
The purpose of our site is to create several components that we can swap out
as the main content of the main page of our application in order to create a
modern Single Page Application. We'll create two more components, and then
we'll start routing things up.

1. Create a new file called `Procedures.js`
2. Create a new file called `Contact.js`

The files
were created using the same procedure we used to create the `Home` component
using the `App` component as a template. Basically: create each file, change the
name of the component to its new name, then replace the HTML in the
`render() { ... }` function with custom content. Be sure to import each new
component into `App.js` just like we did with the `Home` component.

You can put your own content to be rendered by each component if you'd like. Refer to these complete files in the finished repo to make sure you got
everything correct:

<https://github.com/geluso/react-router-simple-dentist-site/blob/master/src/procedures.js>
<https://github.com/geluso/react-router-simple-dentist-site/blob/master/src/contact.js>

Now that we have our components made, there's nothing stopping us from importing multiple components into our App.js. So now, we have:

**App.js**
```js
import React, { Component } from 'react';
import './App.css';

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <Procedures></Procedures>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
```


> Check yourself! You should see all of content for each of the pages all stacked on top of each
other on the homepage. If you don't see content from all three of your
components then something is wrong. You must fix this before continuing. Always:
do simple things before doing complex things!
