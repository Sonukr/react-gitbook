# You Do: Implement the ES6 fetch API #

## Part 1:
Still using Fetch and OMDB, recreate the Netflix carousel with your 10 favorite movies.

- Add a `Carousel.js` for a new `Carousel` component to be used inside of your `Movie.js`.
- Put this in the "favorite movies" page in your blog project.
- Create a component that uses an input to search OMBD's API for a movie.
	- You will need an input element that listens to the eventOnChange method
	- When this event fires, take the `event.target.value` and `fetch()` from the OMDB api.
	- OMDBI can be searched using query strings - `http://www.omdbapi.com/?t=Star+Wars` and returns a JSON result.
- Each time you query the server, a new list item should be added to your component by updating the carousel.
- You will need to break down each movie into a component as well as a a component that is a container (list) of all of them.
### Hint:
- You'll be creating one new component and only importing it into `Movie.js`. Nothing else will change.

## Solution Image - Part 1

Your solution should look similar to the following:

![SOLUTION.png](../../projects/project-05-fetch/SOLUTION.png)


## Part 2: Build a Weather App

You'd like to show people what you can do, so to really impress them you're going to display the weather on your About page.

Use the [OpenWeather API](http://openweathermap.org/current) to fetch the weather from a certain zip code, and update the home page to reflect the current weather. [Documentation for the weather API](http://openweathermap.org/current)

## Requirements

- Ask the user to input the zip they would like to see the weather for. (Hint: use Prompt)

- Use `fetch()` to send a request the OpenWeather API.
NOTE: Because the OpenWeather API is not an open API, every request must end with '&appid=052f26926ae9784c2d677ca7bc5dec98' (i.e. http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98)

- Use the response to display the current temperature in Fahrenheit, the high and low temperate in Fahrenheit, the current weather "description", and the name of the city that came back from the API

## Hint:
- You'll only need to re-work the About component. Nothing else needs to change.

### Optional:

- Spend a little time styling the page. Here's some inspiration (Don't worry about the lens flare!)

![alt](http://i.imgur.com/sgO6SCw.png)

Read about the [fetch API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) for further reading.



## Check yourself!

> Once you have a solution:

You can check a sample <a href="solution-fetch.html" target="_blank" >solution here</a>.
