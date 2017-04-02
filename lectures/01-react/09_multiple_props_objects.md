### What about... multiple props passed from an object?

If we have many props, it might get difficult to keep track when we're passing everything in to  render a component. A better practice is to organize values in some kind of object and then pass props to the component from that. Let's see this strategy.

Currently, in `index.js`, we are directly putting Nick's name and age into the `ReactDOM.render` call. Instead, we'll create an object that holds Nick's name and age, making it clearer for other developers and easier to change in the future. In your `index.js file`, below the `import`s, add this object definition:

``` js
var person = {
  personName: "Nick",
  personAge: 24
}
```

Next, we'll update what's passed into the component. Near the bottom of your `index.js`, modify the `ReactDOM.render` call:

``` js
ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
  />,
  document.getElementById('root')
)
```

We don't have to change anything in `App.js`, because it's still receiving exactly the same values for exactly the same two props - `name` and `age`. We're just sending it those values in a slightly different way.

> Check it out! If you browse to http://localhost:3000 nothing should have changed.

> Try changing the values inside the `person` object without changing the `ReactDOM.render` call. See how the page updates.


#### Multiple props from a more complex object

Since we're just pulling props out of an object, we can use any object we want. For example, we can nest an array inside it. Let's say our user has some favorite animals. Update your object to include an array:

``` js
var person = {
  personName: "Nick",
  personAge: 24,
  favorites: [
    "capybaras",
    "Tigers",
    "Dinosaurs count!"
  ]
}
```

Now we can use this new information as a prop, just like normal. You could choose to pass a single element (`favorites[0]`) or the entire array.  We'll use the entire array so that the component can display _all_ a person's favorite animals. First, update your `ReactDOM.render` call in `index.js`:

``` js
ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
    animals={person.favorites}
  />,
  document.getElementById('root')
)
```

If you check your application now, nothing has changed. Remember, a component class will just ignore any props it receives that it doesn't use. But, we want to use the favorites! So, second, update your `Hello` class `render` method in `App.js`:

```jsx
<div>
  <h1>Hello {this.props.name}!</h1>
  <p>You are {this.props.age} years old.</p>
  <p>You love: {this.props.animals}</p>
</div>
```

If you check the page now, you'll see React prints the entire array, since that's what was passed in. We could fix the spacing and still include all the animals.  Instead, to review some syntax, let's just modify the code to render the first value.

```jsx
<div>
  <h1>Hello {this.props.name}!</h1>
  <p>You are {this.props.age} years old.</p>
  <p>You love: {this.props.animals[0]}</p>
</div>
```

Check it out!

[Read more about using props in JSX, if you'd like!](https://facebook.github.io/react/docs/jsx-in-depth.html)
