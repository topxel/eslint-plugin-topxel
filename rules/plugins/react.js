// For more info: https://github.com/yannickcr/eslint-plugin-react

module.exports = {
  'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
  'react/jsx-wrap-multilines': [
    'error',
    {
      declaration: true,
      assignment: true,
      return: true,
      arrow: false
    }
  ],
  'react/prop-types': 'off'
};
