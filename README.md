# std-toast
This document scopes out a web platform API for a 'toast' pop-up notification.

## Why?

Modern web applications allow users to complete lots of actions per page,
which necessitates providing clear feedback for each action.
Toast notifications are commonly used to unobtrusively provide this feedback.
Many libraries in a variety of frameworks implement a version of toast,
but the web has no built-in API to address the use case.
*TODO: why should it? What difference does it make?*

## Sample code

The standard toast can be used according to two different patterns:

```html
<script type="module">
import 'std:elements/toast';
</script>

<std-toast id="sample-toast" theme="info">
    Hello World!
</std-toast>
```

```js
document.querySelector('#sample-toast').show({
    duration: 3000
});
```

The first defines a `<std-toast>` HTML element,
then shows it with configurations via a method on the element.

```js
import { showToast } from 'std:elements/toast';

const toast = showToast("Hello World!", {
    theme: "info",
    duration: 3000
});
```

The second imports the `showToast` function from the standard toast,
which takes in a message and some configurations and creates and shows a toast in the DOM.

## Goals

Across popular toast implementations there are recurring patterns,
which the standard toast aims to accomplish natively.

- The component will be accessible by default;
  native accessibility is is a strong priority for toasts,
  as they can be difficult to make properly accessible.

- Toast implementations are often shaped similarly,
  and a goal of the standard toast is to make it as easy as possible for developers
  to build and style toasts that conform to those common shapes.

    - Toasts almost always support a message, action, and close button.

    - Toasts often support icons and titles.

- The positioning of the toast must be intuitive,
  so the standard toast will come with built-in support for common positions,
  as well as a sensible default.

- To balance ease of use with customization,
  the standard toast will support creating and showing with one JavaScript function,
  as well as writing a custom view with a `<std-toast>` element
  and showing that with a method.

- The standard toast will come with support for showing multiple toasts,
  either by stacking them in the view,
  or queueing them and displaying sequentially.

These goals will be prioritized during implementation,
by ensuring the application and styling for each case is simple and east to understand.

## Proposed API

The element is provided as a [JavaScript Standard Library](https://github.com/tc39/proposal-javascript-standard-library/blob/master/README.md).

### Attributes

*Note @me: view related goes in attributes*

*TODO(me): how to structure `<std-toast>` info vs `showToast` info?*

These attributes and default values will be attached to the `<std-toast>` HTML element.

- [Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)
- `open`: `Boolean` - default: false
- `theme`: `String` - default: 'default' (??)
- `postition`: `String` - default: 'bottom-right' (??)

*TODO(me): how to explain things that can be both attributes and properties (elt + js patterns)*

*TODO(me): where to put action and how to format it?*


### Properties & Functions

The std-toast library will come with a `showToast` function,
which will handle the case of opening a toast
and optionally creating it as well in Javascript.

#### `showToast(message, options)`

Creates a toast object displaying the `message`
with an object of the `options`.

The options the developers can configure are:

- `duration`
- `closeButton`
- `multiple` (??)
- `newestOnTop` (??)

### Pseudo classes

- `:hover`
- `:focus`

### Events

The `<std-switch>` will emit events when it is opened and when it is closed.
*TODO(me): should it emit an event when the action is taken?*
*TODO(me): event for onFocus?*

### Appearance customization

*TODO(me): a flag for platform-dependent appearance (like std-switch question 
[here](https://github.com/tkent-google/std-switch#appearance-customization))*

## Common Patterns

### Show existing toast
```html
<std-toast id="sample-toast">
    Hello World!
</std-toast>
```

```js
document.querySelector('#sample-toast').showToast();
```

### Create and show new toast with options
```js
const toast = showToast("Hello World!", {
    theme: "info",
    duration: 3000
});
```

### Show toast in container
```html
<div id="container"></div>
```

```js
const toast = showToast("Hello World!");
document.querySelector("#container").append(toast);
```

### Duplicate existing toast
```html
<std-toast id="#sample-toast">
    Hello World!
</std-toast>
```

```js
const toast = document.querySelector('#sample-toast');
toast.showToast();

const duplicateToast = toast.cloneNode(true);
duplicateToast.showToast();

// TODO: The duplicates made like this must be cleaned up from the DOM.
```

### Define config object

```js
const configs = {
    theme: 'info',
    duration: 3000
}

const toast1 = showToast("number 1", configs);
const toast2 = showToast("number 2", configs);
```
