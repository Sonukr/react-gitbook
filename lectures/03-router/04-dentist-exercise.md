
# The Plan: Our Example Dentist Website
We'll make an example Dentist website that has a `Home` page, a page that lists
available `Procedures` and a page displaying `Contact` information. Each of
these pages of content will be built into their own regular **React** component,
then we'll create a unique URL route that leads to each component.

Here's how we'll route our Single Page Application.

| **URL Route**  | **Component**  | **Content Description**                          |
|----------------|----------------|--------------------------------------------------|
| /              | `<Home>`       | A homepage with welcome text.                    |
| /procedures    | `<Procedures>` | A list of all dentist procedures.                |
| /contact       | `<Contact>`    | A page with an address, phone number, and email. |

Remember, the URL routes are paths off our main website. We could put our
website at any domain, like `www.ourdentistwebsite.com` or
`www.premiumdental.com`, and the URL route paths would behave the same. Paths
only care about what comes after the domain name.

Our routes say that if someone goes to `ourdomain.com/` they will see our
homepage with welcome text. The content of this page will all be defined in its
own component in a file called `home.js`. If someone navigates to the URL
`ourdomain.com/contact` then they'll see content with the business address,
a phone number and an email. All of this content will be defined in a component
called `Contact` in a file called `contact.js`.

You can see all of the final code and a live working copy of the site here:

Full Repo: <https://github.com/geluso/react-router-simple-dentist-site>

Live Site: <https://react-router-dentist.herokuapp.com/>

## In Your Terminal

Now let's make the dentist project. In your terminal, type:

```
$ create-react-app dentist-website
$ cd dentist-website
$ npm install --save react-router-dom
$ npm start
```

Your browser should open to <http://localhost:3000/> and you'll see the standard
"Welcome to React" message with a fancy rotating atomic icon. `create-react-app`
creates several files for us in a directory called `src`. Open the `App.js`
file in your editor.

`App.js` contains our main application. You should see the basic HTML structure
of the standard React starter page. Make sure the file is the same thing you're
looking at in the browser by finding the text `Welcome to React` inside an
`<h2>` element.

Change the text to say `My First React Router App`, save the file and make sure
you see the changes automatically appear in your browser.
> If it doesn't automatically refresh, then try to manually
  refresh the page. If you still don't see changes after a manual refresh then  something could be wrong. Make sure you're editing the right file.



  <details>
    <summary><strong>Pro tip:</strong><summary>
    <br />
    <p>It's a good idea to make simple, verifiable changes like this when
    you're first starting to make changes to a project. It's like a sanity check.</p>

    <p>Make sure you can do simple things first. Don't start with complex things; many things can go wrong when you make complex changes. Prove to yourself the small changes work, and you'll save yourself headaches debugging large
    complex changes.</p>
  </details>


# Installing React Router
Let's set up a new React project and install **React Router**.
> Remember to stop the React project you currently have running!

Since React Router is a third-party library we'll need to use to download React Router and save it as
a dependency in our project.

In your Terminal, enter:
```sh
$ npm install --save react-router-dom
```

* `npm install` is the command used to install libraries to our project.
* The `--save` flag tells `npm install` to save the thing we're downloading to
  our `package.json` file as a dependency. Saving the library as a dependency
  makes it easy for us to copy our project to another machine and just run
  `npm install` to install all of the dependencies for our project.
* `react-router-dom` is the official name of **React Router**

So, in summary, we're telling `npm install` to find the library package called
`react-router-dom`, install the package, and save the name of our package to our
file that keeps track of all the packages for our project.

If you don't use the `--save` flag then `npm install` will still find the
package and download it. It just won't save the package to your `package.json`
file so you can easily install all your saved dependencies later on if you move
to another machine.

# Create Custom Homepage
Let's get rid of the standard "Welcome to React" page and replace it with our
own Dentist Website Homepage. Continue editing `App.js`. Gut most of the HTML
contents, and delete the import statement for the `logo.svg` which we won't use.

The `App.js` file contains one component that our whole App will live inside
of. Remember that React components have a `render(){ ... }` function that
defines what the component will look like when it is rendered on the webpage.

<details>
  <summary><strong>Repetition for good practice reminder:</strong>summary>

  The render function alway has to return *at most* one top-level element. It's
  common to wrap everything in your component in a `<div>` to make sure you
  satisfy this constraint.

</details>

**So...**

I added one `<h1>` that says `Dentist Website` and added a paragraph with some
short welcome text. My `App.js` file now looks like this. Save the file and go
to your browser to make sure these changes show up.

**App.js**
```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
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

export default App;
```

Good. Now we have a simple homepage set up. Let's move on to getting the rest
of the content for our site set up.
