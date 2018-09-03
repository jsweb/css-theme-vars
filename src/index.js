export default { setVar, getVar, setTheme, getTheme }

function setVar (key, val) {
  return document.documentElement.style.setProperty(key, val)
}

function getVar (key) {
  return getComputedStyle(document.documentElement).getPropertyValue(key)
}

function setTheme (theme = {}) {
  return Object.keys(theme).forEach(key => setVar(key, theme[key]))
}

function getTheme () {
  const concat = (a, i) => a.concat(i)

  const parse = [...document.styleSheets]
    .map(s => [...s.rules]).reduce(concat, [])
    .map(s => s.cssText).reduce(concat, [])
    .map(s => s.split(';')).reduce(concat, [])
    .map(s => s.split(':')).reduce(concat, [])
    .filter(s => s.includes('var(--'))
    .map(s => s.match(/--[\w-]+/)[0])

  return [...new Set(parse)].sort().reduce((a, i) => {
    const val = getVar(i)
    if (val) a[i] = val
    return a
  } , {})
}
