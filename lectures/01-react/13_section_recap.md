## Catch your breath!

It is time to stop for a moment and review all of the topics that we've discussed so far. React may seem very confusing at first with all of the jargon, so let's break everything down:

### Learning Objectives that we've covered so far

* Explain what ReactJS is and where it fits in our applications' stack.
* Explain the component model of web development.
* Create and render React components in the browser.
* Pass in data to a React component via `props`.
* Nest React components.

* **React** is a framework created by developers at Facebook. It is aimed at being the 'view' of your Javascript application. It focuses on creating a component-based architecture.
* A **component** is an independent, reusable piece of your user interface.
* The **Virtual DOM** is a virtual representation of the DOM, or an abstraction of the DOM. React doesn't apply your changes to the DOM directly. While it creates and manipulates elements, it does so through custom React objects. The results of that manipulation are then rendered to the DOM. This keeps you from having to focus on changing the state of a `<div>` tag constantly.
* **JSX** is a standard that React uses to represent HTML elements as XML tags. It looks like a template language but is much more powerful. Each JSX tag represents a React Element, and a React Class is composed of multiple elements. You express your visual user interface through nested JSX tags that can render additional components.
* **Properties** are arguments passed into a component, as if they were arguments to a function. The component can then use this data to render something or pass the data on to another component.
