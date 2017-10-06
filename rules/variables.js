// For more info: http://eslint.org/docs/rules/#variables

module.exports = {
  // require or disallow initialization in variable declarations
  'init-declarations': 'off',

  // disallow catch clause parameters from shadowing variables in the outer scope
  'no-catch-shadow': 'off',

  // disallow deletion of variables
  'no-delete-var': 'error',

  // disallow labels that share a name with a variable
  'no-label-var': 'error',

  // restrict usage of specified global variables
  'no-restricted-globals': 'error',

  // disallow declaration of variables already declared in the outer scope
  'no-shadow': 'error',

  // disallow shadowing of names such as arguments
  'no-shadow-restricted-names': 'error',

  // disallow the use of undeclared variables unless mentioned in /*global */ comments
  'no-undef': 'error',

  // disallow initializing variables to undefined
  'no-undef-init': 'error',

  // disallow the use of undefined as an identifier
  'no-undefined': 'error',

  // disallow unused variables
  'no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true
    }
  ],

  // disallow use of variables before they are defined
  'no-use-before-define': [
    'error',
    {
      functions: true,
      classes: true,
      variables: true
    }
  ]
};
