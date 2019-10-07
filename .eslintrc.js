module.exports = {
  root: true,
  extends: [
    'react-recommend'
  ],
  
  rules: {
    'no-restricted-syntax': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './build/webpack.base.conf.js'
      }
    },
  }
};
