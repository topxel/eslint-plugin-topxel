// For more info: https://github.com/benmosher/eslint-plugin-import

module.exports = {
  // STATIC ANALYSIS

  // ensure imports point to a file/module that can be resolved
  'import/no-unresolved': 'error',

  // ensure named imports correspond to a named export in the remote file.
  'import/named': 'error',

  // ensure a default export is present, given a default import.
  'import/default': 'error',

  // ensure imported namespaces contain dereferenced properties as they are dereferenced.
  'import/namespace': 'error',

  // restrict which files can be imported in a given folder
  'import/no-restricted-paths': 'off',

  // forbid import of modules using absolute paths
  'import/no-absolute-path': 'error',

  // forbid require() calls with expressions
  'import/no-dynamic-require': 'off',

  // Prevent importing the submodules of other modules
  'import/no-internal-modules': 'off',

  // forbid Webpack loader syntax in imports
  'import/no-webpack-loader-syntax': 'error',

  // HELPFUL WARNINGS

  // report any invalid exports, i.e. re-export of the same name
  'import/export': 'error',

  // report use of exported name as identifier of default export
  'import/no-named-as-default': 'error',

  // report use of exported name as property of default export
  'import/no-named-as-default-member': 'error',

  // report imported names marked with @deprecated documentation tag
  'import/no-deprecated': 'warn',

  /** forbid the use of extraneous packages
   *  forbid the import of external modules that are not declared
   *  in the package.json
   */
  'import/no-extraneous-dependencies': 'error',

  // forbid the use of mutable exports with var or let.
  'import/no-mutable-exports': 'error',

  // MODULE SYSTEMS

  // report potentially ambiguous parse goal (script vs. module)
  'import/unambiguous': 'off',

  // report CommonJS require calls and module.exports or exports.*.
  'import/no-commonjs': 'off',

  // report AMD require and define calls.
  'import/no-amd': 'off',

  // No Node.js builtin modules.
  'import/no-nodejs-modules': 'off',

  // STYLE GUIDE

  // ensure all imports appear before other statements
  'import/first': ['error', 'absolute-first'],

  // report repeated import of the same module in multiple places
  'import/no-duplicates': 'error',

  // report namespace imports
  'import/no-namespace': 'error',

  // ensure consistent use of file extension within the import path
  'import/extensions': [
    'error',
    'always',
    {
      js: 'never',
      jsx: 'never',
      json: 'always'
    }
  ],

  // enforce a convention in module import order
  'import/order': [
    'warn',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
    }
  ],

  // enforce a newline after import statements
  'import/newline-after-import': 'error',

  // prefer a default export if module exports a single name
  'import/prefer-default-export': 'error',

  // limit the maximum number of dependencies a module can have
  'import/max-dependencies': 'off',

  // forbid unassigned imports
  'import/no-unassigned-import': 'off',

  // forbid anonymous values as default exports
  'import/no-anonymous-default-export': 'error',

  // reports use of a default export as a locally named import.
  'import/no-named-default': 'warn'
};
