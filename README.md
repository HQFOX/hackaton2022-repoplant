## Setup for React and TypeScript with Hitachi Vantara UI Kit

- [Goal](#goal)
- [No Lock-In](#no-lock-in)
- [Use Case](#use-case)
- [What’s Included?](#whats-included)
- [Getting Started](#getting-started)
- [Structure](#structure)
    - [Folders](#folders)
- [State Management](#state-management)
  - [Redux](#redux)
    - [When should you use Redux?](#when-should-you-use-redux)
  - [ContextAPI](#contextapi)
- [Data](#data)
- [Typescript](#typescript)
- [What’s missing?](#whats-missing)
- [References](#references)

# Goal

To provide a modern workflow environment and an example application that implements **[UI Kit](https://github.com/pentaho/hv-uikit-react) patterns** and **code strategies** in order to guide and speed up your development.

We chose [Create React App](https://create-react-app.dev/) as a foundation for our application because the setup process is not the main focus of this project and it makes us free from the burden of having to manage all the intricacies of that process:

- You don't have to spend hours setting up a new project!
- You get free upgrades as the tool gets better, just by updating one dependency.
- Under the hood, it uses webpack, Babel, ESLint, and other coll projects. If you ever want an advanced configuration, you can ”eject” from Create React App and edit their config files directly.

# No Lock-In

We don´t want to lock any project to our structure and chosen libraries, but instead offer a fair baseline and help to climb the learning curve of all idiosyncrasies of the technology stack we are in.  
If your project has different requirements you can opt for one of the many existing alternatives.

Today [Next.js](https://nextjs.org/) and [GatsbyJS](https://www.gatsbyjs.com/) are two of the most popular Create React App alternatives, being more focused in improving **SEO performance**, **Server-side rendering (SSR)** and **Static site generatorion (SSG)**.

# Use Case

To better showcase all the architectural use-cases, we built the application around the Star Wars Ecosystem.  

We have two main pages listing Characters and Starships and then specific Details pages for each entity. We picked a free/public API -[Swapi](https://swapi.dev/) - as a data source for the data from the Star Wars universe!  

This enables our capacity to have a good variety of utilizations of uikit components and exercise its integration with the API layer.

# What’s Included?

- [HV UIKit](https://github.com/pentaho/hv-uikit-react) setup and integration
- React, TSX, and ES6 syntax support.
- Language extras beyond ES6 like the object spread operator.
- TypeScript syntax support.
- REST and GraphQL integration with https://swapi.dev/
  - for REST we use https://swr.vercel.app/
  - for GraphQL we use https://www.apollographql.com/
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle TS, CSS, and images for production, with hashes and sourcemaps.
- Dynamic Routing with [react-router](https://github.com/ReactTraining/react-router).
- Dynamic loading & with [react-loadable](https://github.com/jamiebuilds/react-loadable).
- Internationalization with [react-i18next](https://github.com/i18next/react-i18next).
- [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to promote code consistency.

# Getting Started

`npm install`

Install dependencies.

`npm start`

Runs the app in dev mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

`npm test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

`npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

`npm run lint`

Statically analyzes the code and reports the problems found.

`npm run format`

Runs prettier on all files and formats the code accordingly.

# Structure

React doesn’t have opinions on how you put files into folders.

What follows are some patterns and strategies we try to promote in order to provide some guidance and consistency across Hitachi Vantara React applications.

We followed a structure that is scalable and modular enough for an Enterprise application, but still easy to understand.

The code is grouped by feature/ domain, "colocating" all related files (styles, TS and tests) together inside the same feature folder. This way we try to avoid too much nesting as it becomes harder to write relative imports between them, or to update those imports when the files are moved.

```text
pages/
  Login/
    index.js
    Login.tsx
    styles.tsx
    tests/
...
```

### Folders

- `build` - is the location of the final, production-ready build. This directory won’t exist until you run `npm run build`. The contents of this folder should be ready-to-ship without any interaction on your part.
- `node_modules`- packages installed by NPM.
- `public` - static files. Files in the public directory will maintain the same file name in production, which typically means that they will be cached.
- `src` - dynamic files. If the file is imported by the application or changes contents, put it here.
  - `index.tsx` - is the entry point of our app.
  - `App.tsx` - is our top-level component. Here we configure all the providers needed: `Application Providers`, like `uikit Provider`, `Data Providers`, `Router`.
  - `assets` - all dependencies shared by the application. This provides a single location for storing files that could be seen as external to the project itself.
  - `components` - components are grouped by pages. Each top folder holds all the components that are common to a specific view.
    - `pages/Login -> components/login/LoginForm`
  - `lib` - code that is used/ shared globally. It helps to keep the code DRY by exporting repeated logic to a singular location and importing it where used.
  - `pages` - components that are tightly couple with routes. Each view should map the corresponding route. It also should be simple and free from logic that transforms data, focused on implementing the layout using the [UIKit grid system](https://pentaho.github.io/hv-uikit-react/?path=/story/layout--grid).
    - `route/login -> pages/Login/`
- `typings` - feature/ domain custom type definitions, as also global definitions for untyped NPM modules.

# State Management

Most applications are built with a way for components to internally manage their state without any need for an external library or tool, but it gets messy as the application gets more complex.

At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state.

There are several strategies for preventing this. Two of the most common ones (without disregarding the other solutions around like MobX) are Redux and ContextAPI.

## Redux

### When should you use Redux?

> Don't use Redux until you have problems with vanilla React.
>
> -- <cite>Dan Abramov</cite>

You should use Redux when you have reasonable amounts of data changing over time, and you find that approaches like keeping everything in a top-level React component's state are no longer sufficient.

With Redux there’s a central store that holds the entire state of the application and each component can access the state. Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen.

Benefits of using Redux: **Predictable**, **Maintainability** and **Persistence**

## ContextAPI

ContextAPI is a different solution, bundled within React itself, and offers a solution where there is not a single source of information, but several `Context` spread across your application used to share state through out several components.

For the current use-case, where we have a simple app with almost no state (as it stands, we store the selected uikit theme, the current navigation status and the auth state) there is no point of bundling such simple scope into Redux all deal with all its cumbersome drawbacks.

To know more about React ContextAPI, please consult https://reactjs.org/docs/context.html

# Data

Data fetching is a core requirement of almost every React app. There is a variety of ways to fetch data in React, including using the built-in Fetch API, Axios, async/await, and more.

Well, you can simply call `fetch`, wait for the reply to render your component. If this solution works for you go ahead. But in a real world use case you probably want to show a loading indicator while the call is being executed, have a polling mechanism updating the data or even properly handle errors in a _user-friendly_ way.

This application showcases two different approaches of fetching data:
- [Characters data] From a [GraphQl server](http://graphql.org/swapi-graphql/) using [Apollo](https://www.apollographql.com/).
- [Starships data] From a [RestAPI](https://swapi.dev/) with [swr](https://swr.vercel.app/), which stands for stale-while-revalidate, a HTTP cache invalidation strategy popularized by [HTTP RFC 5861](https://tools.ietf.org/html/rfc5861). 

Like the state management solution (or even the application foundation layer), and with the way/speed the technology evolves in the client side layer, we strongly suggest you do your own research and decide what should you use based on your use-case. Regarding this topic there are other good solutions around like [react-query](https://react-query.tanstack.com/) as alternative to `swr` or [Relay](https://relay.dev/) for Apollo.

# Typescript

Typescript makes React apps more stable, readable and manageable. It brings multiple advantages to React applications:

- `Interfaces`: it allows to define complex type definitions in the form of interfaces. This results in strict checks which in turn reduces the amount of possible bugs you might have produced without it.
- `IDEs`: is very helpful while using IDEs as they provide better autocomplete and snippet generation, which makes development faster.
- `Readable, easily understandable code`: being statically typed code is type-checked, which helps make the code more readable.

To know more about typescript:

- https://www.typescriptlang.org/
- https://github.com/piotrwitek/react-redux-typescript-guide
- https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

# What’s missing?
- Server Side Rendering.
- Docker & Kubernetes deployment.

# References

- https://reactjs.org/
- https://github.com/facebook/create-react-app
- https://redux.js.org/
- https://redux-toolkit.js.org/
- https://www.typescriptlang.org/
- https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
- https://github.com/piotrwitek/typesafe-actions
- https://alligator.io/react/typescript-with-react/
- https://swapi.dev/
- http://graphql.org/swapi-graphql/
