## CHANGELOG

Movie.js
```js
/**
 * Created by codeforcoffee on 3/14/17.
 */
import React from 'react';
import Carousel from './Carousel.js';

const Movie = () => (
  <div>
    <Carousel />
    <h2>The BEST movie</h2>
    <p>The Empire Strikes Back</p>
  </div>
)

export default Movie;
```

Carousel.js
```js
/**
 * Created by codeforcoffee on 3/14/17.
 */
import React, {Component} from 'react';

function ListItem(props) {
  return <li>{props.value}</li>;
}

function MoviesList(props) {
  const movies = props.movies;
  const moviesListItems = movies.map((movie) =>
    <ListItem key={movie.toString()}
              value={movie}
    />
  );
  return (
    <ul>
      {moviesListItems}
    </ul>
  );
}

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      moviesList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchQuery: event.target.value});
    console.log('Your search query is' + this.state.searchQuery);
  }

  handleSubmit(event) {

    let base = this;

    console.log('You are adding the following movie: ' + this.state.searchQuery);

    fetch('http://www.omdbapi.com/?t=' + this.state.searchQuery)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('Parsed JSON', json)
        let moviesList = base.state.moviesList;
        moviesList.push(json.Title + " directed by " + json.Director);
        base.setState({ moviesList: moviesList });
      }).catch(function(ex) {
        console.log('Parsing JSON failed', ex)
        alert('Error! ' + ex);
      });

    event.preventDefault();
  }

  render() {

    let movieListItems = (
      <MoviesList movies={this.state.moviesList} />
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {movieListItems}
        </ul>

        <label>
          Name:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add Movie!" />
      </form>
    );
  }
}

export default Carousel;
```