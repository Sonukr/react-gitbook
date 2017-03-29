### What about... multiple props passed from an object?

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

> Try changing the values in the `person` object, without changing the ReactDOM.render() call, and see how the page updates.

And in fact - since we're just calling props from an object, we can use any object we want. For example, we can nest an array in it. Let's say our user has some favorite animals. Update your object to include an array:

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
Now we can just pass that in to the class as a prop, just like normal. You can pass a single element (`favorites[0]`) or the entire array, which is what we'll do. Update your index.js call:

``` js
ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
    animals={person.favorites}
  />,
  document.getElementById('root')
);
```

If you check your application now, nothing has changed - the class will just ignore any props it receives that it doesn't use. But, we want to use them! So, lastly, update your App.js:

```js
<div>
  <h1>Hello {this.props.name}</h1>
  <p>You are {this.props.age} years old</p>
  <p>You love {this.props.animals}</p>
</div>
```

If you check now, it prints the entire array, since that's what was passed in. Instead, let's just print the first value.

```js
<div>
  <h1>Hello {this.props.name}</h1>
  <p>You are {this.props.age} years old</p>
  <p>You love {this.props.animals[0]}</p>
</div>
```

Check it out! 
