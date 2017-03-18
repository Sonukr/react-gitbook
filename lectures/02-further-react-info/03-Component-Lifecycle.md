# React Component Lifecycle

React class components provide several lifecycle methods that you can use to control your application based on the state of the UI. Some common uses of lifecycle methods are making asynchronous requests, binding event listeners, and optimizing for performance.

## Component lifecycle methods:

  - `constructor()`
  - `componentWillMount()`
  - `componentDidMount()`
  - `componentWillUnmount()`
  - `componentWillReceiveProps()`
  - `render()`
  - `shouldComponentUpdate()`
  - `componentWillUpdate()`
  - `componentDidUpdate()`

## `constructor()`

Like any JavaScript class, the `constructor` method is called when a component is instantiated (when it's first rendered).  
In a class constructor, you must call `super` before you do anything else. So a React component constructor in its most basic form looks like this:

```javascript
constructor(props) {
  super(props);
}
```

You don't need to define a constructor if that's all it does, though. This happens automatically when your component is invoked. A common use of the constructor is to initialize state using the props passed to the component.

```javascript
constructor(props) {
  super(props);
  this.state = {
    fruits: props.fruits,
  };
}
```

This constructor sets the initial `fruits` state of the component to the `fruits` prop passed to the component. Then, using `setState`, your user can add fruits, delete them, or whatever else your component allows.

Another common use of the constructor method is to bind class methods. In JavaScript classes, methods aren't bound by default. So, if you pass a component's method to a child component without binding it, it can lose its context, and not behave the way you intended. Here's an example:

```javascript
class FruitTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fruits: props.fruits,
    };
    this.addFruit = this.addFruit.bind(this);
  }

  addFruit(fruit) {
    this.setState(prevState => ({
      fruits: prevState.fruits.concat(fruit),
    }));
  }

}
```

Again, you _don't_ need a constructor in every React component. If you need to initialize state by props or bind methods, the constructor is where you do it.

## `componentWillMount()`

You generally won't need to use this method. Advanced use-cases like server-rendering are usually the only ones in which `componentWillMount` is needed.

## `componentDidMount()` and `componentWillUnmount()`

The `componentDidMount` method is called once, immediately after your component is rendered to the DOM. If you want to make an AJAX request when your component first renders, this is where to do it (_not_ in the constructor, or in `componentWillMount`). In the following example, I fetch data from the server, then set the state of the component using the response.

```javascript
componentDidMount() {
  fetch(`http://api.com/${this.props.id}`)
    .then(response => response.json())
    .then(data => this.setState(prevState => ({ data })));
}
```

Another common use for `componentDidMount` is to bind event listeners to your component. You can then remove the event listeners in `componentWillUnmount`. In this example, I bind and unbind an event listener for a drag-drop component.

```javascript
class FruitTable extends React.component {

  componentDidMount() {
    document.addEventListener('dragover', this.handleDragStart);
  }

  componentWillUnmount() {
    document.removeEventListener('dragover', this.handleDragStart);
  }

  handleDragStart(e) {
    e.preventDefault();
    this.setState(prevState => ({
      dragging: true
    }));
  }

}
```

## `render()`

This is the one method that every React class component **must** have. In render, you return JSX using the compoment's props and state. You should never set state in render - render should only react to changes in state or props, not create those changes. The following component renders a single prop and a single state key - a car model and a speed. Once this component is mounted, its `speed` state will go up by 1 every second. You can [try it out yourself on CodePen](https://codepen.io/andrewdushane/pen/aJEJjm).

```javascript
class Car extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      speed: props.speed || 0,
    }
    this.incrementSpeed = this.incrementSpeed.bind(this);
  }

  componentDidMount() {
    window.setTimeout(this.incrementSpeed, 1000);
  }

  incrementSpeed() {
    this.setState(prevState => ({ speed: prevState.speed + 1 }));
    window.setTimeout(this.incrementSpeed, 1000);
  }

  render() {
    return (
      <div>
        This {this.props.model} is going {this.state.speed} miles per hour!
      </div>
    );
  }

}
```

## `componentWillReceiveProps(newProps)`

This method is called any time your component receives new props. It is _not_ called with the initial props when your component initially mounts. If you need to change the state of your component based on changes in the props, this is where you do it. In a simple app, you generally won't need `componentWillReceiveProps`.

## `shouldComponentUpdate`, `componentWillUpdate`, `componentDidUpdate`

These methods are called when a component's props or state change, and are generally used for performance optimizations. React is quite fast by itself, and you usually don't need to concern yourself with these methods outside of a large app with many dynamic components.
