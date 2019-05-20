# Toast Implementations
This document studies the various ways existing libraries implements toasts.

## Background
In order to understand subtle differences between existing toast implementations, 
this study compiles more detailed information about individual libraries.
These libraries differ in design and implementation 
in ways that are useful to gauge consensus on what toasts are and how they act.
The libraries studied are:

- [Polymer `<paper-toast>`](#polymer-paper-toast)
- [Material-UI Snackbar](#material-ui-snackbar)
- [Android `Toast`](#android-toast)
- [react-toastify](#react-toastify)
- [ngx-toastr](#ngx-toastr)
- [Bootstrap Toast](#bootstrap-toast)

Each study covers the details and trade-offs of each toast library
by taking an in-depth look at code samples, 
then extracting key takeaways.

## [Polymer `<paper-toast>`](https://github.com/PolymerElements/paper-toast)
Polymer `<paper-toast>` is an HTML Element from Google's Polymer team.

### Design & Sample Code

```html
<paper-toast text="Hello world!" opened></paper-toast>
```

This will display a notification with the text "Hello World!" 
that will stay open for 3000ms by default.
To change the length of time, 
set the `duration` attribute.

```html
<paper-toast text="This message closes in 5 seconds!" duration="5000" opened></paper-toast>
```

To control when the toast opens and closes,
use the JavaScript `open()` and `close()` methods.
For the toast to persist until `close()` is called, 
set `duration` to 0.

```html
<button onclick="toast1.open()">Persistent toast</button>

<paper-toast id="toast1" duration="0" text="This toast sticks around!">
  <button onclick="toast1.toggle()">Close it!</button>
</paper-toast>
```

The close button is a child of the `<paper-toast>`,
so it will show up inside it.
To display a `<paper-toast>` into a specific container, 
set the `fitInto` attribute to the id of that container.

```html
<div id="toastInHere">
  <button onclick="toast2.toggle()">OPEN TOAST</button>
...
</div>

<paper-toast id="toast2" fitInto="toastInHere" text="This toast fits into the container."></paper-toast>
```

Finally, to color the toast the library provides the two CSS properties, 
`--paper-toast-background-color` and `--paper-toast-color`.

### Notable Features & Details

#### Custom HTML via Children
`<paper-toast>` allows the developer to customize the contents of the toast 
with HTML passed in as the element's children.

#### Positioning Axes
The `horizontalAlign` and `verticalAlign` attributes position the toast intuitively.

#### Dismissal
The `<paper-toast>` holds onto information about how it was dismissed the last time it was shown, 
in attributes called `canceled` and `closingReason`.

#### Focus
The `noAutoFocus` attribute, which defaults to true,
gives the user the choice to enable autofocus. 
The `restoreFocusOnClear` attribute restores users' focus to its previous location once the toast is removed from the screen.

#### Takeaways
- Purpose-built for pure HTML.
- There are many granular controls, 
  concerning things like parent elements and sizing / alignment inheritance.
- The component comes with events, 
  for when the toast opens and the alignment changes (*not for when it closes though*).
- Only one `<paper-toast>` will be visible on the screen at a time.
  If a second is triggered it will replace the first.
- **Warning**: `<paper-toast>` is affected by the stacking context of its container, 
  so to guarantee it shows up on the top layer it must be placed at the top level (`<body>`) element.
    - How to properly handle top layer is an ongoing debate (see [here](https://github.com/whatwg/html/issues/897#issuecomment-198512778))

## [Material-UI Snackbar](https://material-ui.com/api/snackbar/)
Material-UI Snackbar is an interactive React component from Google's Material-UI library.

### Design & Sample Code
"Snackbar" is the name used in many Google component libraries 
for an extensible, interactable toast component.
Unlike Google *Toasts*, the Snackbar can have a call to action and a close button,
alongside other differentiating properties.

```jsx
import { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class SimpleSnackbarDemo extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Open simple snackbar</Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span id="message-id">Note archived</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <Button key="close" color="secondary" size="small" onClick={this.handleClose}>
              CLOSE
            </Button>
            ...
          ]}
        />
      </div>
    );
  }
}
```

The Snackbar is a React component, with the configurations passed as props.
Styling the component can be done by passing CSS to the `classes` property of a 
[`<SnackbarContent>`](#snackbarcontent) component.

```jsx
<SnackbarContent
  classes={{
    root: {
      'background-color': 'green'
    },
    message: {
      color: 'blue',
      'font-size': '24px'
    },
    action: {
      border: '5px'
    }
  }}
  ...
/>
```

Per the [Material-UI overriding classes API](https://material-ui.com/customization/overrides/#overriding-with-classes),
the developer can provide styling on predefined parts of the component.

For additional style Material-UI comes with helpful built-ins,
including transitions like Fade.

```jsx
import Fade from '@material-ui/core/Fade';

...

<Snackbar
  TransitionComponent={Fade}
  ...
/>
```

### Notable Features & Details

#### SnackbarContent
Material-UI provides both `<Snackbar>` and `<SnackbarContent>` components.
The SnackbarContent component lets the developer style the `root`, `message`, and `action` via the `classes` property.
The customized `<SnackbarContent>` view can then be used 
by adding it as a child of a regular `<Snackbar>`.
The `classes` property of Snackbar only lets the developer style the `root`,
and each of the possible positions the toast can be in 
(`anchorOriginTopCenter`, `anchorOriginBottomCenter`, etc.) individually.
This is likely to allow finer control over the exact placement in each position.

Example:

```jsx
<Snackbar
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  open={this.state.open}
  autoHideDuration={6000}
  onClose={this.handleClose}
>
  <MySnackbarContentWrapper
    onClose={this.handleClose}
    variant="success"
    message="This is a success message!"
  />
</Snackbar>
```

#### resumeHideDuration
Snackbar has a property that allows the developer to reset the timeout 
to a specified number of milliseconds, 
after user interaction is finished.

#### notistack
It is not natively supported to display multiple Snackbars at a time, 
but the documentation recommends the [notistack](https://github.com/iamhosseindhv/notistack) library to add this feature.

### Takeaways
- Material-UI Snackbar ships with a many properties allowing for high control.
- Customization is supported, but sometimes complicated 
  (e.g. custom styles and [theme support using SnackbarContent](https://material-ui.com/demos/snackbars/#customized-snackbars))
- The library supports callbacks for `close`, `enter`, and `exit`, 
  for before during and after each event.
- Allows control of the transition direction.


## [Android `Toast`](https://developer.android.com/guide/topics/ui/notifiers/toasts)
Android `Toast` is an Android view from the Google Android team.

### Design & Sample Code
**Note**: Since Android development is done in Kotlin all code samples will be Kotlin.

To trigger a simple Android `Toast`:

```kotlin
val text = "Hello toast!"
val duration = Toast.LENGTH_SHORT

val toast = Toast.makeText(applicationContext, text, duration)
toast.show()
```

This creates a toast object filled with a context, some text, and a duration, 
which is triggered to display by the `.show()` method.
It will show up on the bottom of the screen by default.
To control the position of the toast, set the gravity.

```kotlin
toast.setGravity(Gravity.TOP or Gravity.LEFT, 0, 0)
```

This will move the toast to the top left of the screen.
The final two parameters are used to offset the toast from its gravity.

```kotlin
toast.setGravity(Gravity.TOP or Gravity.LEFT, 10, 10)
```

This will show the toast further down and further right.
The toast can also be injected with a custom layout, 
explained [here](https://developer.android.com/guide/topics/ui/notifiers/toasts#CustomToastView).
The `text`, `view`, `gravity`, and `duration` of the toast are all the properties the developer can control 
when working with this relatively straightforward API.


### Notable Features & Details

#### Gravity
The library takes a popular Android approach to positioning,
by letting the user define the gravity of the element,
along with offset values for the axes.

#### Duration Constants
The library comes with baked in constants for displaying the toast for long and short periods of time.

### Takeaways
- High opinion, low control.
- The API for the `Toast` object provides getters and setters for each of `text`, `view`, `gravity`, `offset` and `duration`.
  - **Note**: It is likely these are unable to set the properties of a toast mid-display.
- Beyond getters and setters, the only controls allowed are `.show()` and `.cancel()`.

## [react-toastify](https://github.com/fkhadra/react-toastify)
react-toastify is a React component library by author [@fkhadra](https://github.com/fkhadra).

### Design & Sample Code

```jsx
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

react-toastify uses the explicit component pattern, 
having the developer render a React `ToastContainer` component 
(it is recommended to put this in the application root).
This single component will render all toasts called from JavaScript, 
and can be configured with global options.
The library allows the developer a lot of flexibility, 
supporting multiple `ToastContainer`s as well as no `ToastContainer`, 
though one is recommended.

When the `toast()` is called with a message and a props object, 
it is displayed in the toast container, 
with the toast props overriding the `ToastContainer` props.

```jsx
class App extends Component {
  // Creating a toast that will close in 10000ms.
  tenSecondToast = () => toast("This toast will self destruct in 10...", { autoClose: 10000 });
  // Creating a toast that will close in 5000ms (the default).
  normalToast = () => toast("This is a normal toast");

  render(){
    return (
      <div>
        <button onClick={this.tenSecondToast}>Close after 10000ms</button>
        <button onClick={this.normalToast}>Close after 5000ms (default)</button>
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}
```

For some of the commonly used controls, 
the toast can be configured like so:

```jsx
class App extends Component {
  topRightWarning = () => toast('Warning!', {
    type: toast.TYPE.WARNING,
    position: toast.POSITION.TOP_RIGHT,
    onClose: ({ props }) => window.alert(`You just closed the ${props.type} message`) // props: all options passed to the toast object
  });

  render() {
    return (
      <button onClick={this.topRightWarning}>Warn me</button>
      <ToastContainer autoClose={5000} />
    );
  }
}
```

react-toastify supports built-in themes for toasts, 
such as `success`, `info`, and `warning`, among others.
It also provides intuitive positioning, 
that can be set from the toast or configured on the `ToastContainer`.
Additionally, callbacks like `onClose` and `onOpen` allow the toast to have intelligent effects upon user interaction.

Another extensible behavior react-toastify supports is updating a toast.

```jsx
class Update extends Component {
  toastId = null;

  notify = () => this.toastId = toast("Hello", { autoClose: false });

  update = () => toast.update(this.toastId, { type: toast.TYPE.INFO, autoClose: 5000 });

  render(){
      return (
        <div>
          <button onClick={this.notify}>Notify</button>
          <button onClick={this.update}>Update</button>
        </div>
      )
  }
}
```

The `toastId` gives the developer control over the toast beyond configuration and display.

### Notable Features & Details

#### Toast ID
The `toast()` function returns an ID of the toast it creates, 
which can be used to act upon that toast.
For instance, with the toast ID the toast can be used with `dismiss()`, `update()`, and `isActive()`.

#### Mobile
On mobile toasts will automatically take all available width, 
and all toasts are swipeable / draggable to dismiss.

#### Styling
Library provides fields `className`, `toastClassName`, and, `progressClassName` 
for the developer to pass in their own CSS classes.

#### Render Custom Component
To customize the view the toast can receive a React component in the `render` field of the options.

#### cssTransitionHelper
The library provides a `cssTransitionHelper` helper function to customize animations 
without having to work directly with `react-transition-group`.
The helper allows the developer to set classes and durations for `enter` and `exit`, 
as well as make transitions different depending on location (e.g. `top-right`).

### Takeaways
- Extremely unopinionated and configurable; 
  the developer has near total control.
- Returns a `toastId` to keep track of the toast, 
  as opposed to using a JavaScript object.
- Component pattern is optional; 
  the toast usually uses one component,
  but allows multiple or none.
- Close button is enabled by default,
  and can be replaced with a custom close button or disabled.
  - Separate from passing in a custom React Component view.
- The toast can be configured to display after a certain delay.
  - Unclear what advantage this has over triggering the toast in a setTimeout.
- Passing null into a property resets it to default (useful for `update()`).
- Right to Left (RTL) is supported, 
  and can be toggled by setting a flag.

## [ngx-toastr](https://github.com/scttcper/ngx-toastr)
ngx-toastr is an Angular library from author [@scttcper](https://github.com/scttcper).


### Design & Sample Code
Before using ngx-toastr, setup is required.
First, add this to CSS:

```css
/* regular style toast */
@import '~ngx-toastr/toastr';

/* bootstrap style toast */
@import '~ngx-toastr/toastr-bs4-alert';
```

Next, add `ToastrModule` and `BrowserAnimationsModule` to the app NgModule:

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  ...
})
...
```

Once the modules are set up, 
this code will display a toast:

```ts
import { ToastrService } from 'ngx-toastr';

@Component({...})
export class SomeComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello title!', 'Hello message!', { timeOut: 3000 });
  }
}
```

Show the toast with an instance of `ToastrService`
using `toastr.success/error/warning/info/show()`, 
depending on the context and intent.

The third parameter configures the toast with a variety of specialized options.

```ts
this.toastrService.error('Uh Oh...', '<b>Something is Wrong<b>', {
  timeOut: 20000,
  tapToDismiss: false,
  enableHtml: true,
  closeButton: true,
  progressBar: true
});
```

All these options can be configured globally:

```ts
// root app NgModule
imports: [
  ToastrModule.forRoot({
    timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }),
],
```

These global options will be overriden by the individual toast configurations.
For finer control, ngx-toastr allows the developer 
to use Angular components as custom views for the toast.

```ts
// YourToastComponent
@Component({
  template: `
    <h1>Custom Toast Header!</h1>
    <p>Custom Toast <b>body</b>
    <input type="text" value="Endless Possibilities!">
  `
})
export class YourToastComponent {
  ...
}
```

```ts
// root app NgModule
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

@NgModule({
  imports: [
    ToastrModule.forRoot({
      toastComponent: YourToastComponent // added custom toast!
    })
  ],
  entryComponents: [YourToastComponent], // add!
  bootstrap: [App],
  declarations: [App, YourToastComponent] // add!
})
```

The developer can also decide to display the toast within an existing container.

```ts
// App
@Component({
  template: `
  <h1><a (click)="onClick()">Click</a></h1>
  <div toastContainer></div>`
})
export class App implements OnInit {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

  constructor(private toastrService: ToastrService) {}
  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }
  onClick() {
    this.toastrService.success('Custom in a container!');
  }
}
```

### Notable Features & Details

#### Animation
Uses Angular [Web Animations API](https://angular.io/guide/animations) by default.

#### Reacts to Hover
User hover pauses the toast timeout, 
and when the mouse leaves the timeout resumes - 
or optionally begins an author-specified post-hover timeout.

#### Multiple Configuration
The library allows showing multiple toasts, 
and gives the developer control of maximum capacity 
and behavior at maximum capacity.

### Takeaways

- Low opinion, high configuration library.
- Callbacks available for `show`, `hide`, `tap`, and `action`.
- Comes with default icons,
  which are changeable by modifying CSS.
- **Note**: On mobile there's currently no simple way to stop the timeout - 
  accomplished by hover on desktop.

## [Bootstrap Toast](https://getbootstrap.com/docs/4.2/components/toasts/)
The Bootstrap Toast is an HTML Element from the Bootstrap component library.

### Design & Code Samples

```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="...">
    <strong class="mr-auto">A Bootstrap Toast</strong>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a Bootstrap Toast!
  </div>
</div>
```

Bootstrap uses classes to denote special elements of the components it constructs, 
like the classes `toast`, `toast-header`, and `toast-body`.
The example uses many `aria` attributes, 
indicating a deliberate effort for accessibility.

Multiple Toasts can be wrapped together in a `div` to display stacked on top of each other.

```html
<div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
  <!-- Position it -->
  <div style="position: absolute; top: 0; right: 0;">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded mr-2" alt="...">
        <strong class="mr-auto">Bootstrap</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded mr-2" alt="...">
        <strong class="mr-auto">Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>
```

Using native styling with the `position: absolute;` attribute on, 
the Toasts can be intuitively positioned on the screen.
Note that the order in which the Toasts display is determined by their DOM order, 
_not_ the order in which they are triggered.

To display, select all with the `.toast` class and initialize, 
then select a single Toast by element ID to display and call `.toast('show')`.

```js
// Initializes all Toast elements
$('.toast').toast({
  animation: true, // adds a CSS fade
  autohide: true, // automatically closes the Toast
  delay: 5000 // sets time to wait before closing the Toast
})

$('#single-toast-id').toast('show')
```

### Notable Features & Details

#### Pure HTML View
Bootstrap Toasts are purely HTML elements highly styled with CSS, 
and are easily customizable.

#### Events
The library offers events for `show`, `shown`, `hide`, and `hidden`, 
to represent the moments before and after the Toast is shown / hidden.

#### Accessibility
The documentation is explicit about suggesting wrapping the toasts in `aria-live`, 
to announce the content via screen reader without moving focus.
It also recommends including `aria-atomic="true"` 
to ensure the Toast is read as a single atomic element, 
and live changes don't disrupt screen-reader users.

#### Z-Index
Bootstrap components that are meant to be overlayed use an arbitrary z-index value, 
in the range of ~1000+.

### Takeaways

- Low JavaScript configuration, high HTML customization.
- Uses the same `.toast(options)` method for all behaviors,
  by passing in `show`, `hide`, and `dispose` as strings.
- The developer needs to be cautious of DOM order when using multiple toasts.
  -  Calling `show` out order would still display Toasts in DOM order, a potentially unexpected behavior.
- Requires `util.js` if building the JavaScript from source.
- When disabling `autohide` the developer must provide a close button; 
  it will not be added by default.
