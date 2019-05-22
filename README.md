# std-toast
This document scopes out a web platform API for a 'toast' pop-up notification.

## Why?

Modern web applications allow users to complete lots of actions per page,
which necessitates providing clear feedback for each action.
Toast notifications are commonly to unobtrusively provide this feedback.
Many libraries in a variety of frameworks implement a version of toast,
but the web has no built-in API to address the use case.
*TODO: why should it? What difference does it make?*

## Sample code

The standard toast can be used according to two different patterns:

```html
<script type="module">
import 'std:elements/toast';
</script>

<std-toast id="sample-toast">
    Hello World!
</std-toast>
```

```js
import { showToast } from 'std:elements/toast';

document.querySelector('#sample-toast').showToast();
```

The first allows the developer to define a `<std-toast>` HTML element,
then show it via a method in JavaScript.

```js
import {showToast } from 'std:elements/toast';

const toast = showToast("Hello World!", {
    theme: "info",
    duration: 3000
});
```

## Goals

## Proposed API

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

## References

## Acknowledgements
