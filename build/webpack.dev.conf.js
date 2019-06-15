/**
 * @file dev conf
 * @author onepixel
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

    devServer: {
        historyApiFallback: true
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),

        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'venders',
            filename: 'js/[name].js',
            minChunks: 2
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/layouts/index.html')
        })
    ],

    devtool: 'eval-source-map'
     
});
