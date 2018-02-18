// For more info: https://github.com/gajus/eslint-plugin-flowtype

module.exports = {
  // enforces a particular style for boolean type annotations
  'flowtype/boolean-style': ['error', 'boolean'],

  // used to suppress no-undef reporting of type identifiers
  'flowtype/define-flow-type': 'warn',

  // enforces consistent use of trailing commas in Object and Tuple annotations
  'flowtype/delimiter-dangle': ['error', 'never'],

  // enforces consistent spacing within generic type annotation parameters
  'flowtype/generic-spacing': ['error', 'never'],

  // checks for duplicate properties in Object annotations
  'flowtype/no-dupe-keys': 'error',

  // disallows $FlowFixMe comment suppressions
  'flowtype/no-flow-fix-me-comment': 'off',

  // requires use of $ReadOnlyArray instead of just Array or array shorthand notation
  'flowtype/no-mutable-array': 'off',

  // disallows use of primitive constructors as types, such as Boolean, Number and String
  'flowtype/no-primitive-constructor-types': 'error',

  // disallows Flow type imports, aliases, and annotations in files missing a valid Flow file declaration (or a @noflow annotation)
  'flowtype/no-types-missing-file-annotation': 'error',

  // this rule ignores type cast expressions
  'flowtype/no-unused-expressions': [
    'error',
    { allowTernary: true, allowShortCircuit: true }
  ],

  // warns against weak type annotations any, Object and Function.
  'flowtype/no-weak-types': 'off',

  // enforces consistent separators between properties in Flow object types
  'flowtype/object-type-delimiter': 'comma',

  // this rule enforces exact object types
  'flowtype/require-exact-type': ['error', 'always'],

  // requires that all function parameters have type annotations
  'flowtype/require-parameter-type': 'off',

  // requires that functions have return type annotation
  'flowtype/require-return-type': 'off',

  // this rule validates Flow file annotations
  'flowtype/require-valid-file-annotation': [
    'error',
    'always',
    {
      annotationStyle: 'line'
    }
  ],

  // requires that all variable declarators have type annotations
  'flowtype/require-variable-type': 'off',

  // enforces consistent use of semicolons after type aliases
  'flowtype/semi': ['error', 'always'],

  // enforces sorting of Object annotations
  'flowtype/sort-keys': 'off',

  // enforces consistent spacing after the type annotation colon
  'flowtype/space-after-type-colon': ['error', 'always'],

  // enforces consistent spacing before the opening < of generic type annotation parameters
  'flowtype/space-before-generic-bracket': ['error', 'never'],

  // enforces consistent spacing before the type annotation colon
  'flowtype/space-before-type-colon': ['error', 'never'],

  // enforces a consistent naming pattern for type aliases
  'flowtype/type-id-match': 'off',

  // enforces consistent spacing around union and intersection type separators (| and &)
  'flowtype/union-intersection-spacing': ['error', 'always'],

  // used to suppress no-unused-vars errors that are triggered by type aliases
  'flowtype/use-flow-type': 'warn',

  // checks for simple Flow syntax errors
  'flowtype/valid-syntax': 'warn'
};
