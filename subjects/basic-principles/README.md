# Code and architecture principles

<!-- slide-front-matter class: center, middle -->

## Summary
<!-- slide-front-matter class: middle -->

Learn about some basic principles that will help you write cleaner, more organised code

<!-- slide-include ../../BANNER.md -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Getting started](#getting-started)
- [D.R.Y.](#dry)
  - [_W.E.T._ Illustration](#_wet_-illustration)
    - [Explanation](#explanation)
    - [D.R.Y.er code](#dryer-code)
    - [Extreme D.R.Y.](#extreme-dry)
  - [Pitfalls and dangers of overD.R.Y.ing](#pitfalls-and-dangers-of-overdrying)
  - [Examples](#examples)
    - [Example 1](#example-1)
    - [Fix](#fix)
    - [Example 2](#example-2)
    - [Fix](#fix-1)
    - [Example 3](#example-3)
    - [Fix](#fix-2)
    - [Example 4](#example-4)
    - [Fix](#fix-3)
- [K.I.S.S.](#kiss)
  - [Do not write code to show off...](#do-not-write-code-to-show-off)
  - [...aim at readability...](#aim-at-readability)
  - [...aim at readability...](#aim-at-readability-1)
  - [...to a certain extent](#to-a-certain-extent)
  - [The Art of Naming](#the-art-of-naming)
  - [Take a step back](#take-a-step-back)
  - [Examples](#examples-1)
    - [Example 1](#example-1-1)
    - [Fix](#fix-4)
    - [Example 2](#example-2-1)
    - [Fix](#fix-5)
    - [Example 3](#example-3-1)
    - [Fix](#fix-6)
    - [Example 4](#example-4-1)
    - [Fix](#fix-7)
- [Y.A.G.N.I.](#yagni)
  - [You can not predicte the future](#you-can-not-predicte-the-future)
  - [Example](#example)
- [S.R.P.](#srp)
  - [Omnipotent function (1/2)](#omnipotent-function-12)
  - [Omnipotent function (2/2)](#omnipotent-function-22)
  - [Why?](#why)
  - [Example](#example-1)
- [S.O.C.](#soc)
  - [Separate and regroup](#separate-and-regroup)
  - [Layers](#layers)
  - [Modularization](#modularization)
- [Resources](#resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting started

Writing code can be **hard**. You have to:

- Know the **programming language**
- Know **what** it can do
- Know **how** it can do it
- Avoid **syntax errors**
- Avoid **weird bugs**
- ...

Overwhelmed, beginners might just try until it works, without thinking about **how they write the code** itself.

This often results in [**Spaghetti Code**][spaghetti-code] ; a code that has **no structure** and is **hard to read, understand, fix and maintain**.

In this course, you will learn some **core principles** that will help you write **cleaner, more organised code**.

> Please note that all future code illustrations will use JavaScript

## D.R.Y.

This first principle is an acronym _(like many)_:

[**D**on't **R**epeat **Y**ourself][d.r.y.]

The meaning is obvious: **do not repeat the same piece of logic twice in your program**.

If you find yourself copy/pasting or writing the same line(s) more than one time, then ask yourself: *couldn't this be **extracted in a shareable program unit**.*

In JavaScript (and many other langauges), this unit usually is a **function** (or a class).

> The anti-principle of _D.R.Y._ is _W.E.T._, as in "**W**rite **E**verything **T**wice".

### _W.E.T._ Illustration

Let's illustrate that with a simple script that extracts the initials out of a person's name.

```js
// This value could come from any kind of user input
const name = "Olivier Lemer";

// Create an array of strings by spliting the name at each space
const parts = name.split(" ");

// Get the first letter of the first part in upper case followed by a dot
const firstInitial = parts[0].charAt(0).toUpperCase() + ".";
// Get the first letter of the second part in upper case followed by a dot
const secondInitial = parts[1].charAt(0).toUpperCase() + ".";

// Concatenate both initials
const initials = firstInitial + secondInitial;
console.log(initials); // Prints: O.L.
```

> What's not D.R.Y. about this code?

#### Explanation

We wrote the logic to **extract the initial off of a name's part** twice!

*So what ? It's only one line of code, and it's not that complex..*

- **Risks of mistakes**: at each copy/paste or rewrite, you can make a mistake (forget the final dot, mess up the indices, ...)
- **Maintainability**: if, one hour later, something has to change (requirements changed, a bug was found, ...), you'll have to modify **every** instance of that line of code. You'll likely forget one, or make a mistake.
- **Readability**: `parts[0].charAt(0).toUpperCase() + "."` doesn't instantly make you think: "A'ight! That's an initial extraction". Remember: *code should document itself*.

So, let's rewrite some of this code by extracting the repeated line in its own function.

#### D.R.Y.er code

```js
const name = "Olivier Lemer";

const parts = name.split(" ");

const firstInitial = `extractInitial(parts[0])`;
const secondInitial = `extractInitial(parts[1])`;

const initials = firstInitial + secondInitial;
console.log(initials);

*function extractInitial(word) {
*  return word.charAt(0).toUpperCase() + ".";
*}
```

The code is now:

- **More readable**: `extractInitial` clearly shows what's happening.
- **More maintainable**: only one place to modify, if we ever need to.

What do we think of this?

#### Extreme D.R.Y.

- It's likely not the only time we'll need to extract initials from a name
- `extractInitial` is called twice. That's not a problem here, but could become one if the name had more than two parts.

Let's rewrite our code again:

```js
const name = "Dont Repeat Yourself";

console.log(getInitialsFromName(name));

function getInitialsFromName(name) {
  const parts = name.split(" "); // Split the name
  let result = ""; // Initialize the final result

  for (const part of parts) {
    // Loop through each part of the name
    result += extractInitial(part); // Concatenate the current part's initial
  }
  return result;
}

function extractInitial(word) {
  return word.charAt(0).toUpperCase() + ".";
}
```

???

We did two things here
- We created a `for` loop to handle any number of parts in the name, hence avoiding duplication and making the code more generic.
- We created a `getInitialsFromName` function to make it easy to re-use this logic elsewhere in our code.

On this second point, a small note : something to avoid is **early optimization**. You should not start refactoring if you're not sure it will be useful later. In this case, it is a simple enough refactor, and it's likely enough that we'll need it again later.

### Pitfalls and dangers of overD.R.Y.ing

- D.R.Y. is **not** about preventing the repetition of **code**, but rather the repetition of **logic**

  Repeating the same line of code can be OK, if this repetition is done in different **contexts or features**.

- Excessive D.R.Y.ing can lead to **higher complexity**, due to unnecessary abstractions or premature refactoring

  You should avoid applying the D.R.Y. principle when it's not necessary (there is no "just in case").

> Always try to balance the D.R.Y. principle with **code simplicity** by only implementing what's **currently necessary**. We will explore this further later.

### Examples

#### Example 1

```js
function addTen(num) {
    return num + 10;
}

function addTwenty(num) {
    return num + 20;
}

function addThirty(num) {
    return num + 30;
}
```

#### Fix

The logic of adding a number to another is repeated three times. We can extract it in a function:

```js
function add(num, amount) {
    return num + amount;
}
```

#### Example 2

```js
button1.addEventListener('click', function() {
  let element = document.getElementById('myElement');
  element.style.color = 'red';
});

button2.addEventListener('click', function() {
  let element = document.getElementById('myElement');
  element.style.color = 'blue';
});
```

#### Fix

The logic of changing the color of an element is repeated. We can extract it in a function:

```js
*function changeElementColor(color) {
*  let element = document.getElementById('myElement');
*  element.style.color = color;
*}

button1.addEventListener('click', function() {
  changeElementColor('red');
});

button2.addEventListener('click', function() {
  changeElementColor('blue');
});
```

#### Example 3

```js
function processUser(user) {
  if (user.age < 18) {
    throw new Error("User is under 18");
  }
  // process user
}

function updateUser(user) {
  if (user.age < 18) {
    throw new Error("User is under 18");
  }
  // update user
}
```

#### Fix

The logic of checking if the user is under 18 is repeated. We can extract it in a function:

```js
*function checkUserAge(user) {
*  if (user.age < 18) {
*    throw new Error("User is under 18");
*  }
*}

function processUser(user) {
  checkUserAge(user);
  // process user
}

function updateUser(user) {
  checkUserAge(user);
  // update user
}
```

#### Example 4

```js
function verifyCredentials(username, password) {
  let user = getUser(username);
  if (user.password !== password) {
    throw new Error("Invalid credentials");
  }
  let passwordHash = hashPassword(password);
  if (user.passwordHash !== passwordHash) {
    throw new Error("Invalid credentials");
  }
  return user;
}
```

#### Fix

The error message is repeated. We can extract it in a function:

```js
*const INVALID_CREDENTIALS_ERROR = "Invalid credentials";

function verifyCredentials(username, password) {
  let user = getUser(username);
  if (!user) {
    throw new Error(`INVALID_CREDENTIALS_ERROR`);
  }
  let passwordHash = hashPassword(password);
  if (user.passwordHash !== passwordHash) {
    throw new Error(`INVALID_CREDENTIALS_ERROR`);
  }
  return user;
}
```

## K.I.S.S.

The second principle we're going to see is K.I.S.S., that stands for

[**K**eep **I**t **S**tupid **S**imple][k.i.s.s.]

The idea behind this principle is quite simple itself: **don't make things needlessly complicated**.

Although short, this idea requires a little bit of details...


### Do not write code to show off...

Whenever possible, always favor the **readability** of your code over its cleverness.

Some people takes pride in writing very short pieces of code that are very ingenious but will require other developers to **pause for a minute or two** _(if not more)_ to understand them, **each time they encounter them**.

Here's an example for the ["Fizz/Buzz"][fizzbuzz] problem:

```js
for (i = 0; ++i < 101; console.log(i % 5 ? f || i : f + "Buzz"))
  f = i % 3 ? "" : "Fizz";
```

> It does the job, uses some obscure clever mechanism of the `for` loop, but is a mess to read, understand and debug...

### ...aim at readability...

Unless those clever pieces of code are absolutely necessary _(which they probably aren't)_, then you'd be better off **writing a few more lines** instead to make sure **the logic is more comprehensible** (by others and also yourself).

Here's another solution to the "Fizz/Buzz" problem:

```js
for (let nb = 1; nb <= 100; nb++) {
  const mod3 = nb % 3 ? "" : "Fizz";
  const mod5 = nb % 5 ? "" : "Buzz";
  console.log(mod3 || mod5 ? \`${mod3}${mod5}` : nb);
}
```

There's a few more lines, but the structure and the logic are **way more obvious**.

### ...aim at readability...

Another example: putting everything in a single line can become painful to read.

```js
const isUserAuthorized = user => user && user.isConnected && user.role === "admin" && user.permissions.includes("delete");
```

> It's not that complex, but it's not that easy to read either.

It is absolutely fine to **create intermediary variables** to make it clearer:

```js
function isUserConnected(user) {
  if (!user) {
    return false;
  }
  const isConnected = user.isConnected;
  const isAdmin = user.role === "admin";
  const canDelete = user.permissions.includes("delete");
  return isConnected && isAdmin && canDelete;
};
```

> Note how this code documents itself, thanks to the variable names.

### ...to a certain extent

- **Do use language-specific features**. If people don't understand because they don't know them, they will **learn** the first time they encounter them, and understand them thereafter.

- **Don't sacrifice performance** over readability. You can write performant code while still being comprehensible for programmer with general knowledge of the used language.

- **Explain your code** in comments, when you can't make it simpler, and are worried about its readability.

### The Art of Naming

One aspect of K.I.S.S. is to take the time to give **pertinent names** to your code elements.

You could be tempted to just name them `a`, `b`, `c`, `p1`, `fun`, etc. because you just want to get things done.

That's a **wrong trade off** : you will loose time in the end.

Read the same script **one day later**, and track how many minutes you're **losing** trying to remember what this `ccu` variable represents.

Nowadays, all IDEs help you reference existing symbols in your code, so the length doesn't really matter.

**Names are documentation!**\* What the variable is should be immediately obvious. If it contains the currently connected user, then call it `currentlyConnectedUser`, or `currentUser`.

> (\*) Don't fall into the opposite habit, though. `AbstractFlushClearCacheMessageBuilderOnTransactionSupport` is descriptive, sure, but not very practical.

### Take a step back

In general, K.I.S.S. is about **taking a step back** on what you just did, and ask yourself if all of this **could not be simplified**, stripped down to its basics without sacrifices for the feature.

> That's a general advice ; **taking time to think about the design** of your code will help with debugging, maintaining, and adding features.

- Isn't there a **library** out there that already does what I'm trying to implement? _(the less code you type, the less issue you'll create)_
- Doesn't the language I use offer some **native behavior** for what I'm trying to do? _(don't reinvent the wheel)_
- Do I really need **all those classes/functions** in my code? _(too much of them will make your application harder to grasp)_

And if you find yourself changing or modifying your code, **don't hesitate to delete unused code**. It's never lost, with source control like Git.

### Examples

#### Example 1

```js
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```

#### Fix

The `if` statement is not necessary. We can simplify the function:

```js
function isEven(num) {
  return num % 2 === 0;
}
```

#### Example 2

```js
function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value;
}
```

#### Fix

The ternary operator is hard to read. We can simplify the function:

```js
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
```

#### Example 3

```js
function containsZero(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      return true;
    }
  }
  return false;
}
```

#### Fix

We're reinventing the wheel. There is a high risk of making a mistake and introducing a bug.

We can simply use the builtin `includes` method:

```js
function containsZero(array) {
  return array.includes(0);
}
```

#### Example 4

```js
function capitalizeWords(str) {
  let result = ""
  let newWord = true;
  for (let i = 0; i < str.length; i++) {
    if (newWord) {
      result += str[i].toUpperCase();
      newWord = false;
    } else {
      result += str[i];
    }
    if (str[i] === " ") {
      newWord = true;
    }
  }
}
```

#### Fix

This is uselessly complex. We can simplify the function using the `split` and `join` methods:

```js
function capitalizeWords(str) {
  return str.split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
}
```

Or even better, on multiple lines with intermediate variables:

```js
function capitalizeWords(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    const initial = words[i].charAt(0).toUpperCase();
    const rest = words[i].slice(1);
    words[i] = initial + rest;
  }
  return words.join(" ");
}
```

## Y.A.G.N.I.

The third principle to keep in mind is Y.A.G.N.I., which stands for

[**Y**ou **A**ren't **G**onna **N**eed **I**t][y.a.g.n.i.]

The basis of this principle states that **you should not implement features and functionnality based on their assumed usefulness in the future, but because they are necessary right now**.

You should still **design** your code to make it **easily extendable** in the future (using functions, classes, interfaces, etc), but never code **more than you need right now**, even if you feel like it will be useful in the future.

Another less direct benefit is that you can **focus on the current feature** you're implementing, and not be distracted by the future.

### You can not predicte the future

Let's suppose that **you did develop a feature** that is not a current requirement, but you're sure it will soon be.

- Maybe you're right. But that feature will **probably not** have the exact same requirements you **thought it would**, and you'll have to modify the code.

  If you're lucky, those will be minor changes, but more often than not, it will be a **complete refactoring**, and the time you took in the past to implement the feature will have been wasted.

- Maybe you're wrong: **the code you wrote was never needed**... you'll then have a code base with unused code, making it more difficult to understand. You'll probably forget that it's not used and keep maintaining, optimizing and/or testing it.

### Example

In our earlier D.R.Y. example

```js
const name = "Dont Repeat Yourself";

console.log(getInitialsFromName(name));

function getInitialsFromName(name) {
  const parts = name.split(" "); // Split the name
  let result = ""; // Initialize the final result

  for (const part of parts) {
    // Loop through each part of the name
    result += extractInitial(part); // Concatenate the current part's initial
  }
  return result;
}

function extractInitial(word) {
  return word.charAt(0).toUpperCase() + ".";
}
```

If we were not extracting initials anywhere else, creating `getInitialsFromName` was **not necessary**.

## S.R.P.

This is related to how you should design and architecture your code. It means:

[**S**ingle **R**esponsibility **P**rinciple][s.r.p.]

This principle states that **a program unit (function, class, etc) should only be responsible of doing one thing**.

Let's take an example of a feature we'd want to implement in an app:

**"Display markers on a map, based on data retrieved from a webservice"**

On the next slide, I propose a pseudo-implementation for this feature.

> Note that this example is in **pseudo-code**. It won't work if executed, event if it looks like valid JS.

### Omnipotent function (1/2)

```js
function displayMarkerOnMapFromWebService() {
  let markersData;
  let markers = [];
  const request = new XMLHttpRequest();
  request.open("GET", "https://geo.dummy-service.ch/markers");
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      markersData = JSON.parse(request.response);
    }
    markersData.forEach((markerData) => {
      const marker = new Marker();
      marker.name = markerData.name;
      marker.coordinates = {
        lat: markerData.latitude,
        long: markerData.longitude
      };
      markers.push(marker);
    });
    const map = new Map("map");
    markers.forEach((marker) => {
      map.addMarker(marker);
    });
    map.displayMarkers();
  };
}
```

### Omnipotent function (2/2)

Our function **does everything**: fetch the data from the webservice, create the markers from it, add those marker on the map to display them.

It doesn't follow the S.R.P., since it is **directly** responsible of executing all those actions.

But this `displayMarkerOnMapFromWebService` function should not care about **how** those actions are performed ; that's not its responsibility. It should only care about the **overhall logic of the process**:

```js
function displayMarkerOnMapFromWebService() {
  // Call webservice to get raw data
  getDataFromWebService((markersData) => {
    // Create actual markers
    const markers = createMarkersFromData(markersData);
    // Give them to the map for display
    displayMarkersOnMap(markers);
  });
}
```

Each new function called by `displayMarkerOnMapFromWebService` is responsible for carrying out one action.

### Why?

- **Clearer application model**: having each function be responsible of exactly one task will make the **application's logic clearer**.

- **Modularity and reusability**: smaller blocks are more easily reusable. Building a complex logic out of small independant parts is easier than with omnipotent functions like the initial example.

- **Easier debugging**: if there's an **issue** with one of the actions, you know exactly **where to look**.

- **Safer extendability**: should any of those actions' **implementation change**, you can safely **modify the corresponding function** without having to alter the others.

> Note that, although we only mention functions here, the S.R.P. can be applied to any aspects of the code.

## S.O.C.

The last principle we'll see is a continuation of the previous one, and means

[**S**eparation **O**f **C**oncerns][soc]

If the Single Responsibility Principle is generally related to how **the low level code is structured** (the small building blocks of a program like functions or classes), the SOC principle is more related to your **whole application's architecture**.

Let's **look at a web application**, for illustration.

The first thing you'll notice as a user is **its user interface**. When you use this interface to perform actions (such as submitting a form), the application will probably **validate** its content, **do something** with it and **save** whatever the result is in a permanent way, most likely in a database of some sort.

This web application will have code somewhere in its code base to perform all those actions.

### Separate and regroup

According to S.R.P., we want **separate program units** to handle each of those tasks. But **there's a lot of tasks**!

Grouping them all in a single place would not be a good idea, much like it was not a good idea to have one function to do everything. You will need to **separate and group them based on what they do**:

- All units related to **managing a user interface** should be grouped together.
- All units related to **managing the data model** should be grouped together.
- All units related to **the business logic** should be grouped together.

### Layers

Sometimes, those groups interact in a **layered** fashion, where each layer interacts only with the layers directly above and below it.

Layered architectures are usually an **asbtract representation** of your app, at a higher level. The actual source code will not necessarily be as explicitly structured.

<!-- slide-column 30 -->

![MVC Application](./images/mvc-application.png)

<!-- slide-column 70 -->

> The previous example with a layer for the user interface, one for the business logic and another for the data, is very similar to a common **architectural pattern** known as MVC ([**M**odel - **V**iew - **C**ontroller][mvc]), used by many web framework such as Laravel, Spring, Ruby on Rails, etc.

### Modularization

What are those **groups** of program units? This is highly dependant on the language you're using.

- in PHP, a **namespace** mechanism organizes your classes hierarchically
- in Java, **packages** serve the same purpose
- in Python and JavaScript, it's **modules** (which is what we'll dig into later)

Using any of those mechanisms allows you to **design your application** following the S.O.C. principle.

You can think of S.O.C. as the **application level** version of S.R.P.; their benefits are very similar, only at different levels.

## Resources

- [The D.R.Y. Principle: Benefits and Costs with Examples][d.r.y.-in-depth] - In-depth analysis of the D.R.Y. principle
- [A Detailed Explanation of The K.I.S.S. Principle in Software][k.i.s.s.-in-depth] - In-depth analysis of the K.I.S.S. principle (with a little bit of Y.A.G.N.I. inside)
- [The Single Responsibility Principle Revisited][s.r.p.-in-depth]: In-depth analysis of the S.R.P.
- [Principles To Code By][principles-article] - Overview of coding principles, applied to an example

[spaghetti-code]: https://en.wikipedia.org/wiki/Spaghetti_code
[d.r.y.]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[d.r.y.-in-depth]: https://thevaluable.dev/D.R.Y.-principle-cost-benefit-example/
[principles-article]: https://medium.com/dailyjs/principles-to-code-by-3c516ad61fcc
[k.i.s.s.]: https://fr.wikipedia.org/wiki/Principe_K.I.S.S.
[fizzbuzz]: https://en.wikipedia.org/wiki/Fizz_buzz
[k.i.s.s.-in-depth]: https://thevaluable.dev/k.i.s.s.-principle-explained/
[y.a.g.n.i.]: https://fr.wikipedia.org/wiki/Y.A.G.N.I.
[s.r.p.]: https://fr.wikipedia.org/wiki/Principe_de_responsabilit%C3%A9_unique
[s.r.p.-in-depth]: https://thevaluable.dev/single-responsibility-principle-revisited/
[soc]: https://fr.wikipedia.org/wiki/S%C3%A9paration_des_pr%C3%A9occupations
[mvc]: https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur
