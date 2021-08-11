import path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const env = process.env.NODE_ENV

const outDir = path.join(__dirname, 'dist')

// const isExternal = id => !id.startsWith('.') && !id.startsWith('/')

const getBabelOptions = ({ useESModules = false, corejs = false } = {}) => ({
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  plugins: [['@babel/plugin-transform-runtime', {
    useESModules,
    corejs
  }]]
})

const config = {
  input: 'src/index.js',
  // external: isExternal,
  output: {
    file: `${outDir}/${pkg.name}.js`,
    format: 'umd',
    name: "$practical",
    sourcemap: true,
    // globals: {}
  },
  plugins: [
    nodeResolve(),
    babel(getBabelOptions()),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs()
  ]
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      warnings: false,
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true
      }
    })
  )
}

export default config