var fs = require('fs');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    cache: false,
    entry: {
        index: './index'
    },
    output: {
        path: path.join(process.cwd(), './lib'),
        filename: "uxcore.js",
        library: "Uxcore",
        libraryTarget: "umd"
    },
    module: {},
    externals: {
        react: {
            root: 'React',
            var: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        }, 
        'react-dom': {
            root: 'ReactDOM',
            var: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        }
    },
    plugins: [
        new webpack.optimize.DedupePlugin()
    ]
};