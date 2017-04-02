### Hello World exercise - You do!
#### Initial Setup

Let's jump right in! We'll create a skeleton React project and walk through it as we go.

An easy way to start React projects is to use `create-react-app`. This is an excellent tool created by Facebook that will help you set up a barebones React app instantly, so we can just install the package and get coding!

Let's use npm to install it globally so we'll always have it available in our Terminal. Run:

```sh
$ npm i -g create-react-app
```

Now that it's installed, let's move to the directory wherever you keep all your code and use the tool to start a React app. We're calling the directory "hello_world", since that'll be our first project.


```sh
$ create-react-app hello_world
```

The tool creates a new directory for our app, so let's move into it...

```sh
$ cd hello_world
```

Use npm start to start a server that will serve your new React application!

```sh
$ npm start
```

> Here you have now set up a Hello World app that you will continue working on during this lesson's exercises.

After running `$ npm start`, you can view the app at `http://localhost:3000`

One especially cool thing that we'll see is that this tool sets up our application so that the webpage automatically refreshes whenever we save any file in the directory. It's awesome.


You can look in the directory and see the structure that `create-react-app` provides for us. It looks like this:

```sh
├──README.md
├──  favicon.ico
├──  index.html
├──  node_modules
├──  package.json
└──  src
    ├──  App.css
    ├──  App.js
    ├──  index.css
    ├──  index.js
    └──  logo.svg
```

Most of the important files are in the `/src` directory. Specifically, we'll be using `App.js` and `index.js`.

---

### Stop / Catch Up / Investigate

Take some time and look at what's been generated. Specifically pay attention to `App.js` and `index.js`


If you finish up early, make small changes to the code in `/src/App.js`, `/src/index.js` and `index.html` to see what happens.
