# @jsweb/css-theme-vars

Create global CSS theme variables from JS Objects

Simple to use, just do this:

```javascript
import cssThemeVars from '@jsweb/css-theme-vars'

const theme = {
  primary: 'teal',
  secondary: 'cyan',
  accent: 'gold',
  danger: 'crimsom',
  warning: 'orange'
}

cssThemeVars(theme)
```

Now you can do this:

```css
.text-primary {
  color: var(--primary);
}

.text-danger {
  color: var(--danger);
}

.text-warning {
  color: var(--warning);
}
```

**@jsweb/css-theme-vars** just create a var/value for each key/value pairs from the object received as argument.

So, just use your imagination! :)

_PS.:_ Also available at Unpkg CDN:

```html
<script src='https://unpkg.com/@jsweb/css-theme-vars'></script>
```
