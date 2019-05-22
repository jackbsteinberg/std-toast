# std-toast
This document scopes out a web platform API for a 'toast' pop-up notification.

## Sample code

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

## Patterns

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
const toast = showToast("Message", {
    theme: "info",
    duration: 3000
});
```

### Show toast in container
```html
<div id="container"></div>
```

```js
const toast = showToast("Message");
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
toast.showToast();
// TODO: Is this the best way? How does the duplication work?
```