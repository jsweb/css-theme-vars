export default function cssThemeVars (theme = {}) {
  const vars = Object.keys(theme).reduce((r, k) => {
    r[`--${k}`] = theme[k]
    return r
  }, {})

  const css = JSON.stringify(vars).replace(/"/g, '').replace(/,/g, ';')
  const textContent = `:root${css}`

  const id = 'webjs-css-theme-vars'
  const style = document.getElementById(id)

  if (style)
    style.textContent = textContent
  else
    insertHeadFirst({ id, textContent })
}

function insertHeadFirst(attrs) {
  const first = document.head.querySelector('[rel="stylesheet"]')
  const style = document.createElement('style')
  Object.keys(attrs).forEach(key => style[key] = attrs[key])
  document.head.insertBefore(style, first)
}
