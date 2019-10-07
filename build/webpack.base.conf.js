/**
 * @file base conf
 * @author onepixel
 */

const path = require('path');
const webpack = require('webpack');
const config = require('../config');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: config.build.assetsRoot,
    filename: 'js/[name].js',
    chunkFilename: 'pages/[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: 'async',
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return (
          module.resource
          && /\.js$/.test(module.resource)
          && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      },
      chunks: ['app', 'async-app'],
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
  ],
};
