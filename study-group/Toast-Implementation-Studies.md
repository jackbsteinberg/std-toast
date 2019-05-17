# Toast Implementations
This document studies the various ways existing libraries implements toasts.

## Background
In order to make distinctions between existing toast implementations clearer, this study compiles more detailed information about individual libraries.
These libraries have differences in design and implementation that are useful to study to get a general consensus of what a toasts like and how they act.
The libraries studied are:

- [Polymer `<paper-toast>`](#polymer-paper-toast)
- [Material-UI Snackbar](#material-ui-snackbar)
- [Android Toast](#android-toast)
- [react-toastify](#react-toastify)
- [ngx-toastr](#ngx-toast)
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

Finally, to color the toast the library provides the two CSS properties, `--paper-toast-background-color` and `--paper-toast-color`.

### Notable Features & Details

#### Permits Custom HTML
`<paper-toast>` also the developer to customize the contents of the toast with custom HTML passed in as children.

#### Intuitive Positioning
`horizontalAlign` and `verticalAlign` provide attributes to position the toast intuitively.

#### Dismissal
The `<paper-toast>` holds onto information about how it was dismissed the last time it was shown, in attributes called `canceled` and `closingReason`.

#### Focus
A few of the minute controls concern focus. The `noAutoFocus` attribute, which defaults to true (preventing autofocus), allows the user to decide if the `<paper-toast>` or its children will disable autofocus. 
The `restoreFocusOnClear` attribute restores page's focus once the toast is cleared from the screen.

#### Notes
- Purpose-built well for pure HTML.
- There are many granular controls, concerning things like parent elements and sizing and alignment inheritance.
- The component comes with events, for when the toast opens and the alignment changes (*not for when it closes though*).
- Only one `<paper-toast>` will be visible on the screen at a time. If you trigger a second it will replace the first.
- **Warning**: `<paper-toast>` is affected by the stacking context of its container, so to guarantee it shows up on the top layer it must be placed at the top level (`<body>`) element.
    - How to properly handle top layer is an ongoing debate (see [here](https://github.com/whatwg/html/issues/897#issuecomment-198512778))

## Material-UI Snackbar

*TODO: Fill in study for this library*

## Android Toast

*TODO: Fill in study for this library*

## react-toastify

*TODO: Fill in study for this library*

## [ngx-toastr](https://github.com/scttcper/ngx-toastr)
ngx-toastr is a library from author [@scttcper](https://github.com/scttcper) to create a toast notification built for Angular.


### Design & Sample Code
Before using ngx-toastr, setup is required. First, add the CSS:

```js
// regular style toast
@import '~ngx-toastr/toastr';

// bootstrap style toast
@import '~ngx-toastr/toastr-bs4-alert';
```

Next, add ToastrModule and BrowserAnimationsModule to app NgModule:

```js
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

Once the modules are set up, this code will display a toast:

```js
import { ToastrService } from 'ngx-toastr';

@Component({...})
export class SomeComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello title!', 'Hello message!', { timeOut: 3000 });
  }
}
```

To show the toast with an instance of ToastrService, use `toastr.success/error/warning/info/show()`, depending on the context and intent.
The third parameter configures the toast with a variety of specialized options, for example:

```js
this.toastrService.error('Uh Oh...', '<b>Something is Wrong<b>', {
  timeOut: 20000,
  tapToDismiss: false,
  enableHtml: true,
  closeButton: true,
  progressBar: true
});
```

All these options can be configured globally like so:

```js
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
For finer control, ngx-toaster allows both custom toast components and display in container, used like this:

```js
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
...
// App
@Component({
  template: `
  <h1><a (click)="onClick()">Click</a></h1>
  <div toastContainer></div>`
})
export class AppComponent implements OnInit {
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

### Notable Features and Details

#### Animation
Uses Angular [Web Animations API](https://angular.io/guide/animations) by default.

#### Reacts to Hover
User hover pauses the toast timeout, and when the mouse leaves the timeout resumes, or optionally begins an author-specified post-hover timeout duration.

#### Multiple Configuration
The library allows showing multiple toasts, and gives the developer specific control of maximum capacity and behavior at maximum capacity.

### Takeaways

- Low opinion high configuration library.
- Callbacks available for show, hide, tap, and action.
- Comes with default icons, can change by modifying CSS.ß

## Bootstrap

*TODO: Fill in study for this library*

## Findings

*TODO: Fill in overall findings for these implementations*
