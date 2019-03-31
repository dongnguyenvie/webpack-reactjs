const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')


const webpackConfig =  merge(baseWebpackConfig(config.env), {

})

module.exports = webpackConfig