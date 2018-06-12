import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/main.js',
  output: {
    format: 'umd',
    name: 'cssThemeVars',
    file: 'dist/main.js',
    amd: {
      id: 'cssThemeVars'
    }
  },
  plugins: [buble(), uglify()]
}
