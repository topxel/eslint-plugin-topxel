const merge = require('merge');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': ['.js', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(scss|css|svg|json)$'],
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  },
  plugins: ['import', 'prettier', 'babel', 'react', 'flowtype', 'jest'],
  extends: [
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  rules: merge(
    require('../rules/possibleErrors'),
    require('../rules/bestPractices'),
    require('../rules/strict'),
    require('../rules/variables'),
    require('../rules/node'),
    require('../rules/style'),
    require('../rules/es6'),
    require('../rules/plugins/flowtype'),
    require('../rules/plugins/import'),
    require('../rules/plugins/jest')
  )
};
