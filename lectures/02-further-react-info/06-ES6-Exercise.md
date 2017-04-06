## Exercise!

We've just learned a bunch of ES6.

We've learned:

* <details>
 <summary>`const` and `let` instead of `var`</summary>
Remember, When declaring variables using ES6 syntax, if you need to declare a variable whose value will _not_ change, declare it as a `const`. If the variable's value _will_ or _might_ change, unless you need a global scope, you'll likely declare it as a `let`.
</details>


* <details>
 <summary>the arrow function `=>` to declare a function</summary>
 ```
 const addTwo = num => {
   return num + 2;
 }
 ```
</details>


* <details>
 <summary>the arrow function `=>` with implicit returns to declare a function that only returns something</summary>
 ```
const addTwo = num => num + 2;
 ```
</details>


* <details>
 <summary>the arrow function `=>` preserves the original `this` context</summary>
 ```
 var that = this;
 that.food = 'Knife please?';
 ```
 is now
 ```
this.food = 'Knife please?';
 ```
</details>


* <details>
 <summary>Literals for assigning a variable as the value of the key of the same name</summary>
 ```
 const price = 100;

 const item = {price,};
 ```
</details>


* <details>
 <summary>Template literals for string interpolation</summary>
 ```
 const greeting = name => `Hi, ${name}.`;
 ```
</details>

### Let's put this together.

Look at [this codepen](https://codepen.io/susir/pen/yMWvWm). Try to modify it to ES6 syntax.

When you think you have it, look at the codepen solution [here](https://codepen.io/susir/pen/OpYvqK).
