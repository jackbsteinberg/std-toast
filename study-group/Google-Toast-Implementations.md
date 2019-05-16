# Google Toast Implementations
This document studies the various ways Google implements toasts, in Polymer, Material UI, and Android.

## Background
Google has a range of different component library solutions which cover a variety of usages, many of which implement some toast-like element.
The company offers:

- [Polymer `<paper-toast>`](#polymer-paper-toast)
- [Material UI Snackbar](#material-ui-snackbar)
- [Android Toast](#android-toast)
- [Android Snackbar](#android-snackbar)

Interestingly, Google is the only library provider I could find who uses the term `snackbar` to refer to an actionable, dismissable toast.
The implementations have internal consistency in design and implementation, and demonstrate popular patterns for toast APIs, which make them good candidates to examine.

This study covers the details and trade-offs of the various toast-like feedback pop-ups Google libraries provide, by taking an in-depth look at each implementation, then extracting some key takeaways.

## [Polymer `<paper-toast>`](https://github.com/PolymerElements/paper-toast)
Polymer `<paper-toast>` is a library released by Google's Polymer team to provide a simple Material Design toast notification.

### Design & Sample Code
To use `<paper-toast>`, use something like this in HTML:

```html
<paper-toast text="Hello world!" opened></paper-toast>
```

This will display a notification with the text "Hello World!" that will stay open for 3 seconds (default).
To change the default length of time it displays, set the `duration` attribute.

```html
<paper-toast text="This message closes in 5 seconds!" duration="5000" opened></paper-toast>
```

To control when the toast opens and closes, use the `.open()` and `.close()` methods from JavaScript - or use buttons to call those methods.
For the toast to persist until `.close()` is called, set `duration` to 0.

```html
<button onclick="toast1.open()">Persistent toast</button>

<paper-toast id="toast1" duration="0" text="This toast sticks around!">
  <button onclick="toast1.toggle()">Close it!</button>
</paper-toast>
```

To put a `<paper-toast>` into a specific container, set the `fitInto` attribute to the id of that container.

```html
<div id="container0">
...
</div>

<paper-toast id="toast2" fitInto="container0" text="This fits perfectly!"></paper-toast>
```

Finally, to style the toast set the CSS properties `--paper-toast-background-color` and `--paper-toast-color` on the `id` of the toast in the stylesheet.

### Notable Features & Details
The Polymer `<paper-toast>` library comes built with a lot attributes for granular control, and I explore some of these attributes and design choices in this section.

#### Permits Custom HTML
`<paper-toast>` allso the developer to customize the contents of the toast with custom HTML passed in as children.

#### Intuitive Positioning
`horizontalAlign` and `verticalAlign` provide attributes to position the toast intuitively.

#### Dismissal
The `<paper-toast>` holds onto information about how it was dismissed the last time it was shown, in attributes called `canceled` and `closingReason`.

#### Focus
A few of the minute controls concern focus. The `noAutoFocus` attribute, which defaults to true (preventing autofocus), allows the user to decide if the `<paper-toast>` or its children will disable autofocus. 
The `restoreFocusOnClear` attribute restores page's focus once the toast is cleared from the screen.

#### Notes
- There are many granular controls, concerning things like parent elements and sizing and alignment inheritance.
- The component comes with events, for when the toast opens and the alignment changes (*not for when it closes though*).
- Only one `<paper-toast>` will be visible on the screen at a time. If you trigger a second it will replace the first.
- **Warning**: `<paper-toast>` is affected by the stacking context of its container, so to guarantee it shows up on the top layer it must be placed at the top level (`<body>`) element.
    - How to properly handle top layer is an ongoing debate (see [here](https://github.com/whatwg/html/issues/897#issuecomment-198512778))

### Key Takeaways
The Polymer `<paper-toast>` library is a good example of an extensible toast implementation built for pure HTML. 
It uses the attributes of the element to control things like when it displays, when it closes, timeout, position, and many more granular settings. 
It is nicely very unopinionated on certain tradeoffs, allowing the developer to fine tune the `<paper-toast>`'s behavior. 
It is not, however, strictly agnostic, as it disallows displaying multiple toasts and does not provide events or callbacks for when the toast closes.

## Material UI Snackbar

*TODO: Fill in study for this library*

## Android Toast

*TODO: Fill in study for this library*

## Android Snackbar

*TODO: Fill in study for this library*

## Findings

*TODO: Fill in overall findings for this group of implementations*