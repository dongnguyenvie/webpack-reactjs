const path = require('path')
const HWP = require('html-webpack-plugin')
const webpack = require('webpack')
const config = require('../config')

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
                    test: /\.(scss|css|sass)$/,
                    loader: [
                        'style-loader', // creates style nodes from JS strings
                        'css-loader', // translates CSS into CommonJS
                        'sass-loader' // compiles Sass to CSS, using Node Sass by default
                    ],
                },
            ]
        },
        plugins: [
            new HWP ({
                    template: path.resolve(__dirname, '../index.html'),
                    filename: config.build.index
            }),
            new webpack.DefinePlugin(envKeys)
        ]
    }
}
