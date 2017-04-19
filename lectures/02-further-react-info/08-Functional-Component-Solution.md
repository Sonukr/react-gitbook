# Functional Component Solution

Not only can the `ListItem` be converted into a functional component. The
entire `ToDoList` can be it's own functional component as well.
  
Make a new file called `ToDoList.js` and have it look very much like the
`const ListItem` functional component above. It should have the following
properties:

* define as `const ToDoList` similar to `ListItem`.
* import `ListItem` because it will render `ListItems`.
* accept `props` like `ListItem`.
* expect there something called `toDoItemArray` attached to props.
* Use `props.toDoItemArray.map(item, index)` to iterate over each item.
* Render `<ListItem>` components inside the map.
* Pass the proper properties (`doThis` and `key`) to the `<ListItem>` component

The syntax of getting the mapping to work can be tricky. Notice that it must
be surrounded in curly braces, like the fruit list example that uses `.map()`
to generate a table.

All in all, the functional `ToDoList` component should look like this:

```js
import React from 'react';
import ListItem from './ListItem';

const ToDoList = props => (
  <ul>
    {props.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))}
  </ul>
)

export default ToDoList;
```
