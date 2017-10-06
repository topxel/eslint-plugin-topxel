// For more info: https://eslint.org/docs/rules/#best-practices

module.exports = {
  // enforces getter/setter pairs in objects
  'accessor-pairs': 'off',

  // enforces return statements in callbacks of array's methods
  'array-callback-return': 'warn',

  // Treat var statements as if they were block scoped
  'block-scoped-var': 'error',

  // enforce that class methods utilize this
  'class-methods-use-this': 'warn',

  // specify the maximum cyclomatic complexity allowed in a program
  complexity: 'off',

  // require return statements to either always or never specify values
  'consistent-return': 'warn',

  // specify curly brace conventions for all control statements
  curly: ['error', 'multi-line'],

  // require default case in switch statements
  'default-case': 'error',

  // enforces consistent newlines before or after dots
  'dot-location': ['warn', 'property'],

  // encourages use of dot notation whenever possible
  'dot-notation': ['error', { allowKeywords: true }],

  // require the use of === and !==
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // Make sure for-in loops have an if statement
  'guard-for-in': 'warn',

  // disallow the use of alert, confirm, and prompt
  'no-alert': 'warn',

  // disallow use of arguments.caller or arguments.callee
  'no-caller': 'error',

  // disallow lexical declarations in case clauses
  'no-case-declarations': 'error',

  // disallow division operators explicitly at beginning of regular expression
  'no-div-regex': 'warn',

  // disallow else blocks after return statements in if statements
  'no-else-return': 'error',

  // disallow empty functions
  'no-empty-function': 'warn',

  // disallow use of empty destructuring patterns
  'no-empty-pattern': 'error',

  // disallow comparisons to null without a type-checking operator
  'no-eq-null': 'off',

  // disallow use of eval()
  'no-eval': 'error',

  // disallow adding to native types
  'no-extend-native': 'error',

  // disallow unnecessary function binding
  'no-extra-bind': 'error',

  // disallow unnecessary labels
  'no-extra-label': 'error',

  // disallow fallthrough of case statements
  'no-fallthrough': 'error',

  // disallow the use of leading or trailing decimal points in numeric literals
  'no-floating-decimal': 'error',

  // disallow reassignments of native objects
  'no-global-assign': 'error',

  // disallow the type conversions with shorter notations
  'no-implicit-coercion': 'warn',

  // disallow var and named functions in global scope
  'no-implicit-globals': 'warn',

  // disallow use of eval()-like methods
  'no-implied-eval': 'error',

  // disallow this keywords outside of classes or class-like objects
  'no-invalid-this': 'off',

  // disallow usage of __iterator__ property
  'no-iterator': 'error',

  // disallow use of labeled statements
  'no-labels': 'error',

  // disallow unnecessary nested blocks
  'no-lone-blocks': 'error',

  // disallow creation of functions within loops
  'no-loop-func': 'error',

  // disallow the use of magic numbers
  'no-magic-numbers': 'off',

  // disallow use of multiple spaces
  'no-multi-spaces': [
    'error',
    {
      ignoreEOLComments: false
    }
  ],

  // disallow use of multiline strings
  'no-multi-str': 'error',

  // disallow use of new operator for Function object
  'no-new-func': 'error',

  // disallows creating new instances of String, Number, and Boolean
  'no-new-wrappers': 'error',

  // disallow use of new operator when not part of the assignment or comparison
  'no-new': 'error',

  // disallow use of octal literals
  'no-octal': 'error',

  // disallow octal escape sequences in string literals
  'no-octal-escape': 'error',

  // allow reassignment of function parameters
  'no-param-reassign': ['error', { props: true }],

  // disallow usage of __proto__ property
  'no-proto': 'error',

  // disallow declaring the same variable more than once
  'no-redeclare': 'error',

  // disallow certain object properties
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated'
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.'
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.'
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.'
    }
  ],

  // disallow use of assignment in return statement
  'no-return-assign': 'error',

  // disallows unnecessary return await
  'no-return-await': 'error',

  // disallow use of javascript: urls
  'no-script-url': 'error',

  // disallow assignments where both sides are exactly the same
  'no-self-assign': 'error',

  // disallow comparisons where both sides are exactly the same
  'no-self-compare': 'error',

  // disallow use of comma operator
  'no-sequences': 'error',

  // disallow throwing literals as exceptions
  'no-throw-literal': 'error',

  // disallow unmodified conditions of loops
  'no-unmodified-loop-condition': 'error',

  // disallow usage of expressions in statement position
  'no-unused-expressions': 'warn',

  // disallow unused labels
  'no-unused-labels': 'error',

  // disallow unnecessary .call() and .apply()
  'no-useless-call': 'error',

  // disallow unnecessary concatenation of literals or template literals
  'no-useless-concat': 'warn',

  // disallow unnecessary usage of escape character
  'no-useless-escape': 'error',

  // disallow redundant return statements
  'no-useless-return': 'error',

  // disallow use of void operator
  'no-void': 'error',

  // disallow usage of configurable warning terms in comments
  'no-warning-comments': 'off',

  // disallow use of the with statement
  'no-with': 'error',

  // require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // require use of the second argument for parseInt()
  radix: 'error',

  // disallow async functions which have no await expression
  'require-await': 'error',

  // requires to declare all vars on top of their containing scope
  'vars-on-top': 'off',

  // require immediate function invocation to be wrapped in parentheses
  'wrap-iife': ['error', 'inside'],

  // require or disallow Yoda conditions
  yoda: ['error']
};
