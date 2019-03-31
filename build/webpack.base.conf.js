const path = require('path')
const HWP = require('html-webpack-plugin')
const webpack = require('webpack')
const config = require('../config')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const createLintingRule = () =>({
    enforce: "pre",
    test: /\.js$/,
    exclude: [/node_modules/],
    loader: ['eslint-loader'],
})

module.exports = env => {
    console.log('\n', env, '\n')
    env = !env ? {} : env
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
      }, {})

    return {
        entry: {
            bundle: config.build.assetsMain
        },
        output: {
            path: config.build.assetsRoot,
            filename: '[name].[hash].bundle.js'
        },
        module: {
            rules: [
                ...(config.dev.useEslint ? [createLintingRule()] : [])
                ,
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    loader: ['babel-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'file-loader',
                    options: {
                      limit: 10000,
                      name: '[path][name]-[hash:8].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new HWP ({
                template: path.resolve(__dirname, '../index.html'),
                filename: config.build.index
            }),
            new webpack.DefinePlugin(envKeys),
            new ExtractTextPlugin({
                filename: 'css/[name].css',
                allChunks: true
              })
        ]
    }
}
