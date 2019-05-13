# Toast Study Group

## Table of comparison

|Feature              |[react-toastify](https://www.npmjs.com/package/react-toastify)|[Blueprint](https://blueprintjs.com/docs/#core/components/toast)|[ngx-toastr](https://www.npmjs.com/package/ngx-toastr)|[Bootstrap](https://getbootstrap.com/docs/4.3/components/toasts/)|[SweetAlert2](https://sweetalert2.github.io/)|[Material UI Snackbar](https://material-ui.com/api/snackbar/)|[Ionic](https://ionicframework.com/docs/api/toast)|[Salesforce Lightning Design](https://lightningdesignsystem.com/components/toast/)|[Notyf](https://github.com/caroso1222/notyf)|[Polymer paper-toast](https://www.webcomponents.org/element/@polymer/paper-toast)|[Android Snackbar](https://developer.android.com/reference/com/google/android/material/snackbar/Snackbar)|[Android Toast](https://developer.android.com/reference/android/widget/Toast)|
|--|--|--|--|--|--|--|--|--|--|--|--|--|
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
| Displays from JS*         | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
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
### **Elements**

- `title`: header text to be displayed above the main message of the toast. 

- `message`: main text contents of the toast. 

- `timeout`: time period (usually in ms) after which the toast disappears.

- Events: JavaScript events triggered when the toast enters or exits certain states.

- Close Button: dedicated button that closes the toast when clicked.

- Callbacks: functions triggered when the toast enters or exits certain states.

- Call To Action: button(s) displayed on the toast prompting user engagement.

- `icon`: pictograph displayed with the toast.

- Progress Bar: element on toast displaying time remaining before timeout.

### **Supports**

- Displays from JS*

- Permits Custom Code

- Component Pattern

- Global Configuration Support

- CSS Class Field

- Type / Theme Support

- Animation Support

- Swipe / Drag

- Intuitive Positioning

- Post Interaction Behavior

### **Policy**

- Allows Multiple

- Allows Duplicates

- Close Button Default

- Newest on Top

- Translucent

- Accessibility Conscious

- Display in Container

-- EOF --

### Te ❌ t
*To look into*
* Accessibility Prioritized
* Timeout Default
* Wait
* Adapts to Device
* Stack vs Overlay vs Replace

#### Libraries
* Material UI Snackbar
* Android Toast
* Android Snackbar
* Polymer paper-toast
* Blueprint
* Bootstrap
* Ionic
* Salesforce Lightning Design
* Notyf
* react-toastify
* ng ❌ -toastr
* SweetAlert2



* toastr
* react-alert
* SnoreToast
* node-notifier