# @jsweb/css-theme-vars

Get and Set global CSS properties (vars) with Vanilla JS.

It is useful to set/change CSS themes for web apps dynamically.

## Install

You can install it with NPM, Yarn or via Unpkg CDN:

```
npm i -S @jsweb/css-theme-vars
```

```
yarn add @jsweb/css-theme-vars
```

```html
<script src="https://unpkg.com/@jsweb/css-theme-vars"></script>
```

## Usage

### ES6+

```javascript
import css from '@jsweb/css-theme-vars'
```

### Common JS

```javascript
const css = require('@jsweb/css-theme-vars')
```

### Global

If you install it via CDN, the object `cssThemeVars` will be global available at `window` scope.

## Methods

There are 4 useful methods:

### css.setTheme(obj)

It sets a bundle of `:root` CSS variables to config a CSS theme for your project.

The `obj` argument can be any JSON or literal JS object.

```javascript
import css from '@jsweb/css-theme-vars'

const theme = {
  '--color-accent': 'gold',
  '--color-danger': 'crimsom',
  '--color-primary': 'teal',
  '--color-secondary': 'cyan',
  '--color-warning': 'orange'
}

css.setTheme(theme)
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

### css.getTheme()

It is just a convenient method that parses CSS variables from all **computed styles**.

So, **not used vars will not be parsed**.

```javascript
import css from '@jsweb/css-theme-vars'

const theme = css.getTheme()
/*
theme = {
  '--color-accent': 'gold',
  '--color-danger': 'crimsom',
  '--color-primary': 'teal',
  '--color-secondary': 'cyan',
  '--color-warning': 'orange'
}
*/

const colorPrimary = theme['--color-primary']
```

Now you can use CSS variables in JS.

### css.setVar(key, val)

It sets a `:root` CSS variable programaticaly.

```javascript
import css from '@jsweb/css-theme-vars'

css.setVar('--color-primary', 'blue')
```

Now you can change your CSS variables on the fly.

### css.getVar(key)

If you know a `:root` CSS variable key, then you can get it in JS.

```javascript
import css from '@jsweb/css-theme-vars'

const colorPrimary = css.getVar('--color-primary')
```

Now you can use the CSS variable in JS.

## How it works?

**@jsweb/css-theme-vars** just plays with native methods using Vanilla JS, CSS computed sytles and DOM.

So, just use your imagination! ;)
