# Functional Component Exercise!

Now that we've learned about functional components, is there any place we can apply them?

Look through the projects you've done so far. Are there any places you could use a functional component?

Let's do one together. Open your todo list project.

Look at your `ListItem.js`. All it does is return JSX. This is prime functional component material.

First, rewrite `ListItem.js` to be a functional component.

```javascript
const ListItem = props => (
  <div>
    <li>{props.doThis}</li>
  </div>
);
```

You can view that [here](../../exercise-solutions/functional-component-exercise)

Check it - does it still work? What else in your projects can you change?

Check the solution on the next page, here: [Functional Components Solution](./08-Functional-Component-Solution.md)
