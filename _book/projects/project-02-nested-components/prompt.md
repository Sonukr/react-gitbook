# You Do: Add Nested Posts To Blog #

This is great so far - but our stegosaurus is actually outsourcing the blog, so each post has multiple authors. Let's set that up.

Your __Author__ component should render "Written by ", followed by a list of the authors.

The Post component will be receiving an __allAuthors__ prop, which is will pass in an __authorList__ to __Author__.

So overall, you will:
Amend your __Post__'s render method to include reference to a variable, __authors__, that is equal to the return value of generating multiple __<Author /__> elements. Make sure to pass in the __allAuthors__ body as an argument to each __Author__ component. Then render the __authors__ somewhere inside the UI for a __Post__.

Besides Stealthy Stegosaurus, the other two authors are Tiny Trex and Ivory Iguanadon.

> __NOTE:__ If you'd like, you can use __.map__ in __Post__'s __render__ method to avoid having to hard-code all your __Author__s. Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [here](http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/).

> __HINT I:__ If you're using __.map__, you should only have to return one __<MyPost />__ inside of __.map__.

> __HINT II:__ Remember that whenever you write vanilla Javascript inside of JSX, you need to surround it with single brackets (__{}__).


## Solution

Your solution should look as follows:

![Solution for Project](SOLUTION.png)
