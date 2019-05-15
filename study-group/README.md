# Toast Study Group

This document compares the capabilities of various popular toast libraries.

## Background
A toast is a UI element that provides valuable feedback to a user about the actions they perform on the web or their mobile device.
This feedback can be core to the user experience of many applications, 
and many accomplished developers have written many libraries to address this need. 
The aim of this study is to assess which needs the existing solutions meet, 
which services they provide in common with each other, and what the levels of granularity are available in toast APIs.

## In Depth Studies
TODO: Update with links when the in-depth studies are written up

## Table of Comparison
This table showcases the features that various popular toast libraries support. If there are any mistakes, please open an issue to get it corrected.

| [Feature](#features) |[react-toastify](https://www.npmjs.com/package/react-toastify)|[Blueprint](https://blueprintjs.com/docs/#core/components/toast)|[ngx-toastr](https://www.npmjs.com/package/ngx-toastr)|[Bootstrap](https://getbootstrap.com/docs/4.3/components/toasts/)|[Sweet Alert2](https://sweetalert2.github.io/)|[Material UI Snackbar](https://material-ui.com/api/snackbar/)|[Ionic](https://ionicframework.com/docs/api/toast)|[Salesforce Lightning Design](https://lightningdesignsystem.com/components/toast/)|[Notyf](https://github.com/caroso1222/notyf)|[Polymer paper-toast](https://www.webcomponents.org/element/@polymer/paper-toast)|[Android Snackbar](https://developer.android.com/reference/com/google/android/material/snackbar/Snackbar)|[Android Toast](https://developer.android.com/reference/android/widget/Toast)|
|--|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| [Title](#properties)                                | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| [Message](#properties)                              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Timeout](#properties)                             | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| [Close Button](#properties)                        | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| [Call To Action](#properties)                       | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| [Callbacks](#properties)                            | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| [Events](#properties)                               | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [Icon](#properties)                                 | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| [Progress Bar](#properties)                         | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [Theme Support](#built-in-support)                  | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| [Configured / Created in JS](#built-in-support)                | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| [Explicit Component Pattern](#built-in-support)              | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| [Permits Custom HTML](#built-in-support)            | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ |
| [Display in Container](#built-in-support)           | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| [Global Configuration](#built-in-support)           | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| [CSS Classes Field](#built-in-support)              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| [Explicit Animation Support](#built-in-support)     | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| [Swipe / Drag](#built-in-support)                   | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| [Intuitive Positioning](#built-in-support)          | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| [User Interaction Trigger](#built-in-support)       | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [Mentions Accessibility](#policies)                 | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| [Default Times Out](#policies)                      | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| [Allows Multiple](#policies)                        | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| [Allows Duplicates](#policies)                      | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| [Newest on Top](#policies)                          | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [Close Button Default](#policies)                   | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [Translucent](#policies)                            | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |                                                                           



## Features
The list of features used in the [Table of Comparison](#table-of-comparison) comes from the major recurring patterns and ideas that showed up in my research of existing toast implementations.
This list is by no means exhaustive, but it covers many of the core elements built into popular toast libraries. 
They approximately break down into three categories: Properties, Built-In Support, and Policies.

### Properties
Properties of a toast are specific, tangible parts of the object that a developer can set, toggle, or access.
These are often the user-facing elements of the toast, and the general consensus of popular libraries regarding these properties is typically what sets toasts apart from other solutions like alerts and dialogs.

- `title`: header text to be displayed above the main message of the toast. 

- `message`: main text contents of the toast. 

- `timeout`: time period (usually in ms) after which the toast disappears.

- Close Button: dedicated button that closes the toast when clicked.

- Call To Action: button(s) displayed on the toast prompting user engagement.

- Callbacks: functions triggered when the toast enters or exits certain states.

- Events: JavaScript events triggered when the toast enters or exits certain states.

- `icon`: pictograph displayed with the toast.

- Progress Bar: element on toast displaying time remaining before timeout.

### Built-In Support
The Built-In Support establishes how a toast is defined and used, as well as what it's allowed to be used with.
It consists of a collection of implementation details, patterns, and technologies that are supported by popular libraries.

- Theme Support: offers built-in theming options, such as `success`, `info`, or `error`.

- Configured / Created in JS: the toast object is set up and called to display using JavaScript.
    - Upon display this creates a new DOM element or injects the settings into an existing HTML element.

- Explicit Component Pattern: uses an element explicitly written into the HTML to display the toast when triggered.
    - This element can be configured, or left as a dummy element to inject configuration into.

- Permits Custom HTML: allows developers to write custom HTML templates, loaded in as children or passed as views.

- Display in Container: allows the toast to display within a container, the default being `body`.

- Global Configuration: support for a dedicated object for global configs, which propogate down to individual toasts.

- CSS Class Field: explicit field to pass in the CSS class or list of classes for styling the toast.

- Explicit Animation Support: library offers an `animation` or `transition` field which abstracts away writing animations.

- Swipe / Drag: the toast can be swiped or dragged to be dismissed, an important cross-platform consideration.

- Intuitive Positioning: the library provides built in values to place your toast on the `top/middle/bottom` of the `left/center/right`.

- User Interaction Trigger: tracks when user has moused over the toast, and allows the developer to change behavior when they do.

### Policies
The Policies of a toast library are what it chooses to allow, forbid, and prioritize. 
It's the list of opinions about what a toast should be able to do.

- Mentions Accessibility: library specifically mentions A11y, uses `aria`, or makes note of accessibility concerns (i.e. focus).
    - **Note**: This was difficult to track, not tested comprehensively, and I could have made mistakes. Please create an issue if you notice an error.

- Default Times Out: the toast dismisses by default, unless otherwise specified.

- Allows Multiple: multiple toasts can be displayed at once, typically either by stacking or overlapping.

- Allows Duplicates: the same toast can be called and displayed multiple times simultaneously.

- Newest on Top: an option to toggle if the newest toast will show up above or below the previous toasts.

- Close Button Default: the toast creates and displays with a close button by default, unless otherwise specified.

- Translucent: the background of the toast shows up, to some degree, as blurred and translucent.

## Additional Considerations
TODO: Flesh these out into paragraph form
- Adapt to Device
- RTL Support
- zIndex Usage
- AutoFocus
- toast vs alert use cases
