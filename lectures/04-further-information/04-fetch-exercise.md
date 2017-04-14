
## Codealong!

It is time for you to build a very simple component that posts a movie title and poster after searching for it. We'll do this using the [OMDB API](http://www.omdbapi.com/). For practice, create a new react application. Before doing so, challenge yourself to a mini quiz.
<details>

  <summary><strong>Q: Which React.Component method should API calls be made from?</strong></summary>

  > `componentDidMount()`. Per the [React documentation](https://facebook.github.io/react/docs/react-component.html#componentdidmount), _If you need to load data from a remote endpoint, this is a good place to instantiate the network request._

</details>

<details>

  <summary><strong>Q: What does it mean to make `GET` request?</strong></summary>

  > We are asking the server to send us data to read. To `GET` means to "read."

</details>


## Fetching from OMDB in a React Component

Now, let's use the `fetch()` API directly inside of a React Component to render movies. We will create a re-usable component that can individually fetch and render information about a movie from OMDB. The official [React documentation](https://facebook.github.io/react/docs/react-component.html#componentdidmount) tells developers that any network requests should be placed inside of the _componentDidMount_ method. Let's start building a component with this method defined.

> Do this in any of the projects you have - just be sure to import the file and render it there!

```js
import React, {Component} from 'react';

class Movie extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	/* nothing here... yet! */
  }

  render() {
    return (
    	<article>
    	</article>
    );
  }
}
```

We can now tell our component to fetch a movie and then set it to our state. We can then render an indivual movie. We do this by adding the `fetch()` call inside of _componentDidMount()_. Calling _setState_ then triggers a re-_render_ inside of our component.

```js
import React, {Component} from 'react';

class Movie extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	// fetch a movie
  	fetch('http://www.omdbapi.com/?t=Tron')
  		// then parse response to json
      .then(function(response) {
        return response.json()
      // then use that json
      }).then(function(json) {
        console.log('Parsed JSON', json);
        base.setState({ movie: json });
      // catch an error if one occurs
      }).catch(function(ex) {
        console.log('Parsing JSON failed', ex)
        alert('Error! ' + ex);
      });
  }

  render() {
  	 let title = this.state.movie.Title;
    return (
    	<article>
    		I really like {title}!
    	</article>
    );
  }
}
```
> Food for thought: Why are we using `let` for the title?

> Note: Do you see that `base.setState`? That's another way of setting state, versus declaring `movie` as a state in the constructor.


Finally, let's get a movie - any movie - and render it.

```js
import React, {Component} from 'react';

class Movie extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
	fetch('http://www.omdbapi.com/?t=' + this.props.movieSearchQuery)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('Parsed JSON', json)
        base.setState({ movie: json });
      }).catch(function(ex) {
        console.log('Parsing JSON failed', ex)
        alert('Error! ' + ex);
      });
  }

  render() {
  	 let title = this.state.movie.Title;
  	 let director = this.state.movie.Director;
    return (
    	<article>
    		I really like {title} by {director}!
    	</article>
    );
  }
}
```

Our component can now be re-used for any movie using the following syntax.

```jsx
<Movie movieSearchQuery="The Empire Strikes Back" />
```

When the `props.movieSearchQuery` of _The Empire Strikes Back_ is provided to our component, `fetch()` will then use it as part of the search query.

