# Deploying a React App

> Before moving forward, it is _strongly_ suggested that you have a working knowledge of Git. Read the [Git basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics) guide or [try Git](https://try.github.io/levels/1/challenges/1) if you have **no experience** with Git before moving forward.

## Objectives

* Discover what Heroku is, why it is useful, and register an account
* Install the Heroku Command Line Interface & use it (a Platform as a Service) to deploy a React application
* Fine-tune your React application for the web


## Why are we learning Heroku?

We're using `create-react-app` to make our app, but that's local. Heroku's incredibly popular forWe can use Heroku to deploy a React application to the internet in under five minutes. Heroku also provides five free applications to every user.


## What is Heroku?

Heroku is a cloud platform that allows developers to quickly deploy applications to the internet. It is a cloud Platform as a Service (PaaS) that is used as a web application deployment service. Heroku, one of the first cloud platforms, has been in development since June 2007. It is currently owned by Salesforce. We can use Heroku to deploy a React application to the internet in under five minutes. Heroku also provides five free applications to every user.

Before we start diving in, you should register an account at [Heroku](https://heroku.com). You don't need to pay for anything unless you desire to. Once you register, confirm your account, and sign back in, you will be re-directed to the Heroku dashboard at [https://dashboard.heroku.com/apps](https://dashboard.heroku.com/apps). You can view all of your applications on the dashboard once they are deployed.


## Heroku Command Line Interface

Now, you need to download install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). You can download the installer from the provided link or `brew install heroku` from your terminal application. This tool is designed to make your life easier as a developer by integration Heroku application development and deployment directly into command line.

> _Note_: You may need to restart your terminal session - just in case - before moving forward. Why? Because you just installed software to modify your terminal's environment and your environment variables may not be updated yet.

Now, you should login to **Heroku** using the command line. Do so by typing in `heroku login`. You'll be prompted with the following questions followed by an authentication message:

```bash
Enter your Heroku credentials.
Email: adam@example.com
Password (typing will be hidden):
Authentication successful.
```

Now, use new `create-react-app` command in your terminal to create an app. Next, change directory -- `cd` -- into the directory.

```bash
create-react-app your_app_name_here
cd $your_app_name_here
```

Now, we'll need to initialize a Git repository inside of our React application. The Heroku CLI requires Git to handle versioning for deployment.

```
git init
```

Next, we'll create a heroku application using something called the *create-react-app-buildpack*.

```
heroku create your_app_name_here --buildpack https://github.com/mars/create-react-app-buildpack.git
```

You'll see Heroku output something similar to the following:

```
Creating app... done, ⬢ your_app_name_here
Setting buildpack to https://github.com/mars/create-react-app-buildpack.git... done
https://your_app_name_here.herokuapp.com/ | https://git.heroku.com/your_app_name_here.git
```

Now, we need to add all of the files and changes that we may have added. In theory, we'll have actually built an application. For our purposes, we are going to use what has been provided with `create-react-app`. We'll use git to add _all_ of the files and commit our changes.

```
git add -A
git commit -m "My first React app on Heroku! wow!"
```

Finally, we can push our app to the Heroku. By doing this, Heroku will put your app together on the internet.

```
git push heroku master
```

After seeing lots of command line wizardry happen before your eyes you should see Heroku print out a URL to the console. You could copy that URL to visit it or you can type in `heroku open`. Either way, you will be taken to your react application.

Congrats - you've now deployed your React app live! Good job.

## Deploying your Project Live

Now that you have seen how to deploy your application live, it is time for you to push your project live. Since you have created an application already using `create-react-app`, you can skip that step. Before pushing live, you'll need to make a few minor adjustments to make everything look great.

#### Routing clean URLs with React Router

By default, [React Router](https://github.com/reactjs/react-router) (not included) uses hash-based URLs like `https://example.com/index.html#/users/me/edit`. This is nice & easy when getting started with local development, but for a public app you probably want real URLs like `https://example.com/users/me/edit`.

Create a `static.json` file to configure the web server for clean [`browserHistory` URLs with React Router](https://github.com/mars/create-react-app-buildpack#routing-clean-urls):

```json
{
  "root": "build/",
  "clean_urls": false,
  "routes": {
    "/**": "index.html"
  }
}
```

#### Getting around CORS with Heroku Proxy

If you have connected to an API that has CORS enabled, you can proxy XHR requests from the React UI in the browser to API backends using Heroku. Prevent same-origin errors when [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) is not available on the backend.

Configure using [Proxy Backends from the static site buildpack](https://github.com/heroku/heroku-buildpack-static/blob/master/README.md#proxy-backends). Add `"proxies"` to `static.json`:

```json
{
  "proxies": {
    "/api/": {
      "origin": "${API_URL}"
    }
  }
}
```

Then, point the React UI app to a specific backend API using the CLI:

```bash
heroku config:set API_URL="https://api.example.com"
```

## Excersice

Deploy your most recent project live to Heroku. Do so by:

1. Initializing a Heroku app in your project's directory.
2. Use Git to add and commit your changes.
3. Push your changes to Heroku using `git push heroku master`.
4. View your project live online using `heroku open`.


## Further Considerations

* Companies like General Assembly using PaaS solutions to deploy quickly. In fact, GA uses Heroku for their web front end.
* Why might this be awesome? What advantages do you see to using PaaS vs building your own virtual servers?
* Who might you trust with all of your secret data, keys, and environment variables? Co-workers? Friends? Your grandma?

#### Documentation

- https://blog.heroku.com/deploying-react-with-zero-configuration#new-zero-configuration-experience
- https://github.com/facebookincubator/create-react-app
- https://github.com/mars/create-react-app-buildpack#quick-start
