// For more info: http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
  // enforce linebreaks after opening and before closing array brackets
  'array-bracket-newline': 'off',

  // enforce spacing inside array brackets
  'array-bracket-spacing': ['error', 'never'],

  // enforce line breaks after each array element
  'array-element-newline': 'off',

  // disallow or enforce spaces inside of single line blocks
  'block-spacing': ['error', 'always'],

  // enforce one true brace style
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],

  // require camel case names
  camelcase: ['error', { properties: 'always' }],

  // enforce or disallow capitalization of the first letter of a comment
  'capitalized-comments': 'off',

  // require or disallow trailing commas
  'comma-dangle': ['error', 'never'],

  // enforce spacing before and after comma
  'comma-spacing': ['error', { before: false, after: true }],

  // enforce one true comma style
  'comma-style': ['error', 'last'],

  // require or disallow padding inside computed properties
  'computed-property-spacing': ['error', 'never'],

  // enforces consistent naming when capturing the current execution context
  'consistent-this': 'off',

  // enforce newline at the end of file, with no multiple empty lines
  'eol-last': ['error', 'always'],

  // require or disallow spacing between function identifiers and their invocations
  'func-call-spacing': ['error', 'never'],

  // require function names to match the name of the variable or property to which they are assigned
  'func-name-matching': 'off',

  // require or disallow named function expressions
  'func-names': 'off',

  // enforces use of function declarations or expressions
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

  // enforce consistent line breaks inside function parentheses
  'function-paren-newline': ['error', 'consistent'],

  // Blacklist certain identifiers to prevent them being used
  'id-blacklist': 'off',

  // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  'id-length': [
    'warn',
    {
      min: 2,
      properties: 'always',
      exceptions: ['x', 'y', 'i', 'j', 't', '_', '$']
    }
  ],

  // require identifiers to match the provided regular expression
  'id-match': 'off',

  // enforce consistent indentation
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      // CallExpression: {
      //   parameters: null,
      // },
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }
  ],

  // specify whether double or single quotes should be used in JSX attributes
  'jsx-quotes': ['warn', 'prefer-double'],

  // enforces spacing between keys and values in object literal properties
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],

  // enforce spacing before and after keywords
  'keyword-spacing': [
    'error',
    {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }
  ],

  // enforce position of line comments
  'line-comment-position': ['warn', { position: 'above' }],

  // disallow mixed "LF" and "CRLF" as linebreaks
  'linebreak-style': 'off',

  // enforces empty lines around comments
  'lines-around-comment': 'off',

  // enforce a maximum depth that blocks can be nested
  'max-depth': ['off', 4],

  // enforce a maximum line length
  'max-len': [
    'error',
    80,
    2,
    {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }
  ],

  // enforce a maximum number of lines per file
  'max-lines': [
    'off',
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }
  ],

  // enforce a maximum depth that callbacks can be nested
  'max-nested-callbacks': 'off',

  // enforce a maximum number of parameters in function definitions
  'max-params': ['off', 3],

  // enforce a maximum number of statements allowed in function blocks
  'max-statements': ['off', 10],

  // enforce a maximum number of statements allowed per line
  'max-statements-per-line': ['off', { max: 1 }],

  // enforce newlines between operands of ternary expressions
  'multiline-ternary': 'off',

  // require a capital letter for constructors
  'new-cap': ['error', { newIsCap: true, capIsNew: false }],

  // require parentheses when invoking a constructor with no arguments
  'new-parens': 'error',

  // require a newline after each call in a method chain
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

  // disallow use of the Array constructor
  'no-array-constructor': 'error',

  // disallow bitwise operators
  'no-bitwise': 'error',

  // disallow use of the continue statement
  'no-continue': 'off',

  // disallow comments inline after code
  'no-inline-comments': 'error',

  // disallow if as the only statement in an else block
  'no-lonely-if': 'warn',

  // disallow mixes of different operators
  'no-mixed-operators': 'warn',

  // disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 'warn',

  // disallow use of chained assignment expressions
  'no-multi-assign': 'error',

  // disallow multiple empty lines
  'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

  // disallow negated conditions
  'no-negated-condition': 'warn',

  // disallow nested ternary expressions
  'no-nested-ternary': 'error',

  // disallow use of the Object constructor
  'no-new-object': 'error',

  // disallow the unary operators ++ and --
  'no-plusplus': 'error',

  // disallow specified syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. use Object.{keys,values,entries}, and iterate over the resulting array.'
    },
    {
      selector: 'ForOfStatement',
      message:
        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
    }
  ],

  // disallow tabs in file
  'no-tabs': 'warn',

  // disallow the use of ternary operators
  'no-ternary': 'off',

  // disallow trailing whitespace at the end of lines
  'no-trailing-spaces': [
    'error',
    {
      skipBlankLines: false,
      ignoreComments: false
    }
  ],

  // allow dangling underscores in identifiers
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: false
    }
  ],

  // disallow the use of Boolean literals in conditional expressions
  'no-unneeded-ternary': 'warn',

  // disallow whitespace before properties
  'no-whitespace-before-property': 'error',

  // enforce the location of single-line statements
  'nonblock-statement-body-position': 'off',

  // enforce consistent line breaks inside braces
  'object-curly-newline': 'off',

  // enforce consistent spacing inside braces
  'object-curly-spacing': ['error', 'always'],

  // enforce placing object properties on separate lines
  'object-property-newline': 'off',

  // enforce variables to be declared either together or separately in functions
  'one-var': ['error', 'never'],

  // require or disallow newlines around variable declarations
  'one-var-declaration-per-line': ['error', 'always'],

  // require or disallow assignment operator shorthand where possible
  'operator-assignment': ['warn', 'always'],

  // enforce consistent linebreak style for operators
  'operator-linebreak': 'off',

  // require or disallow padding within blocks
  'padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
    }
  ],

  // require or disallow padding lines between statements
  'padding-line-between-statements': 'off',

  // require quotes around object literal property names
  'quote-props': ['error', 'as-needed'],

  // enforce the consistent use of either backticks, double, or single quotes
  quotes: [
    'error',
    'single',
    { avoidEscape: true, allowTemplateLiterals: true }
  ],

  // require JSDoc comments
  'require-jsdoc': 'off',

  // require or disallow semicolons instead of ASI
  semi: ['error', 'always'],

  // enforce spacing before and after semicolons
  'semi-spacing': [
    'error',
    {
      before: false,
      after: true
    }
  ],

  // enforce location of semicolons
  'semi-style': ['error', 'last'],

  // requires object keys to be sorted
  'sort-keys': 'off',

  // require object keys to be sorted
  'sort-vars': 'off',

  // enforce consistent spacing before blocks
  'space-before-blocks': ['error', 'always'],

  // enforce consistent spacing before function definition opening parenthesis
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }
  ],

  // enforce consistent spacing inside parentheses
  'space-in-parens': ['error', 'never'],

  // require spacing around infix operators
  'space-infix-ops': 'error',

  // enforce consistent spacing before or after unary operators
  'space-unary-ops': ['warn', { words: true, nonwords: false }],

  // enforce consistent spacing after the // or /* in a comment
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        exceptions: ['-', '+']
      },
      block: {
        exceptions: ['-', '+'],
        balanced: true
      }
    }
  ],

  // enforce spacing around colons of switch statements
  'switch-colon-spacing': ['error', { after: true, before: false }],

  // require or disallow spacing between template tags and their literals
  'template-tag-spacing': ['error', 'never'],

  // require or disallow the Unicode BOM
  'unicode-bom': ['warn', 'never'],

  // require regex literals to be wrapped in parentheses
  'wrap-regex': 'off'
};
