// For more info: https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest

module.exports = {
  // disallow disabled tests
  'jest/no-disabled-tests': 'warn',

  // disallow focused tests
  'jest/no-focused-tests': 'error',

  // disallow identical titles
  'jest/no-identical-title': 'error',

  // ensure expect is called correctly
  'jest/valid-expect': 'error'
};
