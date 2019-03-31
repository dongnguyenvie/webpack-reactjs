const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const webpackConfig =  merge(baseWebpackConfig(config.env), {
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                  })
            },
        ]
    },
    plugins: [
        new OptimizeCSSPlugin({
            cssProcessorOptions: { safe: true, map: { inline: false } }
        })
    ]
})

module.exports = webpackConfig