# You Do: A Blog Post #

Let's have some practice creating a React component from scratch. How about a blog post?

Referring to everything we've done up until now, back up a directory and create a new project using `create-react-app` (refer to the Initial Setup section if you don't remember this or view the official [Github repository](https://github.com/facebookincubator/create-react-app)).

> Note: Because create-react-app runs on port :3000, you'll have to stop the current hello_world app that's running to view this new app.

In the App.js file, change App component to be a Post component.

- Create a __post__ object literal in __src/index.js__ that has the below properties:
  - __title__  (value: "My blog!")
  - __author__ (value: "an awesome react programmer")
  - __body__ (value: "Check out this body property")
  - __comments__ (array of strings)  (values: "First!" "Great post" and "Hire him")
- Render these properties using a Post component.
- Adjust the CSS of your body to align your text to the center of the document.

## Solution

Your solution should look as follows:

![Solution for Project](SOLUTION.png)
