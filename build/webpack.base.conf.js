/**
 * @file base conf
 * @author onepixel
 */

const path = require('path');
const pkg = require('../package.json');

module.exports = {
    entry: {
        app: './src/index.js',
        venders: Object.keys(pkg.dependencies)
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].js',
        chunkFilename: 'pages/[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
           '@': path.join(__dirname, '../src')
        }
    },

    module: {
        // noParse: /es6-promise\.js$/,

        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}
