### Making the todo list dynamic

Now we have a todo list! But.. it isn't changeable, and we can't just think about eating ice cream and gingo to the gym forever. At some point, we have to actually eat the ice cream (deleting it from the list) and find a gym buddy (adding that to the list). In other words, we need to be able to change the list.

Remember, in a React component, `state` is just another object, like props. The only difference is that it can only be changed through the method `setState`. The exception is setting the initial state, which is only done once when initializing a React component. In order to pass items to the ToDoList component and make them mutable, we'll need to set the state of our MyList. Let's continue refactoring our MyList component to change the todoItems array through state.

## Clearing the items

* At the top of our `MyList` component, create a constructor that sets an initial state for a variable toDoItemArray equal to the initial list that's passed in.
* Don't forget to change the map!
* Always check to be sure your website is accurate (it should still look the same).

Now, we'll look into making this list changeable. Remember, updating state will involve calling `setState`. Let's use a simple example with a clear button in `MyList`.

First, in `MyList`, we define the function that will be called by the button:
```js
clearList (e) {
  this.setState({
    toDoItemArray: []
  })
}
```

Now, we need to display a button to the user. Under the list tags in `MyList`'s render, we'll add a button definition.
```js
<button onClick={(e) => this.clearList(e)}>Finished the list!</button>
```

This makes our `MyList` component look like this:
```js
class MyList extends Component {

    constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList
    }
  }

  clearList (e) {
    this.setState({
      toDoItemArray: []
    })
  }

  render() {

    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <ListItem doThis={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    );
  }
}

export default MyList;
```

> Don't forget to try it out!

Now when we click on the button, the following will occur:
* `this.state` will set the state, `toDoItemArray`, to be empty: `{toDoItemArray: []}`
* The render function for `MyApp` will be called, and re-render the component
* We'll feel good about ourselves for going to the gym, even if we ate ice cream first.

## Adding items

Let's add one more thing to our app, an input field for more items. In order to do so, we'll need the following variable to represent the new item we'll be entering:
* `newItem`, to hold the new item the user inputs
 > Make a new state, initializing `newItem` to a blank string
 * Hint: You need a comma between states

We'll also need two additional functions to represent the following changes in state:
* `newItemChange`, for when we type characters into an input field and change the value of newItem
 * We'll need to get the current value of the input field and set state accordingly
 > Create this function (with a prop of 'e' like in ClearList) and in it, change the state of `newItem` to `e.target.value` - this will be the value returned from the form.
* `addItem`, for when we submit the form
 * We'll need to make a copy of toDoItemArray, push the `newItem`, set `state` and clear `newItem`
> Create this function (with a prop of 'e') and in it, create a new variable initialised to the value of the array saved in state. Then, use `yourArray.push(<value>);` to push the item saved in state onto the array. Set the `newItem` state back to an empty string, and set the `toDoItemArray` state to your new array.


Lastly, add this form to your render method.
```js
<form onSubmit={this.addItem}>
  <input type="text"
   placeholder="Type an item here"
   onChange={this.newItemChange}
   value={this.state.newItem}
  />
</form>
```
* Notes:
 * Since JSX functions are callbacks, we can assume that any function called via an event can accept a callback argument with the event. We pass this in as `e` to `newItemChange` and `addItem`
 * We can use `onChange` on the `input` field to trigger an event when the text in the box is changed

 > Check it out! Have you done it?

 > The final solution code for this todo list is here.
