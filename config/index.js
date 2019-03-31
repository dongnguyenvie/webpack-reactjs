'use strict'

const path = require('path')

module.exports = {
    dev: {
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 3000,
        // Paths
        assetsSubDirectory: 'static',

        // EsLint
        useEslint: true
    },
    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        assetsMain: path.resolve(__dirname, '../src/index.js'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
    },
    env: {
        URL: 'http://abc.com',
        TEST: 'xxx-xxx-xx'
    }
}