## Setup for React and TypeScript with Hitachi Vantara UI Kit

- [Goal](#goal)
  - [**No Lock-In**](#no-lock-in)
- [What’s Included?](#whats-included)
- [Getting Started](#getting-started)
- [Structure](#structure)
    - [Folders](#folders)
- [State Management - Redux](#state-management---redux)
  - [Data Flow](#data-flow)
  - [Actions](#actions)
  - [Thunks](#thunks)
  - [Store](#store)
  - [Reducers](#reducers)
- [Typescript](#typescript)
- [What’s missing?](#whats-missing)
- [References](#references)

# Goal

To provide a modern workflow environment and an example application that implements **[UI Kit](https://github.com/pentaho/hv-uikit-react) patterns** and **code strategies** in order to guide and speed up your development.

We chose [Create React App](https://create-react-app.dev/) as a foundation for our application because the setup process is not the main focus of this project and it makes us free from the burden of having to manage all the intricacies of that process:

- You don't have to spend hours setting up a new project!
- You get free upgrades as the tool gets better, just by updating one dependency.
- Under the hood, it uses webpack, Babel, ESLint, and other coll projects. If you ever want an advanced configuration, you can ”eject” from Create React App and edit their config files directly.  
  
## **No Lock-In**
If your project has different requirements you can opt for one of the many existing alternatives.  

Today [Next.js](https://nextjs.org/) and [GatsbyJS](https://www.gatsbyjs.com/) are two of the most popular Create React App alternatives, being more focused in improving **SEO performance**, **Server-side rendering (SSR)** and **Static site generatorion (SSG)**.
# What’s Included?

- [HV UIKit](https://github.com/pentaho/hv-uikit-react) setup and integration.
- React, JSX, and ES6 syntax support.
- Language extras beyond ES6 like the object spread operator.
- TypeScript syntax support.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
- Dynamic Routing with [react-router](https://github.com/ReactTraining/react-router).
- Internationalization with [react-i18next](https://github.com/i18next/react-i18next).
- State management with [react-redux](https://github.com/reduxjs/react-redux).
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

The code is grouped by feature/ domain, "colocating" all related files (styles, JS and tests) together inside the same feature folder. This way we try to avoid too much nesting as it becomes harder to write relative imports between them, or to update those imports when the files are moved.

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
- `config` - configuration related files (tests/ webpack, i18n).
- `node_modules`- packages installed by NPM.
- `public` - static files. Files in the public directory will maintain the same file name in production, which typically means that they will be cached.
- `src` - dynamic files. If the file is imported by the JavaScript application or changes contents, put it here.
  - `index.tsx` - is the entry point of our app.
  - `App.tsx` - is our top-level component. Here we configure all the providers needed: `UIKit`, `Redux`, `Router`.
  - `assets` - all dependencies shared by the application. This provides a single location for storing files that could be seen as external to the project itself.
  - `components` - components are grouped by pages. Each top folder holds all the components that are common to a specific view.
    - `pages/Login -> components/login/LoginForm`
  - `lib` - code that is used/ shared globally. It helps to keep the code DRY by exporting repeated logic to a singular location and importing it where used.
  - `store` - all files related with Redux state management. We grouped all actions and reducers by API domain. We promote this pattern because if a feature of the app gets removed, we can remove a single folder rather than going to top-level folders (actions, reducers, etc.) and remove files individually.
    - `lib/api/auth -> store/auth`
  - `pages` - components that are tightly couple with routes. Each view should map the corresponding route. It also should be simple and free from logic that transforms data, focused on implementing the layout using the [UIKit grid system](https://pentaho.github.io/hv-uikit-react/?path=/story/layout--grid).
    - `route/login -> pages/Login/`
- `typings` - feature/ domain custom type definitions, as also global definitions for untyped NPM modules.
  
# State Management - Redux

Most libraries are built with a way for components to internally manage their state without any need for an external library or tool, but it gets messy as the app gets complex.

At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state.

With Redux there’s a central store that holds the entire state of the application and each component can access the state. Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen.

There are other benefits of using Redux:

- `Redux makes the state predictable` - if the same state and action are passed to a reducer, the same result is always produced as reducers are pure functions. The state is also immutable and is never changed.
- `Maintainability` - Redux is strict about how code should be organized so it makes it easier for someone with knowledge of Redux to understand the structure of any Redux application. This generally makes it easier to maintain.
- `Persistence` - You can persist some of the app’s state to local storage and restore it after a refresh.

## Data Flow

![1_Q3QdBDZL4cBrR5GXT6J5jA](https://user-images.githubusercontent.com/14975353/70048046-4a70cf80-15c1-11ea-9815-38a9cc0e622d.jpg)

We use [Typesafe utilities](https://github.com/piotrwitek/typesafe-actions) designed to reduce types verbosity and complexity in Redux Architecture.

## Actions

Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store. The data can be from user interactions, API calls or even form submission.

Actions are sent using `store.dispatch()` method and are plain JavaScript objects and they must have a `type` property to indicate the type of action to be carried out. They can also have a `payload` that contains the information that should be worked on by the action.

```javascript
const someAction = (somePayload: type) =>
  action(Actions.SOME_ACTION, somePayload);
```

## Thunks

With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store.

A thunk is a function that (optionally) takes some parameters and returns another function. The inner function takes a dispatch function and a getState function -- both of which will be supplied by the Redux-Thunk middleware.

```javascript
const someThunk = () => async (dispatch: Dispatch): Promise<void> => {
  // -> do something async;
  dispatch(someAction(somePayload));
};
```

## Store

The store holds the application state. There is `only one store` in any Redux application. You can access the state stored, update the state, and register or unregister listeners via helper methods. Actions performed on the state always returns a new state.

```javascript
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
```

## Reducers

Reducers specify how the application's state changes in response to actions sent to the store. They are `pure functions` that take the current state of an application, perform an action and returns a new state.

A reducer is a pure function that `takes the previous state and an action`, and `returns the next state`.

```javascript
const someReducer = createReducer(initialState, {
  [Actions.SOME_ACTION]: (state, action) => ({
    somePayload: action.payload
  })
});
```

To know more about redux:

- https://redux.js.org/
- https://redux-toolkit.js.org/

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

- Lazy loading & [code spliting](https://reactjs.org/docs/code-splitting.html).
- Redux [selectors](https://github.com/reduxjs/reselect)
- Redux [sagas](https://github.com/redux-saga/redux-saga)
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
- https://github.com/piotrwitek/react-redux-typescript-guide
- https://alligator.io/react/typescript-with-react/