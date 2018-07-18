var webpack = require('webpack');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

module.exports = {
  cache: false,
  entry: {
    index: './index',
  },
  output: {
    path: path.join(process.cwd(), './build'),
    filename: 'uxcore.js',
    library: 'Uxcore',
    libraryTarget: 'umd',
  },
  module: {},
  externals: {
    react: {
      root: 'React',
      var: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      var: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
    },
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh|en/),
    new DuplicatePackageCheckerPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};
