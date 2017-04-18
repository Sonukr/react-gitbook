# Exercise!

We've just learned a bunch of ES6.

We've learned:

### Use `const` and `let` instead of `var`
Remember, When declaring variables using ES6 syntax, if you need to declare a variable whose value will _not_ change, declare it as a `const`. If the variable's value _will_ or _might_ change, unless you need a global scope, you'll likely declare it as a `let`.

### Use the arrow function `=>` to declare a function
```js
const addTwo = num => {
 return num + 2;
}
```


### Use the arrow function `=>` with implicit returns to declare a function that only returns something
```js
const addTwo = num => num + 2;
```


### Use the arrow function `=>` preserves the original `this` context
```js
var that = this;
that.food = 'Knife please?';
```
 
 is now
 
```js
this.food = 'Knife please?';
```


### User literals for assigning a variable as the value of the key of the same name
The second piece of code is synonymous with the first piece of code. The second
piece of code saves you from writing `price: price` when you're declaring an
object key-value pair inside an object.
 
 ```js
 const price = 100;
 const item = {price: price};
 ```
 
 ```js
 const price = 100;
 const item = {price,};
 ```


 ### Use template literals for string interpolation
 Remember, these require you to use the `tick` `\`` quotation mark. The single
 quote or double-quote marks won't invoke string interpolation.
 
 ```js
 const greeting = name => `Hi, ${name}.`;
 ```

## Let's put this together.

Look at [this codepen](https://codepen.io/susir/pen/yMWvWm). Try to modify it to ES6 syntax.

When you think you have it, look at the codepen solution [here](https://codepen.io/susir/pen/OpYvqK).
