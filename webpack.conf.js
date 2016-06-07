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
        react: 'var React', // 相当于把全局的React作为模块的返回 module.exports = React;
        'react-dom': 'var ReactDOM'
    },
    plugins: [
        new webpack.optimize.DedupePlugin()
    ]
};