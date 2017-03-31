
## `const` and `let`

`const` and `let` are new keywords for declaring variables. Where before you would have declared

```javascript
var x = 1;
```

You can now declare

```javascript
const x = 1;
```

or

```javascript
let x = 1;
```

`const` is short for "constant", which means a `const`'s assignment can't change. This does _not_, however, mean that a `const` is immutable. JavaScript assigns by reference. This means that if you change a property of an object, or add an item to an array, its reference, and therefore its assignment don't change. If I assign an object literal as a `const` variable like this:

```javascript
const anObject = {
  hi: 'hello',
};
```

I can then add a key to it, mutating its value:

```javascript
anObject.newKey = 'some value';
```

The new value of `anObject` is now:

```javascript
{
  hi: 'hello',
  newKey: 'some value',
}
```

This is valid, because `anObject`'s reference doesn't change.

However, if I assign a `const` to a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) type (a string, number, or boolean, for example), I can't change its value at all.

```javascript
const hi = 'hello';
hi = 'goodbye';
```

The code above will throw an error, because I attempted to change the reference to a const.

[This CodePen](https://codepen.io/andrewdushane/pen/jBYzbm) illustrates this. Click the little red exclamation point to see the error.

That is what `let` is for. The value and reference of a `let` variable can change, so this will run with no errors:

```javascript
let hi = 'hello';
hi = 'goodbye';
```

Open the console (at the bottom of the window) in [This CodePen](https://codepen.io/andrewdushane/pen/mWpxVy) and you'll see that the JavaScript runs, and "goodbye" is logged to the console *(to view the console, click the 'console' tab at the bottom)*.

When declaring variables using ES6 syntax, if you need to declare a variable whose value will _not_ change, declare it as a `const`. If the variable's value _will_ or _might_ change, declare it as a `let`.

`let`, like `var`, can be reassigned as much as you like. Why use `let` at all, then, when you could just use `var`? Since `var` in javascript is scoped to the nearest parent function, using `let` is more predictable and straightforward.
Here's an example of the difference between how `let` and `var` are scoped from MDN:

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

You can see this in action in [This CodePen](https://codepen.io/andrewdushane/pen/oZpqxO) - open the console to see the difference.

With more predictable scope, `let` variables are easier to keep track of visually than `var`s, and less likely to introduce bugs to your code.

### Exercise:

Here's a tricky one. Look at your blog project - the index.js file. You have:

```js
var post = {
  title: "Dinosaurs are awesome",
  authors: [
    "Stealthy Stegosaurus",
    "Tiny trex",
    "Iguanadon Ivory"
  ],
  body: "Check out this body property!",
  comments: [
    "First!",
    "Great post!",
    "Hire him!"
]
}

ReactDOM.render(
  <Post
    title={post.title}
    allAuthors={post.authors}
    body={post.body}
    comments={post.comments}
  />,
  document.getElementById('root')
);

```

Should that `post` variable be a `let` or a `const`?

<details>
 <summary>Did you think about it? Do you have an idea? Then the answer is...</summary>
 The answer is `let` because while we aren't changing the value here, we wouldn't mind if someone did change it.
</details>
