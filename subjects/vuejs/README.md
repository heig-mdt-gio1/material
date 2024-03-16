# Starting with Vue.js

<!-- slide-front-matter class: center, middle -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [What Is Vue.js?](#what-is-vuejs)
- [Why begin with Vue.js?](#why-begin-with-vuejs)
- [Key Characteristics](#key-characteristics)
- [Let's learn VueJS!](#lets-learn-vuejs)
- [Getting started with vue-cli](#getting-started-with-vue-cli)
- [Create your first vue.js 3.0 project](#create-your-first-vuejs-30-project)
- [Your first project!](#your-first-project)
- [Basic structures of a Vue.js project](#basic-structures-of-a-vuejs-project)
  - [`public` directory and `index.html`](#public-directory-and-indexhtml)
  - [`src` directory](#src-directory)
  - [Component files](#component-files)
    - [`template` section](#template-section)
    - [`script` section](#script-section)
      - [Component description object](#component-description-object)
    - [`style` section](#style-section)
  - [`main.js` file](#mainjs-file)
- [Dynamic Rendering](#dynamic-rendering)
  - [Dynamic data](#dynamic-data)
  - [Text Interpolation](#text-interpolation)
  - [Directives](#directives)
    - [Shorthand notations](#shorthand-notations)
- [Back to our project](#back-to-our-project)
  - [Create a new component](#create-a-new-component)
    - [Display our new component](#display-our-new-component)
    - [Our counter's state](#our-counters-state)
    - [Incrementing the count](#incrementing-the-count)
    - [Using methods](#using-methods)
    - [Separate state](#separate-state)
    - [Taking a prop on the counter](#taking-a-prop-on-the-counter)
    - [Using the prop in the counter](#using-the-prop-in-the-counter)
    - [Passing the prop from the parent](#passing-the-prop-from-the-parent)
- [Dynamic Rendering](#dynamic-rendering-1)
  - [More directives : `v-for`](#more-directives--v-for)
    - [Specifying a key](#specifying-a-key)
  - [More directives : `v-model`](#more-directives--v-model)
- [Back to our project](#back-to-our-project-1)
  - [What we need](#what-we-need)
  - [The task component](#the-task-component)
  - [The list of tasks](#the-list-of-tasks)
    - [The list of tasks's whole file](#the-list-of-taskss-whole-file)
  - [The input to add a task](#the-input-to-add-a-task)
    - [The input component's whole file](#the-input-components-whole-file)
    - [Adding the input to the list](#adding-the-input-to-the-list)
- [Events](#events)
  - [Event emission](#event-emission)
  - [Event listening](#event-listening)
  - [Adding tasks](#adding-tasks)
  - [Completing a task](#completing-a-task)
  - [Removing completed tasks](#removing-completed-tasks)
- [Final VueJS features](#final-vuejs-features)
  - [Lifecycle hooks](#lifecycle-hooks)
  - [The `this` keyword](#the-this-keyword)
  - [Slots (a.k.a. children)](#slots-aka-children)
- [Let's finish that to-do list](#lets-finish-that-to-do-list)
  - [Preventing empty tasks](#preventing-empty-tasks)
  - [Using the error popup](#using-the-error-popup)
  - [Showing the error popup](#showing-the-error-popup)
  - [Hiding the popup](#hiding-the-popup)
- [Full result: To-Do List](#full-result-to-do-list)
- [Cheat Sheet Components](#cheat-sheet-components)
- [Some Best Practices](#some-best-practices)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What Is Vue.js?

- An open-source model–view–view model (MVVM) front end JavaScript framework for building user interfaces and single-page applications.
- Created by Evan You in 2013
- Last release (September 18, 2020): **Vue 3.0**

[From Wikipedia][wiki-vuejs]

## Why begin with Vue.js?

- Gentle Learning Curve
- Modular and Flexible
- Easy to start with vue-CLI
- Popular
- [Extensive documentation][extent-doc]

[Documentation In French][french-doc]

## Key Characteristics

![Alt text](./images/vue2.jpg)

[Source][vue-characteristics]

## Let's learn VueJS!

<!-- slide-front-matter class: center, middle -->

## Getting started with vue-cli

The first step is to install vue-CLI (Command Line Interface).

```cmd
npm install -g @vue/cli
```

_Vue-CLI allows you to start up a vue.js 3.0 easily and rapidly._

Note : Vue can also be used without the CLI by including the Vue library in your HTML file.

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```

However, using the CLI is useful because
- it provides a standard project structure
- it provides a development server with hot reload
- it allows using `.vue` files (SFC)
- it allows you to build your project for production (minification, etc.)

## Create your first vue.js 3.0 project

1. Create a new project Vue.js 3.0

```cmd
vue create your_project_name
```

2. Choose vue.js 3.0 option

   > Default (Vue 3 Preview)

3. Enter to your new project directory

```cmd
cd your_project_name
```

4. Launch your project

```cmd
npm run serve
```

## Your first project!

<p align="center">
  <img src='./images/vue-launch.png' class='w50' />
</p>

_Let's figure out what's going on._

## Basic structures of a Vue.js project

```
your_project_name
├── public
│   ├── ...
│   └── index.html
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── App.vue
│   └── main.js
├── .gitignore
└── ...
```

### `public` directory and `index.html`

```
your_project_name
*├── public
*│   ├── ...
*│   └── index.html
├── src
│   └── ...
└── ...
```

Contains anything that must be served as is (e.g. `index.html`).

The `index.html` file is the main HTML file served when your app is run. It contains a special `div` with id `#app` that will be the root of your Vue app.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... the usual stuff ... -->
  </head>
  <body>
    `<div id="app"></div>`
  &lt;/body&gt;
</html>
```

### `src` directory

```
your_project_name
├── public
│   └── ...
├── src
*│   ├── assets
*│   │   └── logo.png
*│   ├── components
*│   │   └── HelloWorld.vue
*│   ├── App.vue
*│   └── main.js
└── ...
```

- `assets`: contains static assets used by components like images, fonts, etc.
- `components`: contains all Vue components used in the app.
- `App.vue`: the root component of the app.
- `main.js`: the JS code that sets up the app.

### Component files

VueJS has two types of components: **single file components** (SFC) and **functional components**. We will use SFC in this tutorial, as they are the easiest to reason about.

A SFC is a single `.vue` file composed of three parts

```vue
<template>
  <!-- HTML representation of the component -->
</template>

<script>
  export default {
    // JS code describing the component
  };
</script>

<style>
  /* CSS code for that component */
</style>
```

#### `template` section

Contains (almost-)standard HTML code, representing the component's UI.

```vue
<template>
  <div>
    `<h1>{{ msg }}</h1>`

    <img `v-if="shouldShowImage"` alt="Vue logo" src="./assets/logo.png" />
    
    `<MyVueComponent my-title="Hello World!" />`
  </div>
</template>
```

Non-HTML syntax is introduced by Vue to describe dynamic parts of the component, like
- `{{ msg }}` for inserting dynamic data,
- `v-if` for rendering on a given condition,
- `<MyVueComponent ...>` for rendering other components.

We will cover all these and more in the next slides.

#### `script` section

Contains
- all necessary imports (such as other components)
- the component's description (name, props, data, methods, etc.)

```vue
<script>
  import MyOtherComponent from "./MyOtherComponent.vue";

  export default {
    name: "HelloWorld",
    props: {
      msg: String,
      shouldShowImage: Boolean
    },
    components: {
      MyVueComponent
    },
  };
</script>
```

Let's look at this component description in detail.

##### Component description object

```js
export default {
  `// Lists the accepted props, with type and optional default value`
  props: {
    title: String,
    // ...
  },
  `// Returns initial value of component's state`
  data() {
    return {
      isEnabled: true,
      hasError: false,
      // ...
    };
  },
  `// Lists all components used as children`
  components: {
    MyOtherComponent
  },
  `// Lists all methods that can be used by the component`
  methods: {
    toggleEnabled() {
      this.isEnabled = !this.isEnabled;
    },
    // ...
  }
}
```

#### `style` section

Contains any CSS that should apply only to this component.

```vue
<style scoped>
  h1 {
    color: red;
  }
</style>
```

In these slides, we will mostly ignore the `style` section, as it is not specific to VueJS. You can add styling as like throughout the course.

### `main.js` file

Located in the `src` directory, this file is the entry point of the app. It is responsible for

- importing Vue and the root component,
- creating a new Vue instance with the root component.
- mounting the Vue instance to the `#app` div in `index.html`.

```js
import { createApp } from "vue";

// Import the root component we defined
import App from "./App.vue";

// Create a new Vue instance with the root component
const app = createApp(App)

// Place that instance in the #app div in index.html
app.mount("#app");
```

## Dynamic Rendering

The strength of VueJS

How to describe dynamic content?

<!-- slide-front-matter class: center, middle -->

### Dynamic data

What do we mean by dynamic data?

*Anything that can change over time.*

- Props passed by the parent (if parent changes, child changes)
- State (data) of the component
- The result of a computation

If displayed in the UI (i.e. `<template>`), any change to the dynamic data will trigger an **automatic** re-render.

### Text Interpolation

The simplest way to display dynamic data in the `<template>` is using the *text interpolation* syntax: `{{ ... }}`.

```vue
<template>
  <div>
    <h1>{{ `title` }}</h1>`
    <p>Welcome {{ `isNewUser ? "" : "back"` }}, {{ `username` }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      `username`: String
    }
    data() {
      return {
        `title`: "Welcome!",
        `isNewUser`: true,
      };
    }
  };
</script>
```

Note that it can also contain expressions, such as `isNewUser ? "" : "back"`.

### Directives

VueJS provides special HTML attributes called **directives**, all starting with `v-`. Some of them are:

- `v-if`: conditionally render an element
  ```vue
    <!-- Assuming shouldShow is a dynamic variable (i.e. prop or data). -->
    <p `v-if="shouldShow"`>This will show if shouldShow is true</p>
  ```
- `v-bind`: sets the value of another attribute to a dynamic value
  ```vue
    <!-- Assuming myClass is a dynamic variable (i.e. prop or data). -->
    <p `v-bind:class="currentClass"`>Will have the class stored in currentClass</p>
    <!-- Assuming myData is a dynamic variable (i.e. prop or data), and -->
    <!-- OtherComponent is a component expecting a myprop property -->
    <OtherComponent `v-bind:myprop="myData"` />
  ```
- `v-on`: listens to DOM events and runs specified code when triggered
  ```vue
    <!-- Assuming myMethod is a method of the component -->
    <button `v-on:click="myMethod"`>Click me!</button>
  ```

#### Shorthand notations

VueJS provides shorthand notations for the most common directives:

- `v-bind` can be replaced by `:`
  ```vue
    <p `:class="currentClass"`>Will have the class stored in currentClass</p>
    <OtherComponent `:myprop="myData"` />
  ```
- `v-on` can be replaced by `@`
  ```vue
    <button `@click="myMethod"`>Click me!</button>
  ```  

## Back to our project

<!-- slide-front-matter class: center, middle -->

### Create a new component

Create a new file in the `components` directory, called `CountIncrementer.vue`.

It will display a counter and a button to increment it. For now, keep it static.

```vue
<template>
  <div>
    <button>Increment</button>
    <p>Count: TBD</p>
  </div>
</template>
```

Define the component in the `<script>` section.

```vue
<script>
  export default {
    // TODO
  };
</script>
```

#### Display our new component

To display our new component in `App.vue`, we need to
- import the component into `App.vue`,
- list the component as a child of the `App` component,
- use the component in the `App` component's template.

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  `<CountIncrementer />`
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
*import CountIncrementer from './components/CountIncrementer.vue'

export default {
  name: 'App',
  components: {
    `CountIncrementer`,
    HelloWorld
  }
}
</script>
```

#### Our counter's state

We need a state variable to store the current count.

```vue
<script>
  export default {
*    data() {
*      return {
*        count: 0
*      };
*    }
  };
</script>
```

That value will be the displayed count in the `<template>` section.

```vue
<template>
  <div>
    <button>Increment</button>
    `<p>Count: {{ count }}</p>`
  </div>
</template>
```

We are now showing dynamic data! Though it's not very dynamic yet...

#### Incrementing the count

Let's increment the counter when the button is clicked.

```vue
<template>
  <div>
    <button `v-on:click="count++"`>Increment</button>
    <p>Count: {{ count }}</p>
  </div>
</template>
```

Or equivalently, using the shorthand notation,
```vue
    <button `@click="count++"`>Increment</button>
```

#### Using methods

This `count++` code could be extracted into a method.

```vue
<template>
  <div>
    <button @click="`incrementCount`">Increment</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
  export default {
    data: // ...
*    methods: {
*      incrementCount() {
*        this.count++;
*      }
*    }
  };
</script>
```

#### Separate state

We can now have multiple counters in our app, each with its own state.

Let's add a second counter to `App.vue`.

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CountIncrementer />
  `<CountIncrementer />`
</template>
```

We now have two counters, each with its own state. That's pretty D.R.Y.!

#### Taking a prop on the counter

Let's say we want to have a different increment step for the second counter. We'll need to use props.

To tell Vue that `CountIncrementer` takes a prop, we need to declare it in the component's description.

```vue
<script>
  export default {
    data: // ...
*   props: {
*     incrementStep: Number
*   },
    methods: // ...
  };
</script>
```

Note that we could also specify a default value using the `default` property.

```json
    props: {
      incrementStep: `{`
        `type: Number,`
        `default: 1`
      `}`
    },
```

#### Using the prop in the counter

We can now use the `incrementStep` prop in the `incrementCount` method, and (why not) in the template.

```vue
<template>
  <div>
    <button @click="incrementCount">Increment by {{ `incrementStep` }}</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
  export default {
    data: // ...
    props: {
      incrementStep: { type: Number, default: 1 }
    },
    methods: {
      incrementCount() {
        `this.count += this.incrementStep;`
      }
    }
  };
</script>
```

#### Passing the prop from the parent

We can now pass the desired `incrementStep` prop from the parent component (`App.vue`).

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CountIncrementer />
  <CountIncrementer `:incrementStep="2"` />
</template>
```

Because we provided a default value for `incrementStep`, we may also omit it, in which case it will default to 1.

**Note** : *we are passing the value through `:incrementStep` (shorthand for `v-bind:`), and not `incrementStep`. This is because, otherwise, it would be interpreted as a string, not a number, and we would get a warning.*

## Dynamic Rendering

Back to Directives.

<!-- slide-front-matter class: center, middle -->

### More directives : `v-for`

`v-for` tells VueJS to render an element multiple times, once per item of a list.

It takes a value of the form `<item> in <items>`, where
- `<items>` is the name of an array stored as a data or a prop,
- `<item>` is the name we want to give to the current item in the iteration. We can then use it to display the item, for example.

```vue
// Assuming items is an array stored as a data or prop.
<template>
  <ul>
    <li `v-for="item in items"`>{{ `item` }}</li>
  </ul>
</template>
```

One can also get the index of the item in the iteration by using the form `<item>, <index> in <items>`.

```vue
<template>
  <ul>
    <li `v-for="item, index in items"`>Item n°{{ `index + 1` }}: {{ `item` }}</li>
  </ul>
</template>
```

#### Specifying a key

When using `v-for` to render a list of components, it is important to specify a `key` attribute.

```vue
<template>
  <ul>
    <!-- Assuming items is an array of objects with an id and a text property. -->
    <li v-for="item in items" `:key="item.id"`>{{ item.text }}</li>
  </ul>
</template>
```

The reason is that Vue uses the `key` to keep track of which components are which, and to know when to re-render them.

For example, if item with key `1` is removed from the list, Vue will know which component to remove, instead of having to re-render the whole list.

The `key` should thus **uniquely identify** the item in the list.

### More directives : `v-model`

The `v-model` directive is used to create two-way bindings on input elements.

For example, instead of writing the following

```vue
<template>
  <input `v-bind:value="myValue"` `v-on:input="myValue = $event.target.value"` />
</template>
```

We can simply write

```vue
<template>
  <input `v-model="myValue"` />
</template>
```

The `myValue` dynamic variable will then be updated whenever the input changes, and vice versa.

## Back to our project

Let's implement a to-do list.

<!-- slide-front-matter class: center, middle -->

### What we need

We will now create
- A component representing a task
- A component representing a form to add a task
- A component representing the list of tasks

### The task component

Create a new file in the `components` directory, called `ToDoItem.vue`.

It will take a `desc` prop containing the description of the task, and display it.

```vue
<template>
  <div>{{ desc }}</div>
</template>

<script>
  export default {
    props: {
      desc: String
    }
  };
</script>
```

Quick and simple.

You can insert that component in `App.vue` to see that it works.

### The list of tasks

Create a new file in the `components` directory, called `ToDoList.vue`.

It will *store* the list of tasks as state, and display each of them as a `ToDoItem`.

The state will thus be something like
```js
    data() {
      return {
        tasks: ["Buy milk", "Do homework", "Call mom"]
      };
    }
```

And the template will contain something like
```vue
    <div class="tasks">
      <ToDoItem :desc="task" v-for="task, idx in tasks" :key="idx" />
    </div>
```

*Note that, for simplicity, we are using the item's index as the `key` here. This is not ideal, because if an item is removed, all items after it will be re-rendered.*

#### The list of tasks's whole file

Here is the whole file for `ToDoList.vue`.

```vue
<template>
  <div>
    <h2>My to-do list</h2>
    <div class="tasks">
      <ToDoItem :desc="task" v-for="task, idx in tasks" :key="idx" />
    </div>
  </div>
</template>

<script>
  import ToDoItem from "./ToDoItem.vue";

  export default {
    components: {
      ToDoItem
    },
    data() {
      return {
        tasks: ["Buy milk", "Do homework", "Call mom"]
      };
    }
  };
</script>
```

### The input to add a task

To add new tasks, we will need an `<input>` and a `<button>`.

The `<input>` will be bound with `v-model` to a state variable.
```vue
    <input v-model="taskDesc" />
```
```vue
    data() {
      return {
        taskDesc: ""
      };
    }
```

While the button will call a method when clicked.
```vue
    <button @click="addTask">Add</button>
```

```vue
    methods: {
      addTask() {
        console.log("Adding task", this.taskDesc);
      }
    }
```

#### The input component's whole file

The entire component file for `ToDoInput.vue` is as follows.

```vue
<template>
  <div>
    <input v-model="taskDesc" />
    <button @click="addTask">Add</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        taskDesc: ""
      };
    },
    methods: {
      addTask() {
        console.log("Adding task", this.taskDesc);
      }
    }
  };
</script>
```

#### Adding the input to the list

The To-do list can now be updated to include the input.

```vue
<template>
  <div>
    <h2>My to-do list</h2>
    `<ToDoInput />`
    <div class="tasks">
      <ToDoItem :desc="task" v-for="task, idx in tasks" :key="idx" />
    </div>
  </div>
</template>

<script>
  import ToDoItem from "./ToDoItem.vue";
  `import ToDoInput from "./ToDoInput.vue";`

  export default {
    components: {
      `ToDoInput`,
      ToDoItem
    },
    data: // ...
  };
</script>
```

How do we add the task to the list? Let's see.

## Events

Letting children notify their parents.

<!-- slide-front-matter class: center, middle -->

### Event emission

A component can emit an event to its parent using the `this.$emit` method.

```vue
<template>
  <div>
    <input v-model="taskDesc" />
    <button @click="addTask">Add</button>
  </div>
</template>

<script>
  export default {
    data: // ...
    methods: {
      addTask() {
        `this.$emit("task-added", this.taskDesc);`
      }
    }
  };
</script>
```

- The first argument is the name we choose for the event.
- All subsequent arguments are data we want to pass to the parent, if any.

### Event listening

A parent can listen to its children's events like any other event (e.g. `click`, `submit`, etc), i.e. using the `v-on` directive.

```vue
<template>
  <div>
    <ToDoInput `@task-added="addTask"` />
    <!-- ... -->
  </div>
</template>

<script>
  import ToDoInput from "./ToDoInput.vue";

  export default {
    components: // ...
    data: // ...
    methods: {
*      addTask(taskDesc) {
*        console.log("Adding task", taskDesc);
*        this.tasks.push(taskDesc);
*      }
    }
  };
</script>
```

Try it and see what happens!

### Adding tasks

What happens is

1. As we type into the input field, the `taskDesc` state variable is updated.

2. When we click the "Add" button, the `addTask` method is called.

3. This method emits a `task-added` event, passing the `taskDesc` to the parent.

4. When the parent receives this event, it adds the task to its list of tasks.

5. VueJS, noticing that the list of tasks has changed, **re-renders the list of tasks for you!**


### Completing a task

We will add a button to each task, that will notify the parent when clicked.

```vue
<template>
  <div>
*    <input type="checkbox" @change="completeTask" />
    {{ desc }}
  </div>
</template>
```

```vue
    methods: {
*      completeTask() {
*        this.$emit("task-completed");
*      }
    }
```

### Removing completed tasks

The parent will listen to the `task-completed` event, and remove the task from the list.

```vue
    <ToDoItem
        :desc="task"
        v-for="(task, idx) in tasks"
        :key="idx"
        `@task-completed="removeTask(idx)"` />
```

```vue
    methods: {
      addTask(taskDesc) {
        // ...
      },
*      removeTask(idx) {
*        this.tasks.splice(idx, 1);
*      }
    }
```

Again, when VueJS notices that the list has changed, it will automatically rerender it, so we're done!


## Final VueJS features

For the curious.

<!-- slide-front-matter class: center, middle -->

### Lifecycle hooks

The component description objects can contain special methods that are called at different points in the component's lifecycle.

```vue
<script>
  export default {
    // ...
    created() {
      // Called when the component is created
    },
    mounted() {
      // Called when the component is mounted to the DOM
    },
    updated() {
      // Called when any of the component's data or props changes
    },
    destroyed() {
      // Called when the component is destroyed
    }
    // and many more
  };
</script>
```

See [here](https://vuejs.org/guide/essentials/lifecycle.html) for a complete list.

### The `this` keyword

In VueJS, the `this` keyword allows you to access the component's state, props, methods, etc. from methods and lifecycle hooks.

```vue
<script>
  export default {
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        `this`.count++;
      }
    }
  };
</script>
```

Note however that it was not necessary from the `<template>` section:

```vue
<template>
  <button @click="`increment`">Increment (currently {{ `count` }})</button>
</template>
```

### Slots (a.k.a. children)

A component's `<template>` can have a `<slot>` element, which will be replaced by the component's children.

Let's say we have a `Popup` component that can contain any content.

```vue
<template>
  <div class="popup">
    <h2>{{ title }}</h2>
    `<slot />`
  </div>
</template>
```

Any other component using `Popup` will be able to insert content into the `slot` when using it.

```vue
<template>
  <Popup title="My Popup">
*    <p>This is the content of my popup.</p>
  </Popup>
</template>
```

Everything between `<Popup></Popup>` will replace the `<slot>` element in `Popup`'s template.

## Let's finish that to-do list

Make it look professional!

<!-- slide-front-matter class: center, middle -->

### Preventing empty tasks

We will display an error message if the user tries to add an empty task.

Let's create an error popup component.

```vue
<template>
  <div class="error-popup">
    <slot/>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .error-popup {
    color: red;
  }
</style>
```

### Using the error popup

The input component will store an error message, and display the error popup when that message is not empty.

```vue
    data() {
      return {
        taskDesc: "",
        `errorMessage: ""`
      };
    },
```

```vue
    <ErrorPopup `v-if="errorMessage != ''"`>
      {{errorMessage}}
    </ErrorPopup>
```

Of course, to use it, we'll need to import it and list it as a child component.

```vue
<script>
*  import ErrorPopup from "./ErrorPopup.vue";
  export default {
*    components: {
*      ErrorPopup
*    },
    // ...
  };
</script>
```

### Showing the error popup

Finally, we can set an error message when the user tries to add an empty task.

```vue
    methods: {
      addTask() {
*        if (this.taskDesc === "") {
*          this.errorMessage = "Task description cannot be empty";
*          return;
*        }
        this.tasks.push(this.taskDesc);
        this.taskDesc = "";
      }
    }
```

Again, VueJS will automatically detect that there is an error message, and show the popup, because of the `v-if` we used.

### Hiding the popup

We don't want that popup to show forever. Since we only display it when it is not empty, we can simply clear it when the user types into the input.

```vue
<template>
  <div>
    <input v-model="taskDesc" `@input="errorMessage = ''"` />
    <button @click="addTask">Add</button>
    <ErrorPopup v-if="errorMessage != ''">
      {{errorMessage}}
    </ErrorPopup>
  </div>
</template>
```

VueJS will then see that the error message is empty, and hide the popup.

## Full result: To-Do List

<!-- slide-front-matter class: center, middle -->

[**Clone the full project here**](https://github.com/heig-mdt-gio1/vuejs-demo)

## Cheat Sheet Components

<p align="center">
  <img src='https://miro.medium.com/max/1000/1*C4A0g1KYpa_olbSJcxAEBA.png' class='w95' />
</p>
<sup>[**Source**][cpt-cheatsheet]</sup>

## Some Best Practices

- Always use :key inside v-for
- Use kebab-case for events
- Declare props with camelCase and use kebab-case in templates
- Data should always return a function
- Don’t use v-if with v-for elements
- Use PascalCase or kebab-case for components
- Base components should be prefixed accordingly
- Components declared and used ONCE should have the prefix “The”
- Template expressions should only have basic Javascript expressions

<sup>[**Source**][vue-best-pratices]</sup>

[wiki-vuejs]: https://en.wikipedia.org/wiki/Vue.js
[extent-doc]: https://v3.vuejs.org/guide/introduction.html
[french-doc]: https://fr.vuejs.org/v2/guide/index.html
[vue-characteristics]: https://www.cmarix.com/blog/why-vuejs-is-so-popular-for-front-end-development/
[vue-doc-if]: https://v3.vuejs.org/guide/conditional.html#v-if
[vue-doc-for]: https://v3.vuejs.org/guide/list.html#mapping-an-array-to-elements-with-v-for
[vue-doc-model]: https://v3.vuejs.org/guide/forms.html#basic-usage
[vue-doc-bindclass]: https://v3.vuejs.org/guide/class-and-style.html#binding-html-classes
[vue-doc-bindprop]: https://v3.vuejs.org/guide/component-basics.html#passing-data-to-child-components-with-props
[vue-doc-event]: https://v3.vuejs.org/guide/events.html#listening-to-events
[vue-doc-cpt]: https://v3.vuejs.org/guide/single-file-component.html#introduction
[vue-doc-teleport]: https://v3.vuejs.org/guide/teleport.html#using-with-vue-components
[vue-best-pratices]: https://learnvue.co/2020/01/12-vuejs-best-practices-for-pro-developers/
[vue-hooks]: https://learnvue.co/2019/12/a-beginners-guide-to-vuejs-lifecycle-hooks/
[vue-cpt-communication]: https://learnvue.co/2020/08/an-introduction-to-vue3-props-a-beginners-guide/
[vue-cpt-props]: https://v3.vuejs.org/guide/component-props.html#prop-types
[vue-cpt-event]: https://v3.vuejs.org/guide/component-custom-events.html#event-names
[cpt-architecture-img]: https://snipcart.com/blog/vue-component-example-tutorial/
[cpt-cheatsheet]: https://medium.com/@_shirish/thinking-in-components-with-vue-js-a35b5af12df
[cpt-composition]: https://stackoverflow.com/questions/46614002/possible-to-use-vuejs-sfc-components-with-with-template-in-rendered-html
[cpt-example]: https://reactgo.com/vuejs-components-tutorial/
[cpt-step-by-step]: https://gist.github.com/thibaud-c/7aed994b552e1ca31b888d1254ff5103
[cpt-event-example]: https://www.telerik.com/blogs/how-to-emit-data-in-vue-beyond-the-vuejs-documentation
[teleport-example]: https://learnvue.co/2020/09/an-introduction-to-vue-teleport-a-new-feature-in-vue3/
[todo-example]: https://codesandbox.io/s/o29j95wx9
