## React Recap

You may feel as if you've been caught in a deluge of React information today. Don't worry - while there is a lot to see at first, React is a pretty straightforward framework to use. You can create user interface components that extend from `React.Component`. These have a built-in lifecycle that accepts data and can trigger automatic re-rendering whenever that data is updating. In a React Component, an update in either the State or Props will trigger the method cascade that can lead to a `render()`. 

#### Check Yourself: Component Lifecyle

- What method inside of a component is called first?
- Which returns JSX to be displayed?
- When `setState()` is called, what methods are called prior to `render()` being called?
- Does `render()` always get called this way? Why or why not?

> We strongly urge you to understand and memorize the component lifecycle as soon as you can. Understanding how your data flows through a React Component is _important_.

#### Tips for Newbies

- Write code. Use `create-react-app` so you focus on writing React from the get go. Learning Webpack and the tooling for the ecosystem is cool but that is another topic unto itself. Keep that in mind and focus on React.
- Ignore Redux, Mobx, or any other state management framework until you understand the component lifecycle. These will drastically change how you interact with your data.
- Don't be concerned with React-Router yet -- we'll focus on that shortly.
- Adopt the ES2015 syntax. You may see older examples of React using `React.createElement` or `React.createComponent`; if you see these look for up-to-date examples. Some of the API methods on these older versions have been deprecated.

#### Best Practices

- Each component should be in a file unto itself. Don't put multiple components into one Javascript file.
- Do not automatically render elements on the DOM. You may find examples of `ReactDOM.render()` but you should avoid this at all cost; this was an older technique in past versions of React.
- Remember that `state` represents the _state_ of your user interface component.
- State can trigger changes in `props` or `props` can come from parent components.
- Stick to functional programming techniques if at all possible. Use built-in methods if available such as `.forEach()`, `.map()`, .`filter()`, .`reduce()`, and more. Don't worry if you're unfamiliar with them yet. We will spend more time with these methods this week.
- If you are rendering a list of child components (such as a _ul_ -> _li_ list), each individual child component needs a unique `id` for React to work with it. This is so React can identify each element uniquely if needed.
- Don't ever let yourself think that State and Props are the same thing. They aren't.

#### Further Reading

- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Stack Overflow: What is the difference between State and Props?](http://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react)
- [How to Scale React Applications](https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/)
- [Build With React - Follow along tuturials](http://buildwithreact.com/tutorial)
