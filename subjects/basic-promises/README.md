# Promises - the basics

<!-- slide-front-matter class: center, middle -->

## Summary

<!-- slide-include ../../BANNER.md -->

Get an overview of the Promise API and how to use it to handle asynchronous operations.

> **Disclaimer**

> This subject is an introduction to Promises loosely based on a summary [here](https://mediacomem.github.io/comem-devmobil/latest/subjects/js-promises-basics/?home=https://heig-mdt-gio1.github.io/material/latest/), itself being a condensed version of a more in-depth subject about Promises that you can consult [here][js-prom].

> Several sections are directly copied from this subject.

**Recommanded readings**

- [JavaScript][js-bas]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Asynchronous vs synchronous execution](#asynchronous-vs-synchronous-execution)
- [One solution: callbacks](#one-solution-callbacks)
- [Callback hell](#callback-hell)
- [Promises to the rescue](#promises-to-the-rescue)
- [Telling it what to do next](#telling-it-what-to-do-next)
- [Chaining promises](#chaining-promises)
- [Chaining with a value](#chaining-with-a-value)
- [Errors in asynchronous execution](#errors-in-asynchronous-execution)
- [Unhandled rejections](#unhandled-rejections)
- [Larger chains](#larger-chains)
- [An example](#an-example)
- [Waiting on a promise](#waiting-on-a-promise)
  - [Asynchronous functions](#asynchronous-functions)
  - [Error handling in async functions](#error-handling-in-async-functions)
  - [Return values of async functions](#return-values-of-async-functions)
- [Summary](#summary)
- [Dive deeper](#dive-deeper)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Asynchronous vs synchronous execution

Execution is
- **synchronous** when the code is executed **sequentially**, one after the other. If the first operation takes a long time, the next operation will have to wait.
- **asynchronous** when the code is executed in parallel. The second operation can start before the first one is finished.

```js
// Asynchronous request to a web service.
fetch("http://example.com")
// Code executed immediately after the request started.
console.log("Request in progress...")
```

*(Here we use the [Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) as an example. It allows us to make AJAX requests.)*

Problem: **how do we know when it is complete**? How can I get the result of the request?

## One solution: callbacks

One solution: tell it what it will need to do when complete.

```js
// (this is invalid code, for the moment)
fetch("http://example.com", function (data) {
  // Do this once the request is complete.
  console.log("Received response: " + data);
});
```

Problem?

## Callback hell

If what needs to happen once the request is complete is *another* asynchronous request, things can get messy.

```js
// (this is invalid code, for the moment)
fetch("/api/users", userData, function (createdUser) {
  fetch("/api/auth", userData, function (authData) {
    let query = { userId: createdUser.id, token: authData.token };
    fetch("/api/stats", query, function (statsData) {
      fetch("/api/notifications", query, function (notificationsData) {
        // Notify the user of their stats.
      });
    });
  });
});
```

## Promises to the rescue

Promises are a way to organize asynchronous code.

A promise can be thought of as
- **the promise of the result** of an asynchronous operation,
- **a handle to an asynchronous execution** running in parallel,
- **who to tell** what should happen once the result is available.

```js
let resPromise = fetch("/api/users", userData)
// resPromise is a promise of the result of the request.
// We'll use it to tell what to do once the request is complete.
```

## Telling it what to do next

The `then` method allows you to tell a promise what to do once its asynchronous operation is complete.

It takes two arguments
- the function it should call when the operation is **successful**
- the function it should call when the operation **fails** (optional)

```js
function handleResponse(result) {
  // do something with successful result
}
function handleError(err) {
  // do something with error
}

let resPromise = fetch("/api/users", userData);
resPromise.then(handleResponse, handleError);
```

Here, once the request is complete,
- if it was successful, `handleResponse` will be called with the result
- if it failed, `handleError` will be called with an error object

## Chaining promises

The `then` method returns a new promise : the promise of the result of the function you passed to `then`.

```js
function handleResponse(result) {
  return fetch("/api/auth", userData);
}

let resPromise = fetch("/api/users", userData);
let authPromise = resPromise.then(handleResponse);
```

Here, `authPromise` is a promise of the result of calling `handleResponse` with the result of `resPromise` once complete.

In other words, `authPromise` is the promise of running the first fetch, **and then** handling the response.

## Chaining with a value

The callback passed to `then` can return a promise *or* a value.

```js
function getValueFromResponse(result) {
  return "Hello, " + result.name; // returns a value
}
function getAuthFromResponse(result) {
  return fetch("/api/auth", userData); // returns a promise
}

let resPromise = fetch("/api/users", userData);
let valuePromise = resPromise.then(getValueFromResponse);
// valuePromise is a promise of the result of getValueFromResponse

let resPromise = fetch("/api/users", userData);
let authPromise = resPromise.then(getAuthFromResponse);
// authPromise is a promise of the result of fetching /api/auth
```

Note that the result of `authPromise` is the *result* of the promise returned by `getAuthFromResponse`, not the promise itself.

## Errors in asynchronous execution

If an error occurs during an asynchronous execution, it can be caught using the second argument to `then`.

```js
let resPromise = fetch("/api/users", userData);
let authPromise = resPromise.then(handleResponse, `handleError`);
```

But we can also catch errors in the chain with the `catch` method.

```js
let resPromise = fetch("/api/users", userData);
let authPromise = resPromise.then(handleResponse).catch(`handleError`);
```

These two are functionally equivalent. `handleError` will be called if an error occurs in `resPromise`.

## Unhandled rejections

If an error occurs in a promise and no callback is provided to handle it, an **unhandled rejection** occurs.

```js
// Fetching to a non-existing endpoint, will fail.
let resPromise = fetch("/api/uusrrs", userData);
let authPromise = resPromise.then(handleResponse);
// Unhandled rejection: TypeError: Failed to fetch
```

Depending on the JavaScript runtime (NodeJS for example), this error may even kill the process. So **always handle rejections**.

## Larger chains

We can chain as many promises as we want.

```js
let resPromise = fetch("/api/users", userData);
let authPromise = resPromise.then(handleResponse)
let statsPromise = authPromise.then(getStats)
let notificationsPromise = statsPromise.then(getNotifications)
let finalPromise = notificationsPromise.catch(handleError)
```

Or even, in a more succinct way:
  
```js
fetch("/api/users", userData)
  .then(handleResponse)
  .then(getStats)
  .then(getNotifications)
  .catch(handleError);
```

We are essentially saying "once the first request is complete, do this, then do this, then do this, and if anything goes wrong, do this".

## An example

Here is a concrete example of how promises are often used in JavaScript.

```js
fetch("https://api.chucknorris.io/jokes/random")
  .then(function(response) { return response.json() } )
  .then(function(joke) { console.log("Here's the joke: " + joke.value) } )
  .catch(function(err) { console.error("Failed to get a joke: " + err) } );
```

The `json` function on a fetch result parses it into a json value, *asynchronously*. This means that it returns a new promise, hence why we need to chain another `then` after it, and can't print it immediately in the first `then`.

What we did here is say
- fetch a chuck norris joke,
- once it completes, parse that joke into json,
- once that completes, print the joke,
- if anything fails along the way, print the error.

## Waiting on a promise

It is sometimes cumbersome having to tell the promise what to do next, instead of just waiting for it to complete.

The `await` keyword allows you to do just that.
- It pauses execution until the promise completes.
- If the promise succeeded, it evaluates to the result of the promise.
- If the promise failed, it throws the error.

```js
async function getJoke() {
  try {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let joke = await response.json();
    return joke.value;
  } catch (err) {
    // One of the promises was rejected, the await threw the error.
    return "Failed to get a joke: " + err;
  }
}
```

Note that the `await` keyword is only valid inside functions marked `async`.

### Asynchronous functions

A function marked with `async` is called **asynchronous**. It differs from a regular function in two ways:
- it executes asynchronously
- it returns a promise, whose result is the result of the function

```js
async function getJoke() {
  try {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let joke = await response.json();
    return joke.value;
  } catch (err) {
    return "Failed to get a joke: " + err;
  }
}

let jokePromise = getJoke();
console.log("Joke is coming...");

jokePromise.then(joke => console.log("Here's the joke: " + joke));
```

Note how, when `getJoke` is called, it starts executing in parallel.

### Error handling in async functions

What if we want the promise returned by an async function to fail?

```js
async function getJoke() {
  try {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let joke = await response.json();
    // Success: evaluate to the joke
    return joke.value;
  } catch (err) {
    // Error: return a rejected promise.
    return Promise.reject("Failed to get a joke: " + err);
  }
}

getJoke().then(console.log).catch(console.error);
```

- `Promise.resolve(value)` returns a promise that is immediately resolved with the given value.
- `Promise.reject(reason)` returns a promise that is immediately rejected with the given reason.

Here, if the joke couldn't be loaded, the promise returned by `getJoke` will be rejected and the catch will be executed.

### Return values of async functions

An asynchronous function can return a value or a promise. In both cases, the result of the function is a promise:
- if it returns a value, the returned promise will result in that value
- if it returns a promise, the returned promise will result in *the result of that promise*.

From the outside, the result of the function is the same.

```js
async function getJokeValue() {
  return "This is a joke";
}
async function getJokePromise() {
  return Promise.resolve("This is a joke");
}

const joke1 = getJokeValue(); // Promise resulting in a joke
joke1.then(joke => console.log(joke)); // "This is a joke"

const joke2 = getJokePromise(); // Promise resulting in a joke, too
joke2.then(joke => console.log(joke)); // "This is a joke"
```

## Summary

A Promise is
- a handle to an asynchronous operation
- that can be told what to do once it is complete
- and can be chained with other promises.

The `then` method
- takes two functions describing what to do on success and failure,
- returns a new promise, whose result is the result of executing the appropriate function among the two.

Asynchronous functions
- are allowed to `await` a Promise, i.e. pause until it resolves,
- return a Promise, whose result is the result of the function.

## Dive deeper

Promises are **a powerful tool** to work with asynchronous code.

It is **not limited to HTTP requests** and can be used for many use cases such as file operation, lengthy operations, etc.

Chaining promises is very useful to create clear operation sequence and handle error in the chain.

If you want to **dive deeper** in the subject of Promises, [here's a more in-depth subject][js-prom] that covers many more advanced concepts.

[chuck-jokes]: https://api.chucknorris.io/
[fetch]: https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
[js-bas]: ../js
[js-prom]: ../js-promises/
[promises-spec]: https://promisesaplus.com/
