# Toast Implementations
This document studies the various ways existing libraries implements toasts.

## Background
In order to make distinctions between existing toast implementations clearer, this study compiles more detailed information about individual libraries.
These libraries have differences in design and implementation that are useful to study to get a general consensus of what a toasts like and how they act.
The libraries studied are:

- [Polymer `<paper-toast>`](#polymer-paper-toast)
- [Material-UI Snackbar](#material-ui-snackbar)
- [Android `Toast`](#android-toast)
- [react-toastify](#react-toastify)
- [ngx-toastr](#ngx-toastr)
- [Bootstrap](#bootstrap)

Each study covers the details and trade-offs of the toast library, by taking an in-depth look at the API, then extracting key takeaways.

## [Polymer `<paper-toast>`](https://github.com/PolymerElements/paper-toast)
Polymer `<paper-toast>` is a library from Google's Polymer team to provide a subtle toast notification.

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

To control when the toast opens and closes, use the `open()` and `close()` methods from JavaScript - or use buttons to call those methods.
For the toast to persist until `close()` is called, set `duration` to 0.

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

Finally, to color the toast the library provides the two CSS properties, `--paper-toast-background-color` and `--paper-toast-color`.

### Notable Features & Details

#### Custom HTML via Children
`<paper-toast>` allows the developer to customize the contents of the toast with custom HTML passed in as children.

#### Positioning Axes
`horizontalAlign` and `verticalAlign` provide attributes to position the toast intuitively.

#### Dismissal
The `<paper-toast>` holds onto information about how it was dismissed the last time it was shown, in attributes called `canceled` and `closingReason`.

#### Focus
A few of the minute controls concern focus. The `noAutoFocus` attribute, which defaults to true (preventing autofocus), allows the user to decide if the `<paper-toast>` or its children will disable autofocus. 
The `restoreFocusOnClear` attribute restores page's focus once the toast is cleared from the screen.

#### Takeaways
- Purpose-built well for pure HTML.
- There are many granular controls, concerning things like parent elements and sizing and alignment inheritance.
- The component comes with events, for when the toast opens and the alignment changes (*not for when it closes though*).
- Only one `<paper-toast>` will be visible on the screen at a time. If you trigger a second it will replace the first.
- **Warning**: `<paper-toast>` is affected by the stacking context of its container, so to guarantee it shows up on the top layer it must be placed at the top level (`<body>`) element.
    - How to properly handle top layer is an ongoing debate (see [here](https://github.com/whatwg/html/issues/897#issuecomment-198512778))

## [Material-UI Snackbar](https://material-ui.com/api/snackbar/)

*TODO: Fill in study for this library*

## [Android `Toast`](https://developer.android.com/guide/topics/ui/notifiers/toasts)
Android `Toast` is a simple toast implementation built by the Android team for usage in Android apps.

### Design & Sample Code
**Note**: Since Android development is done in Kotlin all code samples will be Kotlin.

To trigger displaying a simple Android `Toast`, put this in your Kotlin:

```kotlin
val text = "Hello toast!"
val duration = Toast.LENGTH_SHORT

val toast = Toast.makeText(applicationContext, text, duration)
toast.show()
```

This creates a toast object filled with a context, some text, and a duration, which is triggered to display by the `toast.show()` method.
This will show up on the bottom of the screen by default.
To control the position of the toast, set the gravity, like this:

```kotlin
toast.setGravity(Gravity.TOP or Gravity.LEFT, 0, 0)
```

This sample will move the toast to the top left of the screen.
The final two parameters are used to offset the toast from its center of gravity, so this:

```kotlin
toast.setGravity(Gravity.TOP or Gravity.LEFT, 10, 10)
```

Will show the toast further down and further right.
The toast can also be injected with a custom layout, which requires more complex Kotlin, explained [here](https://developer.android.com/guide/topics/ui/notifiers/toasts#CustomToastView).
The `text`, `view`, `gravity`, and `duration` of the toast are all the elements the developer can control when working with this very straightforward component.


### Notable Features & Details

#### Gravity
The library takes the Android approach to positioning, by letting the user define the Gravity of the element, along with offset values for the axes.

#### Duration Constants
The library comes with baked in constants for displaying the toast for long and short periods of time.

### Takeaways
- High opinion, low control.
- The API for the `Toast` object provides getters and setters for each of `text`, `view`, `gravity`, `offset` and `duration`.
- Beyond getters and setters, the only control the object allows is `.makeText()`, `.show()` and `.cancel()`.

## [react-toastify](https://github.com/fkhadra/react-toastify)
`react-toastify` is a React component library by author [@fkhadra](https://github.com/fkhadra) for rich, extensible notification toasts.

### Design & Sample Code

To use a `react-toastify` toast requires some simple JavaScript:

```js
class App extends Component {
  notify = () => toast("Very simple toast!");

  render(){
    return (
      <div>
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
}
```

`react-toastify` uses the explicit component pattern, by having the developer render a React `ToastContainer` component (the recommendation is to put this in the application root).
This single component will render all toasts called from JavaScript and can be configured with global options.
However, the library allows the developer a lot of freedom, supporting multiple `ToastContainer`s as well as no `ToastContainer`, though one is recommended.

When the `toast()` is called with a message and a props object, it is displayed in the toast container, with the toast props overriding the `ToastContainer` props, like so:

```js
class App extends Component {
  tenSecondToast = () => toast("This toast will self destruct in 10...", { autoClose: 10000 });
  normalToast = () => toast("This is a normal toast");

  render(){
    return (
      <div>
        <button onClick={this.tenSecondToast}>Close after 10000ms seconds</button>
        <button onClick={this.normalToast}>Close after 5000ms (default)</button>
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}
```

The first button creates a toast that dismisses in 10 seconds, overriding the `ToastContainer` default.
The second provides no `autoClose` value, so it dismisses in the default 5 seconds.

For some of the more common controls, the toast can be configured like so:

```js
class App extends Component {
  topRightWarning = () => toast('Warning!', {
    type: toast.TYPE.WARNING,
    position: toast.POSITION.TOP_RIGHT,
    onClose: ({ props }) => window.alert('I warned you') // props: all props passed to rendered toast component
  });

  render() {
    return (
      <button onClick={this.topRightWarning}>Warn me</button>
      <ToastContainer autoClose={5000} />
    );
  }
}
```

`react-toastify` supports built-in themes for toasts, such as `success`, `info`, and `warning`, among others.
It also provides intuitive positioning, that can be set from the toast or configured on the `ToastContainer`.
Additionally, callbacks like `onClose` and `onOpen` allow the toast to have intelligent effects when the user interacts with it.

### Notable Features & Details

#### Toast ID
the `toast()` function returns an ID of the toast it creates, which can be used to act upon that toast.
For instance, with the toast ID the toast can be dismissed, updated, and checked to see if it's active.

#### Mobile
On mobile toasts will automatically take all available width, and all toasts are swipeable / draggable to dismiss.

#### Styling
Library provides fields `className`, `toastClassName`, and, `progressClassName` for the developer to pass in CSS classes.

#### Render Custom Component
To customize the view the `toast` function can take in a React component, which will receive the function required to close the toast as props (though it won't get the toast ID).

#### cssTransitionHelper
The library provides a `cssTransitionHelper` helper function to customize animations without having to work directly with `react-transition-group`.
The helper allows the dev to set classes and durations for `enter` and `exit`, as well as make transitions position specific.

### Takeaways
- Extremely unopinionated and configurable; the developer has near total control.
- Component pattern is optional, only needs one component, but allows multiple.
- Close button is default, but can be replaced with a custom close button.
  - Separate from passing in a custom React Component.
- The toast can be configured to display after a certain delay.
  - I'm not sure what the advantage this has over firing the toast in a setTimeout.
- Passing null into a property resets it to default (useful for `update()`).
- RTL is supported, can be toggled by setting a flag.

## ngx-toastr

*TODO: Fill in study for this library*

## Bootstrap

*TODO: Fill in study for this library*

## Findings

*TODO: Fill in overall findings for these implementations*
