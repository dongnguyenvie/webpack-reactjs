const rm = require('rimraf')
const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const config = require('../config')
const webpack = require('webpack')
const webpackConfig = require('./webpack.build.conf')

const spinner = ora('building for production...')
spinner.start()

process.env.NODE_ENV = 'production'

rm(config.build.assetsRoot, err => {
    if (err) throw err
    webpack(webpackConfig, (err, status) => {
        spinner.stop()
        if (err) throw err

        if (status.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
          }
          console.log(chalk.cyan('  Build complete.\n'))
          console.log(chalk.yellow('Nhớ vào AudioVyVy.com nghe truyện online mỗi đêm nhé!! \n'))
    })
})

