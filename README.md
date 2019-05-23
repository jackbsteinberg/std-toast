# std-toast
This document scopes out a web platform API for a 'toast' pop-up notification.

## Why?

Modern web applications allow users to complete lots of actions per page,
which necessitates providing clear feedback for each action.
Toast notifications are commonly used to unobtrusively provide this feedback.

Many libraries in a variety of frameworks implement a version of toast
(see [research](./study-group/)),
but the web has no built-in API to address the use case.
By providing a toast API as part of the web platform's standard library,
the web becomes more competitive with other app development platforms,
and web application developers can spend less of their time and bytes
on implementing this pattern.

Toasts are also a deceptively-tricky pattern to get right.
They require special accessibility considerations,
and scenarios involving multiple toasts need special handling.
[Not all libraries account for these subtleties](./study-group/).
By providing a built-in toast control that fully handles these aspects,
we can level up the typical toast experience for both developers and users of the web.

Finally,
the ecosystem can benefit from a shared understanding of how to create and style toasts.
If the platform provides a toast,
then all libraries and components can freely use toasts to communicate to their users.
Whereas,
if toasts can only be found in libraries,
then importing a toast-using component also means importing their opinion on what the best toast library is.
In the worst case,
this can lead to multiple uncoordinated toast libraries acting on a single page,
each of which needs its own styling and tweaks to fit in to the application.
If instead libraries and components all use the standard toast,
the application developer can centrally style and coordinate them.


## Sample code

The standard toast can be used according to two different patterns.

The first defines a `<std-toast>` HTML element,
then shows it with configurations via a method on the element.
This can be used to declaratively predefine toasts the application will need,
and then show them inside the application logic.


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

The second imports the `showToast()` function from the `"std:elements/toast"` module,
which takes in a message and some configurations and creates and shows a toast in the DOM.
This is more convenient for one-off toasts,
or for JavaScript-driven situations,
similar to how `alert()` is currently used.

```js
import { showToast } from 'std:elements/toast';

const toast = showToast("Hello World!", {
    theme: "info",
    duration: 3000
});
```

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

## Proposed API

The element is provided as a [built-in module](https://github.com/tc39/proposal-javascript-standard-library/blob/master/README.md), named `"std:elements/toast"`.

### The `<std-toast>` element

#### Attributes

- [Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)
- `open`: a boolean attribute, determining whether the toast is visible or not (according to the default styles). By default toasts are not shown.
- `theme`: one of `"default"`, ???, or ???, conveying the semantic priority of the toast, and influencing its styling (both default and user-provided)
- `position`: one of `"top-left"`, `"top-center"`, `"top-right"`, `"middle-left"`, `"middle-center"`, `"middle-right"`, `"bottom-left"`, `"bottom-center"`, or `"bottom-right"`. The default (if the attribute is omitted or set to an invalid value) is `"bottom-right"`.
    - TODO: this seems stylistic; should it be controlled via CSS instead?
    - TODO: these are physical positions; should we use [logical ones](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts) instead?
- `closebutton`: a boolean attribute, determining whether an explicit close button is shown. By default toasts do not have a close button.

All attributes will be reflected as properties on the element's JavaScript interface.
For example:

```js
const toast = document.createElement('std-toast');
console.log(toast.open); // false
```

#### Contents

The `<std-toast>` element can be used as a generic container,
but will work best (in terms of default styling and events) if the developer conforms to the following content model:

- The first child node,
  typically either a text node or a container like `<p>`,
  provides a message.
- If more than one child node is present,
  then the last child element,
  which can be either an `<a>` or a `<button>`,
  provides a call to action.

TODO: what about title or icon? They should potentially also be accomodated, in a similar fashion.

Thus, the following would all work well out of the box:

```html
<std-toast>Hello world!</std-toast>

<std-toast><p>Hello world!</p></std-toast>

<std-toast>
  <p>Hello world!</p>
  <button>Click me!</button>
</std-toast>

<std-toast>
  <p>Hello world!</p>
  <a href="https://example.com/" target="_blank">Click me!</button>
</std-toast>
```

These can equivalently be created via JavaScript:

```js
// TODO: write this once we figure out the JS API for supplying HTML messages,
// and for supplying customizable actions
```

More complex toasts,
that don't fit the above content model,
would require more custom handling on the part of the developer:

```html
<std-toast>
  <p>Hello world!</p>
  <p>A second paragraph?!</p>

  <button>Action 1</button>
  <button>Action 2</button>
</std-toast>
```

Such an unusual toast would still integrate with other toasts in terms of stacking and positioning behavior,
and some of the default styles that are inherited may be useful.
But the page author will need to handle the action clicks themselves (instead of using the `"actionclick"` event),
and will need to add additional styling to handle the extra contents.

TODO: when we have a prototype, link to/show an example of this in action.

#### Methods

The `.show(options)` function shows a toast element,
by toggling its `open=""` attribute to true.
The `options` include:

- `duration`: how long to show the toast, in milliseconds. Defaults to ???
- `multiple`: ???
- `newestOnTop`: ???

TODO: how do `multiple` and `newestOnTop` work?
Should those be a global setting?
Per container?
How do we deal with different toasts having different values?

#### Events

A `<std-toast>` element can fire the following events:

- `"open"`: the toast was shown
- `"close"`: the toast was closed, either explicitly by the user, or via the timeout.
  (Note: if animations were applied, the toast may not be entirely invisible at the time this event fires)
    - TODO: should we consider separate events for the start and end of any close animation?
      This seems hard to do correctly if the user customizes the animation, though.
- `"actionclick"`: the toast's call-to-action button or link was clicked, if one exists

### `showToast(message, options)`

The `"std:elements/toast"` module also exports a convenience function,
`showToast()`,
which allows creating and showing toasts entirely from JavaScript.
Behind the scenes,
`showToast()` creates a `<std-toast>`,
sets it up using the given message and options,
inserts it as the last child of `<body>`,
and then adds the `open=""` attribute,
to make the toast visible.
Finally,
it returns the created `<std-toast>` element,
allowing further manipulation by script.

`message` is a string that will be inserted as a text node
(TODO: or as a `<p>` element?) into the created `<std-toast>`.

TODO: can `message` contain HTML?

`options` allows configuring both the attributes of the `<std-toast>`,
and the options for this particular showing of the toast.
Thus, the possible options are:

- `theme`, like the attribute
- `position`, like the attribute
- `closeButton`, like the attribute
- `duration`, like the `show()` option
- `multiple`, like the `show()` option
- `newestOnTop`, like the `show()` option

TODO: how do we deal with actions with this API? Ideas:
- Provide an element
- Provide a HTML string
- Provide a URL (to create a link) or a function (to create a button)

### Default styles

TODO: figure out some default styles, and state them here.

### Appearance customization

TODO: explain any API for appearance customization,
beyond just normal CSS.
For example,
a CSS shadow part for the close button,
or some CSS variables.

## Common Patterns

### Show existing toast
```html
<std-toast id="sample-toast">
    Hello World!
</std-toast>
```

```js
document.querySelector('#sample-toast').show();
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

### Reusable config object

```js
const configs = {
    theme: 'info',
    duration: 3000
}

const toast1 = showToast("number 1", configs);
const toast2 = showToast("number 2", configs);
```

### Styling the toast

TODO
