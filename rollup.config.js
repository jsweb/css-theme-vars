import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  plugins: [babel()],
  output: {
    format: 'umd',
    name: 'cssThemeVars',
    file: 'dist/main.js'
  }
}
