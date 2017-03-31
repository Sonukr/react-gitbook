## State Recap

Now that you've wrapped up the Blog project for now, you should take a moment to review the component lifecycle at a high level.

An example of a Post Component could be seen as follows:

```jsx
class Post extends Component {

  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  changeBody (e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Author authorList={this.props.allAuthors[0]} />
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        </div>
        <h3>Comments:</h3>
        <Comment body={this.props.comments[0]} />
      </div>
    );
  }
}
```

In your _Post_ Component (or the one above), there are three methods: 

- `constructor()`
- `changeBody()`
- `render()`

Upon instantiation of your Component, the _constructor_ method is called. We call `super()` to call the base class (React.Component)'s constructor. Next, the constructor's state is set. Here we define that our Component's state contains a `body` attribute that contains whatever the _body_ prop is passed to the component. For example, let's consider the data flow.

```jsx
<Post body="This is my first blog post" />
```

Inside of our component, our constructor would essentially be saying:

```jsx
constructor (props) { // props = { body: "This is my first blog post" }
  super()
  this.state = {
    body: props.body // props.body = "This is my first blog post"
  }
}
```

Next, we define a listener in our JSX element of `<button>`. This calls the `changeBody()` method `.onClick`. That is defined here: 

```jsx
<button onClick={(e) => this.changeBody(e)}>Edit Body</button>
```

When the _button_ is _clicked_, the `changeBody()` method is called.

```jsx
changeBody (e) {
  let newBody = prompt("What should the new body be?")
  this.setState({
    body: newBody
  })
}
```

From here, we use `prompt()` to get a new value from the user (but please do not ever do this in production - users hate popups!). `setState()` is then called which then will eventually lead to `render()` being called to automatically re-rendering your new data. Understanding the component lifecycle is key to being a productive React developer (and it will save you headaches).

#### Check Yourself

When you `setState()`, what methods are fired and how are your `props` and `state` handled in the Component? Draw this out or comment through your code.
