---
title: Introduction to Fetch
type: lesson
duration: "0:15"
creator:
    name: James Traver
    company: Gogo
    city: Chicago
competencies: ES6, Fetch, React
---


# Introduction to fetch()

## Learning Objectives

- Describe what an API is and why we might use one.
- Explain the common role of JSON on the web.
- Introduce the native ES6 `fetch()` method to make GET requests for data.
- Render a React component using data loaded from a `fetch()` request.

## What is an API?

**What is an API?**

> Basically, an API is a service that provides raw data for public use.

API stands for "Application Program Interface" and technically applies to all of software design. The DOM and jQuery are actually examples of APIs! Since the explosion of information technology, however, the term now commonly refers to web URLs that can be accessed for raw data.

APIs publish data for public use. As third-party software developers, we can access an organization's API and use their data within our own applications.

<details>
  <summary><strong>Q: Why do we care?</strong></summary>

  > Why recreate data when we don't have to? Think about past projects or ideas that would be easier if you could pull in data already gathered elsewhere.

  > APIs can provide us with data that would we would otherwise not be able to create ourselves.

</details>

As we move into building single page applications, now is the perfect time to start understanding how to obtain data on the client side and then render it on the browser.

## API Exploration

There are a variety of APIs available on the internet. Here are just a few examples of APIs that you can use. Below are requests that you could make with the `fetch()` command (or any other form of `XMLHttpRequest`) and see value. Check them out.

| API | Sample URL |
|-----|------------|
| **[This for That](http://itsthisforthat.com/)** | http://itsthisforthat.com/api.php?json |
| **[Giphy](https://github.com/Giphy/GiphyAPI)** | http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC |
| **[OMDB API](http://www.omdbapi.com/)** | http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1 |
| **[StarWars](http://swapi.co/)** | http://swapi.co/api/people/3 |
| **[Stocks](http://dev.markitondemand.com/MODApis/)** | http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL |
| **[Pokemon](http://pokeapi.co/)** | http://pokeapi.co/api/pokemon/4 |



> Does the JSON look unreadable in the browser? If you're using Chrome, install the [JSON View plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en).

### Why Just Data?

Sometimes thats's all we need. All this information, from all these browsers and all these servers, has to travel through the network. That's almost certainly the slowest part of the request cycle. We want to minimize the bits. There are times when we just need the data. For those times, we want a concise format.   

All data sent via HTTP are strings. Unfortunately, what we really want to pass between web applications is **structured data** (i.e., arrays and hashes). Thus, native data structures can be **serialized** into a string representation of the data. This string can be transmitted and then parsed back into data by another web agent.  

There are **two** major serialized data formats that you will typically encounter: _JSON_ and _XML_.

#### JSON

**JSON** stands for "JavaScript Object Notation" and has become a universal standard for serializing native data structures for transmission. It is light-weight, easy to read and quick to parse.

```json
{
  "users": [
    {"name": "Omily", "id": 0},
    {"name": "Lichard", "id": 1},
    {"name": "Kathew", "id": 2}
  ]
}
```
> Remember, JSON is a serialized format. While it may look like an object, it needs to be parsed so we can interact with it as a true Javascript object.

#### XML

**XML** stands for "eXtensible Markup Language" and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly and cumbersome to parse. It remains a major format, however, due to its legacy usage across the web. You'll probably always favor using a JSON API, if available.

```
<users>
  <user id="0">
    <name><![CDATA[Omily]]></name>
  </user>
  <user id="1">
    <name><![CDATA[Lichard]]></name>
  </user>
</users>
```

> Many APIs publish data in multiple formats, for example:

* [http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL)
* [http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL)

APIs are published everywhere. Chances are good that most major content sources you follow online publish their data in some type of serialized format. Heck, [even Marvel publishes an API](http://developer.marvel.com/documentation/getting_started). Look around for a "Developers" section on major websites. Or, if you'd like a cheat sheet you can try the [Programmable Web API Directory](http://www.programmableweb.com/apis/directory) or the [Public APIs Directory](http://www.publicapis.com/).

While the majority of APIs are free to use, many of them require an API "key" that identifies the developer requesting data access. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

> Try hitting the [Giphy](https://api.giphy.com/) API...

* No key: [http://api.giphy.com/v1/gifs/search?q=funny+cat](http://api.giphy.com/v1/gifs/search?q=funny+cat)

* With key: [http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC)

> It is very important that you not push your API keys to a public Github repo.**

> This is especially true when working with [Amazon Web Services (AWS)](https://aws.amazon.com/). Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).

## Introducing `fetch()`

So we know what an API is. Now what?

How can we use an API to dynamically manipulate the DOM with the given data? We can use `fetch()`. In then past, these have been called **AJAX** requests. As you'll come to learn, this allows us to build single page applications that do not require refreshes.

**AJAX**, which stands for "Asynchronous Javascript and XML," is the method through which we are able to make HTTP **requests**. The standard requests we will be making are `GET` `POST` `PUT` `PATCH` and `DELETE`.  

| Type of Request | What's It Do? |
|-----------------|---------------|
| `GET`  | Read |
| `POST` | Create |
| `PUT` | Update |
| `PATCH` | Update | 
| `DELETE` | Delete | 

![http_crud_restful_api.png](http_crud_restful_api.png)

Each request contains a message _header_ and _body_. The browser packages this together using `fetch()` and sends it off to a server. The server then listens to your request and provides a **response**. It looks something like this:

![Request/Response](http_request_response.jpeg)

A detailed version of what a request would look like:

![Request/Response](http_request_response.png)

When you browse to your favourite websites, your browser is making a request and the server provides a response. `fetch()` allows us to perform the same type of requests over a network. Imagine fetching weather information and rendering it on your website. Perhaps you want to create a real-life Pokedex? You can use `fetch()` to build these applications.

#### Taking a look at fetch in action

Enough talk - it is time to take a look at `fetch()` in action. Imagine we want to `fetch()` a randomly generated poem from Shakespeare. Good thing that there is an API for that, right? This API provides us with the ability get a poem using the following URL:

```
http://ShakeItSpeare.com/api/poem	
```

We're then provided a response that looks like the following:

```json
{
	poem: "Fear is the mind-killer.
			Fear is the little-death that brings total obliteration.
			I will face my fear.
			I will permit it to pass over me and through me.
			And when it has gone past I will turn the inner eye to see its path.
			Where the fear has gone there will be nothing.
			Only I will remain.",
	markov: 2,
	lines: 7
}
```

Okay, so that isn't a poem that the API would provide but it is an example of the JSON that you will get from that endpoint.

We can fetch this JSON easily using Javascript. We have provided a legacy example as well as a modern ES6 example as well to compare.

_ES5 Syntax_

```js
var poemApi = 'http://ShakeItSpeare.com/api/poem';
fetch(poemApi)
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('JSON from Shakeitspeare.com', json)
  }).catch(function(ex) {
    console.log('An error occured while parsing!', ex)
  });
```

_ES6 Syntax_

```js
let poemApi = 'http://ShakeItSpeare.com/api/poem';
fetch(poemApi)
  .then((response) => {
    return response.json()
  }).then((json) => {
    console.log('JSON from Shakeitspeare.com', json)
  }).catch((ex) => {
    console.log('An error occured while parsing!', ex)
  });
```  

Let's break this API call down into a few steps.

1. First, we define our API URL to fetch from and `fetch()` from that API URL.
2. _Then_ we take the response when the server provides it. We return the `response.json()`
3. _Then_ we take that `json` and `console.log` it.
4. If an error occurs, we catch it and log it.

That's as simple as fetch is. While there are other ways to handle the response (such as `html` or `blob`), this approach makes writing requests to APIs and other network calls in Javascript easy.

> *Production Warning!* It is important to note that while this is an ES6 standard, [some browsers such as Internet Explorer](http://caniuse.com/#search=fetch) do not support; yet Edge does. You may need a polyfill for live projects. If you need a polyfill for a production project, [Github's polyfill is very popular](https://github.com/github/fetch).

## Quiz!

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
<Movie movieSearchQuery="The Empire Strikes Back />
```

When the `props.movieSearchQuery` of _The Empire Strikes Back_ is provided to our component, `fetch()` will then use it as part of the search query.

#### Your turn: Build a Weather App

Use the [OpenWeather API](http://openweathermap.org/current) to fetch the weather from a certain zip code, and update the page to reflect the current weather. [Documentation](http://openweathermap.org/current)

### Requirements

- Ask the user to input the zip they would like to see the weather for. (Hint: use Prompt)

- Use `fetch()` to send a request the OpenWeather API.
NOTE: Because the OpenWeather API is not an open API, every request must end with '&appid=052f26926ae9784c2d677ca7bc5dec98' (i.e. http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98)

- Use the response to display the current temperature in fahrenheit, the high and low temperate in fahrenheit, the current weather "description", and the name of the city that came back from the API

- Spend a little time styling the app. Here's some inspiration (Don't worry about the lens flare!) 

![alt](http://i.imgur.com/sgO6SCw.png)

Read about the [fetch API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) for further reading.
