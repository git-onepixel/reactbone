/**
 * @file test conf
 * @author onepixel
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');
const pkg = require('../package.json');

module.exports = merge(baseWebpackConfig, {

    module: {
        loaders: [
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
                })
            }
        ]
    },    

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('testing')
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'venders',
            filename: 'js/[name].js',
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/layouts/index.html')
        }),

        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),
        
        new ZipWebpackPlugin({
            filename: `${pkg.name}_test.zip`
        })
    ]
});
