import babel from 'rollup-plugin-babel'

const author = `/**
 * @author Alex Bruno Cáceres
 * @email git.alexbr@outlook.com
 * @date 2018-06-12 12:06:25
 * @desc Get and Set global CSS properties (vars) with Vanilla JS
 */`

export default {
  input: 'src/index.js',
  plugins: [babel()],
  output: {
    banner: author,
    format: 'umd',
    name: 'cssThemeVars',
    file: 'dist/index.js',
    amd: {
      id: 'cssThemeVars'
    }
  }
}
