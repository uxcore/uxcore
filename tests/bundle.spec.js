var file = require('html-wiring');
var pkg = JSON.parse(file.readFileAsString('package.json'));
var components = Object.keys(pkg.devDependencies).filter(function (item) {
  return /uxcore/.test(item);
});
var _ = require('lodash');
var expect = require('expect.js');

var uxcore = require('../build/uxcore');

describe('bundle', function () {
  it('all uxcore devDependencies should be included', function (done) {
    var pass = true;
    components.forEach(function(item) {
      var componentName = _.capitalize(_.camelCase(item.split('-').slice(1).join('-')));
      console.log(typeof uxcore[componentName]);
      pass = typeof uxcore[componentName] === 'object';
    });
    expect(pass).to.be(true);
    done();
  });
});


