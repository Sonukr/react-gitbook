
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

### Const

`const` is short for "constant". It very easily means, "declaring a variable that will be constant." So, a `const` can't be reassigned. if I assign a `const` to a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) type (a string, number, or boolean, for example), I can't change its value at all.

```javascript
const hi = 'hello';
hi = 'goodbye';
```

The code above **will throw an error**, because I attempted to change the reference to a const.

> [This CodePen](https://codepen.io/andrewdushane/pen/jBYzbm) illustrates this. Click the little red exclamation point to see the error.

If possible, try to use `const` whenever you can to maintain predictability.

##### But!

Just to make it a little trickier, this does _not_, however, mean that a `const` is immutable. JavaScript assigns by reference. This means that a variable can't be reassigned entirely, but we *can* change a property of an object or add an item to an array. If I assign an object literal as a `const` variable like this:

```javascript
const anObject = {
  hi: 'hello',
  animal: `muffin`
};
```

I can then change a key in it, mutating its value:

```javascript
anObject.animal = 'puppy';
```

The new value of `anObject` is now:

```javascript
{
  hi: 'hello',
  animal: 'puppy'
}
```

This is valid, because `anObject`'s reference doesn't change. I just can't wipe the whole variable.


### Let


So, that's `const`. The other replacement for `var` is `let`.

`let` has the same normal assignment rules as `var`. The value and reference of a `let` variable can change, so this will run with no errors:

```javascript
let hi = 'hello';
hi = 'goodbye';
```

Open the console (at the bottom of the window) in [This CodePen](https://codepen.io/andrewdushane/pen/mWpxVy) and you'll see that the JavaScript runs, and "goodbye" is logged to the console *(to view the console, click the 'console' tab at the bottom)*.

When declaring variables using ES6 syntax, if you need to declare a variable whose value will _not_ change, declare it as a `const`. If the variable's value _will_ or _might_ change, declare it as a `let`.

`let`, like `var`, can be reassigned as much as you like. Why use `let` at all, then, when you could just use `var`?

##### `Let` is actually about scoping
Variables in JavaScript are 'scoped' - or the same within - either globally or within an entire function. Since `var` in javascript is scoped to the nearest parent function, it can be pretty unpredictable, right?

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // Prints 2
  }
  console.log(x);  // This is going to print 2!
}
```

Despite declaring `var x` in two different places, it's the same variable, leading to some unwanted and unexpected behavior. Scoping is something that always needs to be tracked in JavaScript for precisely reasons like this.

ES6 introduced `let` to fix this scoping issue. Using `let` is more predictable and straightforward. `let` is a block scoped variable, so its value is scoped to the nearest curly braces {} rather than the whole function. Thus, within a loop, `let` will create a new instance for each iteration - instead of changing the original variable.

```js
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // curly braces = different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

You can see this in action in [This CodePen](https://codepen.io/andrewdushane/pen/oZpqxO) - open the console to see the difference.

Here's another example. Using regular `var`, this always prints 5.

```js
var array = [];
for(var i=0; i<5; i++) {
    array.push({onclick: function() { console.log('array: ', i); }});
}

array[0].onclick(); // array: 5
array[1].onclick(); // array: 5
```

However, if we use `let`, we can give each variable in that for loop its own scope.

```js
var array = [];
for(let i=0;i<5;i++) {
    array.push({onclick: function() { console.log('array: ', i); }});
}

array[0].onclick(); // array: 0
array[1].onclick(); // array: 1
```

With more predictable scope, `let` variables are easier to keep track of visually than `var`s, and less likely to introduce bugs to your code.

### Thought Exercise:

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
  <p><code>const</code> We want to show one post which will be displayed
  constantly. The one post should never change.</p>

  <p>Now, the comments might change. People should be able to add or remove
  their own comments. Remember that <code>const</code> only refers to what the
  variable <code>post</code> references. We're still allowed to modify the
  values inside of the object.</p>

  <p>Using <code>const</code> will guarantee that the <code>post</code> object
  is never swapped out for an entirely other blog post object. Using
  <code>const</code> will still allow us to modify the values of the
  <code>title</code> <code>authors</code> <code>body</code> and
  <code>comments</code> inside the constant object.</p>
</details>
