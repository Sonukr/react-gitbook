## Single Page Apps Break Old History Mechanics!
Now here's the catch, and why we went into such detail about browser history
mechanics and defining what exactly Single Page Applications (SPAs) are - Single Page Applications break the initial design of Browser History Mechanics.

The **back** and **forward** actions were built specifically to go back and
forth between different pages. Since single page apps only change the content
of themselves without actually sending users to different web pages the notion
of **back** and **forward** is lost.

When users press the **back** button in a Single Page Application they go back
off the one page, completely out of the Single Page Application.

Imagine being on Wikipedia, going to Gmail, going through several views of
different email inboxes, search results and then pressing the back button.

* Go to wikipedia.org
* Type in www.gmail.com (or whichever) to check your email
* Click on one email
* Search your email for something
* Open that email
* Click 'back' in your browser to go back to the search results
* Wait - you end up back at wikipedia.org

Gmail and most mail apps are a Single Page Applications - despite the content changing, you are always on gmail.com. Because of this, pressing the back button will take the user back to the previous URL they were on - in this case, Wikipedia - when really, the user just wanted to go back
to their email search results.

## Introducing Modern Browser History Mechanics
So - developers need to have their fast loading web applications, but somehow still have the 'back' button work.

Web Developers, browser vendors, and users (even if they don't know it) all love Single Page Applications; they're a great experience that the community is embracing. To facilitate these and still have things like the 'back' button work, a few years ago, people got together in committees and devised a way to upgrade the old
browser history mechanics to accommodate modern SPAs.

The modern HTML5 specification (published October 2014) introduced new browser
history mechanics to make Single Page Applications easier to browse 'back' and
'forward', even through they actually stay on the same page.

** How? **

HTML5 introduced `.pushState` and `.replaceState` functions that allow web pages
to save custom history data to the browser. Applications like Gmail can use
these functions to manually save custom browser history. For example, Gmail can use `.pushState` to put in the browser history that a user is on their search results page, so if they go into an email and click 'back', they get back to the search page - instead of off gmail.com completely.


A bit more technically, when someone goes from
their inbox to a specific email, Gmail can use `.pushState` to save in the browser information
about what the user is currently doing in the application. Now when the user
presses the 'back' button, the browser gives the saved information back to
Gmail and Gmail brings back the content the user was last looking at.



# Recap
Here's a summary of what we've learned so far for routing:

### Single Page Applications and Browser History Mechanics
* Single Page Applications are websites that serve only one web page, then
  change the content of that page dynamically, without refreshing.
* Old browser history mechanics support **back** and **forward** operations that
  traditionally keep track of history as users move between different pages.
* Since modern Single Page Applications keep the user on one page without
  refreshing old browser history **back** and **forward** mechanics don't work
  well with modern applications - so HTML5 changed the rules of how 'back' and 'forward' can work.
