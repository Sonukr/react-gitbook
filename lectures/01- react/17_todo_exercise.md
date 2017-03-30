# Exercise! Todo list.


So, we've gone through all of the basics of React. To really hammer it home with practice, let's walk through complete creation of an app. This will be a to-do list, keeping track of everything we need to do for the day (after we finish this!). It's a lot, so we're going to want it to be editable.

This is what our list will look like when we're finished:

![finished-list](./images/todo-list-finished.png)

Let's get started!

* Because this is a new exercise, be sure to close the running application in terminal first.

Back up to the main directory you're storing your projects in. Create a new directory for your to-do list, and inside it, run your command:
```sh
$ create-react-app todo-list
```
The tool created a new directory for our app, so let's move into it...

```sh
$ cd todo-list
```

Use npm start to start a server that will serve your new React application!

```sh
$ npm start
```

* Check it out! If you browse to http://localhost:3000, you should have a fresh react app.

* Make sure that as you go, you frequently check the site to ensure your changes are all reflecting accurately!

## First, the basic list.

Let's change the name of the component in App.js to something helpful, like `MyList`. Then, we'll change the contents of the HTML to have a header and the start of a list.

This looks like:
```js
import React, { Component } from 'react';
import './App.css';

class MyList extends Component {
  render() {
    return (
      <div>
          <h1> Things I should stop procrastinating:</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default MyList;
```

> Remember to change the component call in index.js!

Now, our webpage displays an empty list.

We've learned that we should make new files for each component, and that different functionalities should be split into different components. Let's make a component for `ListItem`s. The return from this component can simply be `<li>Make the list!</li>` so we are starting with something in this list.

* Remember to use an export statement at the end of the new file to make the code in this file available elsewhere in our application

* Don't forget to import it into App.js, and then call the component with `<ListItem />` under the existing header (in place of the existing list item)!

At this point, our app looks like this:

![list-preview](./images/todo-list-1.png)

## Side note - let's just quickly format it a little nicer!

Since we'll be looking at this for a while, let's make it less of an eyesore. Feel free to change the index.css file to be anything you'd like; on mine, I've centered the text and given it a light green background. You can grab my .css file here:

## Second, props.

This is a great start - we've already nested components (`ListItem` inside of `MyList`). Now, let's add some props to make this useful and check that current list item off!

Let's first just pass a prop into `ListItem` from `MyList`. We'll call the prop something simple, like `doThis`. I'm pretty hungry; I'll pass in a value of "buy ice cream."

Then, in `ListItem`, we'll add a list item instead of the existing one that renders the passed in prop.

Now, we have in `App.js`:
```js
import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {
  render() {
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          <ListItem doThis="Buy ice cream" />
        </ul>
      </div>
    );
  }
}

export default MyList;
```

and then in `ListItem.js`:
```js
import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.doThis}</li>
      </div>
    );
  }
}

export default ListItem;
```

Our app now looks like this:
![list-preview](./images/todo-list-2.png)


## Third, render different items in an array
If we want to make this a truly extensible list, we could create an array of items, then pass them into props through the ListItem component, then render out each item. Let's do that now.

Borrowing from a bonus exercise earlier, the easiest way to do this is by using the `map` function. A map is like a for loop or a dictionary. With `map`, you make a new variable and iterate through each item in an array with it. It looks like this:

```js
let <new_Variable_Name> = <the_Array_We_Are_Mapping>.map( (local_Variable_Name_to_Loop, index) => (
  <what_To_Do_With_Each_Item_in_Loop>
))
```
We:
* Will, in the `MyList` component, have an array of items for the list, uncreatively called `items`.
* Create a variable to refer to the map, `todoItems`.
* Want to run through this array, one `item` (this could be any name you'd like) at a time, and call the `ListItem` component for each.
* The `ListItem` component will return a line of JSX, creating a list item for each one.
* We can later refer to this list by just calling the variable in JSX like any other, e.g. `{todoItems}`.

Here is the map function that will do this for us, that we'll put in the `MyList` component.:

```js
let todoItems = this.props.theList.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))
```

Let's also actually create that array! In `MyList`, create an array variable called `items`. Fill it with what you need to do for the day.

My final `myList` component looks like:

```js
class MyList extends Component {

  render() {

    let todoItems = this.props.theList.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}
```

And the `index.js`:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './App';
import './index.css';

var toDos = ["Buy ice cream", "Eat ice cream", "Go to the gym"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
);

```

And the `ListItem.js`, which hasn't changed:
```js
import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.doThis}</li>
      </div>
    );
  }
}

export default ListItem;

```

Now what we have is:
Our app now looks like this:
![list-preview](./images/todo-list-3.png)
