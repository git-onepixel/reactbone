/**
 * @file prod conf
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
    
    output: {
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'pages/[name].[chunkhash:8].js'
    },

    module: {
        loaders: [
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?minimize',
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
                NODE_ENV: JSON.stringify('production')
            }
        }),
        
        new webpack.optimize.UglifyJsPlugin({
            warnings: false
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'venders',
            filename: 'js/[name].[chunkhash:8].js',
            minChunks: Infinity
        }),

        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/layouts/index.html'),
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),

        new ZipWebpackPlugin({
            filename: `${pkg.name}_prod.zip`
        })
    ]
     
});
