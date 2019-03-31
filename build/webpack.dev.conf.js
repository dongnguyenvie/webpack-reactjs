const path = require('path')
const merge = require('webpack-merge')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf')
const chalk = require('chalk')

process.env.NODE_ENV = 'dev'

const devWebpackConfig = merge(baseWebpackConfig(config.env), {
    devServer: {
        hot: true,
        compress: true,
        overlay: false,
        // quiet: true,
        // noInfo: true,
        hot: false,
        stats: {
            // copied from `'minimal'`
            all: false,
            modules: true,
            maxModules: 0,
            errors: true,
            warnings: true,
            // our additional options
            moduleTrace: true,
            errorDetails: true,
          },
        host: process.env.HOST || config.dev.host,
        port: process.env.PORT || config.dev.port
    }
})

module.exports = new Promise((resolve, reject) => {
    console.log(chalk.green(`chúc các bạn vui vẻ :3`))
    resolve(devWebpackConfig)
})