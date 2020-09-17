# Clean code basic principles

<!-- slide-front-matter class: center, middle -->

## Summary

Learn about some basic principles that will help you write cleaner code

<!-- slide-include ../../BANNER.md -->

**You will need**


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Getting started](#getting-started)
- [D.R.Y.](#dry)
  - [_W.E.T._ Illustration](#_wet_-illustration)
    - [Explanation](#explanation)
    - [DRYer code](#dryer-code)
    - [Ultimate Dry](#ultimate-dry)
  - [Pitfalls and dangers of overDRYing](#pitfalls-and-dangers-of-overdrying)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting started

Writing code can be **hard**. You have to:
- Know the **language** you're writing with
- Know how and if it can do what you want it to
- Write the code without **syntax** errors
- Write code **without nasty bugs**
- ...

Thus, beginner programmers could write code while only caring about the end result (a program without bugs that does what it's supposed to), without thinking about **how they actually write the code** itself.

This often results in [**Spaghetti Code**][spaghetti-code] ; a code that has **no structure** and is **hard to read, understand, fix and maintain**.

We'll see in this course the **basic principles that you should always have in the back of your mind** when writing code.

> Please note that all future code illustrations will use JavaScript

## D.R.Y.

This first principle is an acronym _(many of those principles are)_ that means:

[**D**on't **R**epeat **Y**ourself][dry]

The meaning is quite obvious: **you should not repeat the same piece of logic twice in your program**.

If you find yourself copy/pasting or writing the same line(s) more than one time, then you might want to ask yourself if this couldn't be **extracted in a shareable structure**.

In JavaScript (and many other langauges), this structure usually is a **function** (or a class).

> The anti-principle of _D.R.Y._ is _W.E.T._, as in "**W**rite **E**verything **T**wice".

### _W.E.T._ Illustration

Let's illustrate that with a simple script that extracts the initials out of a person's name.

```js
// This value could come from any kind of user input
const name = "Mathias Oberson";

// Create an array of strings by spliting the name at each space
const parts = name.split(" ");

// Get the first letter of the first part in upper case followed by a dot
const firstInitial = parts[0].charAt(0).toUpperCase() + ".";
// Get the first letter of the second part in upper case followed by a dot
const secondInitial = parts[1].charAt(0).toUpperCase() + ".";

// Concatenate both initials
const initials = firstInitial + secondInitial;
console.log(initials); // Prints: M.O.
```
> What's not D.R.Y. about this code?

#### Explanation

The main issue with this code is the fact that we wrote twice the logic to **extract the initial off of a name's part**.

This is not a very complex logic, and it's only one line of code, so why bother?!

- Copy/pasting (or rewriting) it every time we want to use it increases significantly the risk of making a mistake (forgetting the final dot, messing up with the indexes, ...).
- If the requirements change and initials should now be in lower case, you'll have to replace `toUpperCase()` with `toLowerCase()` every where you pasted the snippet of code
  > And don't even think about using your IDE's search & replace feature... `toUpperCase()` is probably used in may unrelated places
- Plus, reading a line like `parts[0].charAt(0).toUpperCase() + "."` does not instantly make you think: "A'right! That's an initial extraction".

So, let's rwerite some of this code by extracting the repeated line in its own function.

#### DRYer code

```js
const name = "Mathias Oberson";

const parts = name.split(" ");

const firstInitial = `extractInitial(parts[0])`;
const secondInitial = `extractInitial(parts[1])`;

const initials = firstInitial + secondInitial;
console.log(initials);

*function extractInitial(value) {
*  return value.charAt(0).toUpperCase() + ".";
*}
```

The code is now:
- **More readable**: the function name `extractInitial` is clear enough so we understand what it does
- **More maintainable**: only one place to modify, if the initial extraction process ever changed

#### Ultimate Dry

But we could by DRYer again!

- The call to `extractInitial` is written twice. That's not an issue _per se_, but since `parts` is an `array` we should write our code to loop through it
- The overall logic (splitting the name, extracting and concatenating initials) will probably be repeated whenever we need initials from a name

Let's rewrite our code again:

```js
const name = "Mathias Oberson";

console.log(getInitialsFromName(name));

function getInitialsFromName(name) {
  const parts = name.split(" "); // Split the name
  let result = ""; // Initialize the final result

  for (const part of parts) { // Loop through each part of the name
    result += extractInitial(part); // Concatenate the current part's initial
  }
  return result;
}

function extractInitial(value) {
  return value.charAt(0).toUpperCase() + ".";
}
```

### Pitfalls and dangers of overDRYing

- DRY is **not** about preventing the repetition of **code**, but rather the repetition of **logic**

  Repeating the same line of code twice might be perfectly OK if this repetition is done in a different **context**

[spaghetti-code]: https://en.wikipedia.org/wiki/Spaghetti_code
[dry]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself