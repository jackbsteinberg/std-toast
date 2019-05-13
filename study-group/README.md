# Toast Study Group

## Table of Comparison

|Feature              |[react-toastify](https://www.npmjs.com/package/react-toastify)|[Blueprint](https://blueprintjs.com/docs/#core/components/toast)|[ngx-toastr](https://www.npmjs.com/package/ngx-toastr)|[Bootstrap](https://getbootstrap.com/docs/4.3/components/toasts/)|[SweetAlert2](https://sweetalert2.github.io/)|[Material UI Snackbar](https://material-ui.com/api/snackbar/)|[Ionic](https://ionicframework.com/docs/api/toast)|[Salesforce Lightning Design](https://lightningdesignsystem.com/components/toast/)|[Notyf](https://github.com/caroso1222/notyf)|[Polymer paper-toast](https://www.webcomponents.org/element/@polymer/paper-toast)|[Android Snackbar](https://developer.android.com/reference/com/google/android/material/snackbar/Snackbar)|[Android Toast](https://developer.android.com/reference/android/widget/Toast)|
|--|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Title                     | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Message                   | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Timeout                   | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Close Button              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Call To Action            | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| Callbacks                 | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Events                    | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Icon                      | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Progress Bar              | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Type / Theme Support      | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Triggered in JS           | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Component Pattern         | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Permits Custom HTML       | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Display in Container      | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Global Configuration      | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| CSS Classes Field         | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Animation Support*        | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Swipe / Drag              | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Intuitive Positioning     | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Mentions Accessibility    | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Post Interaction*         | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Default Times Out         | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Allows Multiple           | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Allows Duplicates         | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Newest on Top             | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Close Button Default      | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Translucent               | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |                                                                           |



## Features
The list of features used in the [Table of Comparison](##table-of-comparison) enumerates major recurring patterns and ideas that showed up in my research of existing toast implementations. This list is by no means exhaustive, but it covers many of the core elements built into popular toast libraries. They approximately break down into three categories: Properties, Built-In Support, and Policies.

### **Properties**
Properties of a toast are specific, tangible parts of the object that a developer can set, toggle, or access when using it. These are often the user-facing elements of the toast, and the general consensus of popular libraries regarding these properties is typically what sets toasts apart from alerts and dialogs.

- `title`: header text to be displayed above the main message of the toast. 

- `message`: main text contents of the toast. 

- `timeout`: time period (usually in ms) after which the toast disappears.

- Events: JavaScript events triggered when the toast enters or exits certain states.

- Close Button: dedicated button that closes the toast when clicked.

- Callbacks: functions triggered when the toast enters or exits certain states.

- Call To Action: button(s) displayed on the toast prompting user engagement.

- `icon`: pictograph displayed with the toast.

- Progress Bar: element on toast displaying time remaining before timeout.

### **Built-In Support**
The Built-In Support establishes how the toast is defined and used, as well as what it's allowed to be used with. It consists of a collection of implementation details, patterns, and technologies that are supported by popular toast libraries.

- Triggered in JS

- Permits Custom Code

- Component Pattern

- Global Configuration Support

- CSS Class Field

- Type / Theme Support

- Animation Support

- Swipe / Drag

- Intuitive Positioning

- Post Interaction Behavior

### **Policies**
The Policies of a toast library are what it chooses to allow, forbid, and prioritize. It's the list of opinions about what a toast can do, enforced by its implementation. 

- Allows Multiple

- Allows Duplicates

- Close Button Default

- Newest on Top

- Translucent

- Mentions Accessibility

- Display in Container