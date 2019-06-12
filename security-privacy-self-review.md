# std-toast TAG Security / Privacy Self Review

### 2.1. What information might this feature expose to Web sites or other parties, and for what purposes is that exposure necessary?

The information displayed in the toast is supplied by the developer,
and the user can interact with it by taking an available action.
The feedback of that action will be available to the site,
but no other information is exposed.

### 2.2. Is this specification exposing the minimum amount of information necessary to power the feature?

Yes.

### 2.3. How does this specification deal with personal information or personally-identifiable information or information derived thereof?

The toast itself is a container for displaying information,
and potentially soliciting feedback via an action button.
The only information the toast gets from the user is whether or not they take the action,
typically in the form of clicking a button or a link.
Typically this is not personal or personally identifiable.

### 2.4. How does this specification deal with sensitive information?

Ditto.

### 2.5. Does this specification introduce new state for an origin that persists across browsing sessions?

No.

### 2.6. What information from the underlying platform, e.g. configuration data, is exposed by this specification to an origin?

None.

### 2.7. Does this specification allow an origin access to sensors on a user’s device

No.

### 2.8. What data does this specification expose to an origin? Please also document what data is identical to data exposed by other features, in the same or different contexts.

None.

### 2.9. Does this specification enable new script execution/loading mechanisms?

No.

### 2.10. Does this specification allow an origin to access other devices?

No.

### 2.11. Does this specification allow an origin some measure of control over a user agent’s native UI?

No.

### 2.12. What temporary identifiers might this this specification create or expose to the web?

None.

### 2.13. How does this specification distinguish between behavior in first-party and third-party contexts?

It will work the same in both contexts.

### 2.14. How does this specification work in the context of a user agent’s Private \ Browsing or "incognito" mode?

There is no change in behavior for this case.

### 2.15. Does this specification have a "Security Considerations" and "Privacy Considerations" section?

No.

### 2.16. Does this specification allow downgrading default security characteristics?

No.

### 2.17. What should this questionnaire have asked?

I'm not sure.