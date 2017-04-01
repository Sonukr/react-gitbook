### What about... multiple props?

We can certainly pass multiple properties to our component! This is just a matter of adding another prop to the component call: `<Hello name={"Nick"} />,` changes to `<Hello name={"Nick"} age={24} />`.

Update your index.js file to reflect this:

```js
import React from 'react';
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} age={24} />,
  document.getElementById('root')
)
```

Now, in our component definition we have access to both values, so let's change App.js to use it!

```js
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
      </div>
    )
  }
}
```


> Check it out! You should be able to browse to http://localhost:3000 to view this change!
