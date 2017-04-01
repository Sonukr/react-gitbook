
## Components

The basic unit you'll be working with in ReactJS is a **component**. Components are pieces of our application that we can define once and reuse all over the place.

# VIDEO HERE: Components

<details>
  <summary>Using components is a pretty different way of approaching web development.</summary>

  > With components, there is more integration and less separation of HTML CSS and JS.

  > Instead, the pattern is to organize a web app into small, reusable components that encompass their own content, presentation and behavior.

</details>


In fact, with React the only thing you do is build components. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.


### Identifying Components

Take a look at CraigsList. Identify the visual "components" the website is comprised of. We suggest drawing this out on paper! So something like this...

![Component diagram](http://maketea.co.uk/images/2014-03-05-robust-web-apps-with-react-part-1/wireframe_deconstructed.png)

As you're drawing this out, think about the following questions...
* Where do you see "nested components"? Where do you not?
* Are there any components that share the same structure?
* Of these similar components, what is different about them?

### So -
What does a component look like? Let's start with a simple "Hello World" example...
