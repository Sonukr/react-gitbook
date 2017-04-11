# Self exercise!

What's that mean? Well, we've given you a lot of tools for React, and you've had codealongs and guided projects. But you aren't going to be in a class forever, so now you're going to try some things out yourself!

This is an open ended exercise. There is no set solution that we can give you, though of course we are here to help.

## Your task is:
Choose any existing website you'd like and recreate the functionality as best as you can (using React, of course).

#### A few guidelines:
* Don't worry about styling! Just the functionality.
* Make sure it has at least four components.
* Make sure you use Router
* Use ES6 syntax
* We don't have a database set up - if you need data, feel free to hardcode only a little (just enough to get the idea) or use `fetch` to call an API.

#### Some ideas:
- https://www.airbnb.com/
- https://citymapper.com/boston
- https://reddit.com
- https://www.instagram.com/
- https://www.nytimes.com/


##### Just a note on best practices:

- Each component should be in a file unto itself. Don't put multiple components into one Javascript file.
- Do not automatically render elements on the DOM. You may find examples of `ReactDOM.render()` but you should avoid this at all cost; this was an older technique in past versions of React.
- Remember that `state` represents the _state_ of your user interface component.
- State can trigger changes in `props` or `props` can come from parent components.
- Stick to functional programming techniques if at all possible. By that we mean, use built-in methods if available such as `.forEach()` and `.map()`
- If you are rendering a list of child components (such as a _ul_ -> _li_ list), each individual child component needs a unique `id` for React to work with it. This is so React can identify each element uniquely if needed
- Don't ever let yourself think that State and Props are the same thing. They aren't!
