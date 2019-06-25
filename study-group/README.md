# Toast Study Group

This document compares the capabilities of existing popular toast libraries.

## Background
A toast is a UI element that provides valuable feedback to a user about the actions they perform while using an app.
This feedback can be core to the user experience of many applications, 
and many accomplished developers have written many libraries to address this need. 
The aim of this study is to assess which needs the existing solutions meet, 
which services they provide in common with each other, 
and what the levels of granularity are available in toast APIs.

## [In Depth Studies](Toast-Implementation-Studies.md)

## Table of Comparison
This table showcases the features that various popular toast libraries support.
If there are any mistakes, please open an issue to get them corrected.

| [Feature](#features) |[react-toastify](https://www.npmjs.com/package/react-toastify)|[Blueprint](https://blueprintjs.com/docs/#core/components/toast)|[ngx-toastr](https://www.npmjs.com/package/ngx-toastr)|[Bootstrap](https://getbootstrap.com/docs/4.3/components/toasts/)|[Sweet Alert2](https://sweetalert2.github.io/)|[Material UI Snackbar](https://material-ui.com/api/snackbar/)|[Ionic](https://ionicframework.com/docs/api/toast)|[Salesforce Lightning Design](https://lightningdesignsystem.com/components/toast/)|[Notyf](https://github.com/caroso1222/notyf)|[Polymer paper-toast](https://www.webcomponents.org/element/@polymer/paper-toast)|[Android Snackbar](https://developer.android.com/reference/com/google/android/material/snackbar/Snackbar)|[Android Toast](https://developer.android.com/reference/android/widget/Toast)|
|--|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| [Title](#properties)                                  |     |     | yes | yes | yes |     | yes | yes |     |     |     |     |
| [Message](#properties)                                | yes | yes | yes | yes | yes | yes | yes | yes | yes | yes | yes | yes |
| [Timeout](#properties)                                | yes | yes | yes | yes | yes | yes | yes |     | yes | yes | yes | yes |
| [Close Button](#properties)                           | yes | yes | yes | yes | yes | yes | yes | yes |     | yes |     |     |
| [Call To Action](#properties)                         | yes | yes |     | yes | yes | yes | yes | yes |     | yes | yes |     |
| [Dismiss](#properties)                                | yes | yes |     | yes | yes |     | yes |     |     | yes | yes | yes |
| [Callbacks](#properties)                              | yes | yes |     | yes | yes | yes | yes |     |     |     | yes |     |
| [Events](#properties)                                 |     |     | yes | yes |     |     | yes |     |     | yes |     |     |
| [Icon](#properties)                                   |     | yes | yes | yes | yes |     |     | yes | yes |     |     |     |
| [Progress Bar](#properties)                           | yes |     | yes |     |     |     |     |     |     |     |     |     |
| [Type Support](#built-in-support)                    | yes | yes | yes |     | yes |     | yes | yes | yes |     |     |     |
| [Global Custom Configuration](#built-in-support)      | yes | yes | yes |     |     |     |     |     | yes |     |     |     |
| [Configured / Created in JS](#built-in-support)       | yes | yes | yes |     | yes | yes | yes |     | yes |     |     |     |
| [Explicit Component Pattern](#built-in-support)       | yes | yes |     | yes |     | yes |     | yes |     | yes |     |     |
| [Permits Custom HTML](#built-in-support)              | yes |     | yes | yes | yes | yes |     | yes |     | yes | yes | yes |
| [Display in Container](#built-in-support)             |     | yes | yes | yes | yes | yes |     | yes |     | yes |     |     |
| [CSS Classes Field](#built-in-support)                | yes | yes | yes | yes | yes | yes | yes | yes | yes |     |     |     |
| [Explicit Animation Support](#built-in-support)       | yes |     | yes |     | yes | yes | yes |     |     |     | yes |     |
| [Swipe / Drag](#built-in-support)                     | yes |     |     |     |     |     |     |     |     |     | yes |     |
| [Intuitive Positioning](#built-in-support)            | yes | yes | yes |     | yes | yes | yes |     |     | yes |     | yes |
| [User Interaction Trigger](#built-in-support)         | yes |     |     |     |     | yes | yes |     |     |     |     |     |
| [Mentions Accessibility](#policies)                   |     | yes |     | yes | yes | yes |     | yes | yes |     |     |     |
| [Default Times Out](#policies)                        | yes | yes | yes |     |     |     |     |     | yes | yes | yes | yes |
| [Allows Multiple](#policies)                          | yes | yes | yes | yes |     |     | yes | yes | yes |     |     |     |
| [Allows Duplicates](#policies)                        | yes | yes | yes |     |     |     | yes |     | yes |     |     |     |
| [Configurable Stacking](#policies)                    | yes | yes | yes | yes |     |     |     |     |     |     |     |     |
| [Close Button Default](#policies)                     | yes | yes |     |     |     |     |     |     |     |     |     |     |
| [Translucent](#policies)                              |     |     |     | yes |     |     | yes |     |     |     |     |     |                                                   

## Features
The list of features used in the Table of Comparison comes from the major recurring patterns 
and ideas that showed up in my research of existing toast implementations.
This list is by no means exhaustive, 
but it covers many of the core elements built into popular toast libraries. 
They approximately break down into three categories: 
Properties, Built-In Support, and Policies.

### Properties
Properties of a toast are specific, tangible parts of the object that a developer can set, toggle, or access.
These are often the user-facing elements of the toast, 
and the general consensus of popular libraries regarding these properties 
is typically what sets toasts apart from other solutions like alerts and dialogs.

- `title`: header text to be displayed above the main message of the toast. 

- `message`: main text contents of the toast. 

- `timeout`: time period (usually in ms) after which the toast disappears.

- Close Button: dedicated button that closes the toast when clicked.

- Call To Action: button(s) displayed on the toast prompting user engagement.

- Dismiss: function to programatically dismiss the toast.

- Callbacks: functions triggered when the toast enters or exits certain states.

- Events: JavaScript events triggered when the toast enters or exits certain states.

- `icon`: pictograph displayed with the toast.

- Progress Bar: element on toast displaying time remaining before timeout.

### Built-In Support
The Built-In Support establishes how a toast is defined and used, 
as well as what it's allowed to be used with.
It consists of a collection of implementation details, patterns, and technologies 
that are supported by popular libraries.

- Type Support: offers built-in typing options, such as `success`, `info`, or `error`.

- Global Custom Configuration: support for global config objects defining custom types / patterns, which can be applied to individual toasts.

- Configured / Created in JS: the toast object is set up and called to display using JavaScript.
    - Upon display this creates a new DOM element or injects the settings into an existing HTML element.

- Explicit Component Pattern: uses an element explicitly written into the HTML to display the toast when triggered.
    - This element can be configured, 
    or left as a dummy element to inject configuration into.

- Permits Custom HTML: allows developers to write custom HTML templates, loaded in as children or passed as views.

- Display in Container: allows the toast to display within a container, the default being `body`.

- CSS Class Field: explicit field to pass in the CSS class or list of classes for styling the toast.

- Explicit Animation Support: library offers an `animation` or `transition` field which abstracts away writing animations.

- Swipe / Drag: the toast can be swiped or dragged to be dismissed.

- Intuitive Positioning: the library provides built in values to place your toast on the `top/middle/bottom` and the `left/center/right`.

- User Interaction Trigger: tracks when user has interacted with the toast, 
and allows the developer to change behavior when they do.

### Policies
The Policies of a toast library are what it chooses to allow, forbid, and prioritize. 
It's the list of opinions about what a toast should be able to do.

- Mentions Accessibility: library specifically mentions A11y, uses `aria`, or makes note of accessibility concerns (e.g. focus).
    - **Note**: This was difficult to track, not tested comprehensively, and I could have made mistakes. 
    Please create an issue if you notice an error.

- Default Times Out: the toast dismisses by default, unless otherwise specified.

- Allows Multiple: multiple toasts can be displayed at once, typically either by stacking or overlapping.

- Allows Duplicates: the same toast can be called and displayed multiple times simultaneously.

- Configurable Stacking: option to control if a new toast displays above or below the current stack of toasts, 
for libraries that permit stacking.

- Close Button Default: the toast creates and displays with a close button by default, 
unless otherwise specified.

- Translucent: the background of the toast shows up, to some degree, as blurred and translucent.
