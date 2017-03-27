## Imperative and Declarative Programming

Imperative and declarative programming are two words that you have likely encountered as someone who writes code for a living. Most developers begin by writing _imperative_ code. That is to say, most developers outline what they need to do and write it out step by step. If you've ever been asked to write pseudo code before actually writing code then you are familiar with writing out things _step by step_. For example, if we were to ask everyone in the room to say there name we could conceptually write it out as follows:

```
ask everyone in the room to line up
for every person in the line
  ask each person to come to the front of the room
  ask each person to then speak their name
```

Naturally, we could write that out in Javascript by creating a line array. We can then ask each person to line up in that array.

```js
let queue = ['omily', 'lichard', 'kathew', 'cecelious'];
```

Next, we would loop through them and ask them to come to the front of the room by assigning them to a variable named _person_. Finally, we have them speak their name - or in our case, we'll just _console.log()_ their name out as represented by the _person_ variable.

```js
for (let i = 0; i < queue.length; i++) {
  let person = queue[i];
  console.log(person);
}
```

At some point in your career you've like had to do something similar to this. If so, you have taken the **imperative** approach to programming. You have explicitly listed out each step, paying attention to each and every detail of what you need to achieve. Imperative programming focuses on the _why_, _how_, _where_, and _when_ your code executes. It allows precise control over your code and allows for line-by-line code execution. Now, let's break from this approach for just a moment. We'll start with our queue of people again.

```js
let queue = ['omily', 'lichard', 'kathew', 'cecelious'];
```

Now, if we want to perform the same action that we performed before in an **declarative** manner, we could write our loop like so:

```js
queue.forEach((person) => {
  console.log(person);
});
```

You've likely seen the `.forEach()` method and perhaps even used it before. If not, it is a _built-in_ Array method in Javascript that allows you to iterate over the collection the same way that you could loop through them on your own. This approach requires a little bit less code and is more concerned about _what_ you want and nothing else. Instead of taking the time to write out a specific set of instructions to receive a result you focus on just one thing: the result. This might sound a little confusing at first, so open up your console and try solving the following problem.

#### Practice: Applying a Discount to Items in a Shopping Cart

You notice that your favourite series is on sale this month on Chapters or Amazon. You've been holding off for whatever reason but today is the day. You're going to pick it up and treat yourself. After filling your shopping cart up, you peruse the internet for a discount coupon and found one! You furiously enter in `TREATYOSELF2017` into your cart's coupon code input box and instantaneously your cart reflects the discounted prices. An **imperative** approach would look like the following:

```js
// oh boy! zelda! TREAT MYSELF! on sale too!
let items = [
  {
    title: 'Breath of the Wild',
    price: 49.99
  },
  {
    title: 'The Minish Cap',
    price: 29.99
  },
  {
    title: 'Twilight Princess',
    price: 49.99
  }
];

// calculate the discount of 50% off
let discountedItems = [];
// loop on through
for (let i = 0; i < items.length; i++) {
  // create a new item, update the sale price thanks to the coupon, and push into the discountedItems array
  discountedItems.push({
    title: items[i]['title'], // keep the title
    price: items[i]['price'] * 0.5  // update the price
  });
}
```

The imperative approach to writing code gives us full control of _how_ we add the updated price into the new array. In this case, we push a newly created Object into the array and update the values inside of the object. We access attributes directly through indices that represent _which_ Object and _what_ attribute we want to select. _When_ we create the Object, we set the initial attributes. This is fairly clean code but we could write more succinct code using a **declarative** style. We'll use the Array's built-in method `.map` to accomplish the same thing. We'll focus on _what_ we want - just the updated values. 

```js
let discountedItems = items.map((item) => {
  return {
    title: item.title,
    price: item.price * 0.5
  }
});
```

Using the declarative approach, we declare that we intend to .map through an array and create a newly updated version of it. _But what if that method breaks?_ you might be thinking? While a problem, you know exactly what is broken - the `.map` method (or more likely your syntax is incorrect). This allows for easy debugging and testing. Consider how you would debug the imperative version of the code instead. How would your approach differ?

#### Wrapping It Up

Declarative and imperative are two different styles of writing code. Imperative is commonly found in object-oriented programming environment where you focus on a line-by-line execution path working with objects. With the focus on simplicity in modern web development, some developers have been leveraging declarative techniques. React.js is one framework that uses a declarative approach; Vue.js is another. You'll find that many asynchronous Javascript techniques rely on declarative programming techniques for ease of readability. While neither way is incorrect, declarative code tends to lead to DRY, clean code. As a final fun fact - functional programming is a subset of declarative programming. If you've ever used a functional language such as Haskell or Lisp or written calculus you've likely written declarative code.
