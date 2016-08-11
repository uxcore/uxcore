var assign = require('object-assign');
var path = require('path');

var indexSpec = path.join(process.cwd(), 'tests/index.js');
console.log(indexSpec);
var files = [
  require.resolve('console-polyfill/index.js'),
  require.resolve('es5-shim/es5-shim.js'),
  require.resolve('es5-shim/es5-sham.js'),
  indexSpec,
];
var karmaCommonConfig = {
  reporters: ['mocha'],
  client: {
    mocha: {
      reporter: 'html', // change Karma's debug.html to the mocha web reporter
      ui: 'bdd',
    },
  },
  frameworks: ['mocha'],
  files: files,
};

module.exports = function (config) {
  config.set(assign(karmaCommonConfig, {
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],
    singleRun: true,
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered
      // (useful if karma exits without killing phantom)
      exitOnResourceError: true,
    },
  }));
};
