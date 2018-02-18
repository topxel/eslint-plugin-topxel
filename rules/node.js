// For more info: https://eslint.org/docs/rules/#nodejs-and-commonjs

module.exports = {
  // require return statements after callbacks
  'callback-return': ['error', ['callback', 'cb', 'next']],

  // require require() calls to be placed at top-level module scope
  'global-require': 'warn',

  // require error handling in callbacks
  'handle-callback-err': ['warn', '^.*(e|E)rr(or)?$'],

  // disallow use of the Buffer() constructor
  'no-buffer-constructor': 'error',

  // disallow mixing regular variable and require declarations
  'no-mixed-requires': 'off',

  // disallow use of new operator with the require function
  'no-new-require': 'error',

  // disallow string concatenation with __dirname and __filename
  'no-path-concat': 'warn',

  // disallow use of process.env
  'no-process-env': 'off',

  // disallow process.exit()
  'no-process-exit': 'off',

  // disallow specified modules when loaded by require
  'no-restricted-modules': 'off',

  // disallow synchronous methods
  'no-sync': 'off'
};
