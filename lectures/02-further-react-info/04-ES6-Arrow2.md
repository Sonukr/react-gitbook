
### Implicit return

Continuing a thought, the last thing we noted is that if the function does nothing except a return, we can simplify it even further:

```javascript
const addTwo = num => num + 2;
```
> We dropped the brackets and `return` keyword.

If there is no block following the arguments of an arrow function (meaning nothing in `{ }` brackets), whatever follows is the return value of the function. The `addTwo` example above simply returns the value of `num + 2`. This is called an **implicit return**.

So we can write the arrow function for anything -
```javascript
const addTwo = num => {
  return num + 2;
}
```

as well as

```javascript
const mutateNumbers = num => {
  newNum = 6;
  alert(newNum);
  return num + newNum;
}
```

But we can only use implicit return for the first function, `addTwo`. Because `mutateNumbers` has more than just a return statement in it, we still need the brackets.

So `addTwo` can be simplified to one line, but `mutateNumbers` cannot be.

```javascript
const addTwo = num => num + 2;
```


Using implicit returns can shorten our syntax and make it more readable. The following function `lowercaseListOfWords` takes one argument, an array of strings, and returns a new array of lowercase strings.

Written with functions, this would look something like:

```javascript
function lowercaseListOfWords(arrayToModify) {
  return arrayToModify.map(function(word) {
    return word.toLocaleLowerCase();
  });
}
```

However, using ES6, the arrow function, and implicit returns, we can make that one (albeit long!) line:

```javascript
const lowercaseListOfWords = arrayToModify => arrayToModify.map(word => word.toLocaleLowerCase());
```

**Importantly**, one gotcha to be aware of with implicit returns is that object literals must be wrapped in parentheses, so the interpreter (browser, compiler, etc.) can distinguish them from blocks. An example:

```javascript
const isItActive = isActive => ({ active: isActive });
```

> Even though this function only returns one thing, because this function implicitly returns an object literal, it must be wrapped in parentheses.

Play around with implicit returns from arrow functions [in this CodePen](https://codepen.io/andrewdushane/pen/XMVENB).

### This binding - and the lack thereof

So - now that we've learned all the fun syntactic sugar of the arrow function, let's talk about the benefit of using it in execution context.

In non-arrow functions, every function defines its own `this`. There are tons of hacks to preserve the context, like `var that = this` and using `.bind(this)`. This might look familiar:

```javascript
function eatBreakfast(pancakes) {
  var that = this;
  that.food = 'Knife please?';
  Waiter
  .bringCutlery(function (silverware) {
    that.food = silverware;
  });
}
```

Another popular variant is `var self = this`. However you like to do it, you don't need to do it anymore!

Arrow functions don't change the definition of `this`. So, if `this` is already defined in the scope, and you call an arrow function, you can access `this` directly.

The equivalent arrow function:

```javascript
const eatBreakfast = pancakes => {
  this.food = 'Knife please?';
  Waiter
  .bringCutlery((silverware) => this.food = silverware);
}
```
> Check it out - the arrow function can be anywhere you declare a function!
