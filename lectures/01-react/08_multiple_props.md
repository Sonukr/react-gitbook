### What about... multiple props?

Of course, we'll often want components to display more complex information.  We can pass multiple properties to our component! We'll use the same two steps we took to add the first prop.

First, add another prop to the component call: `<Hello name={"Nick"} />,` changes to `<Hello name={"Nick"} age={24} />`.

Update your `index.js` file to reflect this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

ReactDOM.render(
  <Hello name={"Nick"} age={24} />,
  document.getElementById('root')
);
```

Now, in our component definition we have access to both values.  The second step is to change the `Hello` component class in `App.js` to use the age information!


```js
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>You are {this.props.age} years old.</p>
      </div>
    );
  }
}
```


> Check it out! You should be able to browse to http://localhost:3000 to view this change!
