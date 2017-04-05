
# Intro to React Router

## Objectives
* Review how websites use URLs to route content
* Review what it means for a website to be a Single Page Application
* Introduce React Routers main features: routing, components, history
* Use React Router to map URLs to components
* Use React Router to create links to different pages

It's great that HTML5 introduced new browser history mechanics to make it easier
for us developers to build Single Page Applications, and it's great for us to know about. However, on a great note - we're actually not going to
be using these new features directly ourselves! Instead, we'll use a tool called
**React Router** that bundles many concepts together and allows us to create our
own Single Page Applications extremely easily. Even though we won't use the
new history mechanics firsthand ourselves, it's still important to know that our
framework is taking care of that for us under the hood.

For an intro to our next topic, watch this video.

<iframe src="//fast.wistia.net/embed/iframe/tep72w77ir?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>

**React Router** is a third party library that makes it easy for us to route URLs - not to different pages, but by dynamically loading different components on the same page as the user navigates to different URLs. Once we
define how the URLs are routed to the components, **React Router** will
manage our Single Page App's browser history automatically.

Here's what React Router provides:

* **Routing:** easily define what content is associated with what URLs.
* **History:** automatically manage browser history when navigating between
  content.

React Router is actually a **third-party** library. Third Party just means it's
not built by React and not built by ourselves; it's been written by some
other "third-party" group of developers. Even though React Router is third-party
software, it's extremely useful, trustworthy, and popular - don't be afraid to use it. With more than 20,000 stars on Github, it’s safe to assume React Router is here to stay.

So let's use it!