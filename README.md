# std-toast
This document scopes out a web platform API for a 'toast' pop-up notification.

## Sample code

HTML
```html
<script type="module">
import 'std:elements/toast';
</script>

<std-toast id="message">
    Message
</std-toast>
```

JavaScript
```js
import Toast from 'std:elements/toast';

Toast('message').display({
    timeout: 3000,
    closeButton: true,
    theme: Toast.INFO,
    preventDuplicates: true
});
```

## Notes (live thoughts)
### Bin
- How do I handle duplicates like this?
- Definitely avoid query selector
    - at least for API
- How to import in both JS and HTML?
    - How do modules work?
- It looks like duplicates are gonna be a bit of an issue ...
- Theme should be an object of CSS to pass in
    - Comes with some defaults built into the toast API
- With this pattern, do I have a way of capping a max # of toasts?
    - As of right now I can't think of one
- Animations / transitions?
    - How to do them? CSS?
    - Provide some built ins?
- Without ID linking to HTML element the `Toast(id)` function still creates a toast object
- How is accessibility handled?
    - With ID: leave it to them? put some on by default?
        - `aria-atomic`? `aria-live`?
    - Without ID: Must bake it in deliberately

### Structure Notes
- `<std-toast>` w/ attributes
- Toast class from JS
- Create object with `Toast(id)` method
    - This either creates a new toast or links with toast in DOM by ID
    - **Note**: Unsure how to do duplicates this way
- Use `display` or `show` method to show it
    - What should be the right name?
    - Pass in an object for configurations
- Question: Can I have the result of `Toast(id)` be an HTML element,
  and work with it in JavaScript from there?
    - But then duplicates would have strange behavior

### Rough API

**HTML**
- `id`: asdf
- `class`: asdf
- `contained`: boolean, display this toast in the container it sits in, not at the body

**JavaScript**
- `timeout`: asdf
- `closeButton`: asdf
- `theme`: asdf
- `preventDuplicates`: boolean, disallows duplication of the toast