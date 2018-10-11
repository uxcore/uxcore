var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var clean = require('gulp-clean');
var cleancss = require('gulp-cleancss');
var cssimport = require('gulp-cssimport');
var concat = require('gulp-concat');
var ejs = require('gulp-ejs');
var babel = require('gulp-babel');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var LessPluginInlineUrls = require('less-plugin-inline-urls');
var LessPluginFunctions = require('less-plugin-functions');
var webpack = require('webpack');
var Promise = require('promise');
var git = require('git-rev');
var file = require('html-wiring');
var inquirer = require('inquirer');
var spawn = require('cross-spawn');
var colors = require('colors/safe');
var rimraf = require('rimraf');
var childProcess = require('child_process');
var path = require('path');
var semver = require('semver');
var to = require('to-case');
// var fs = require('fs-extra');


var autoprefix = new LessPluginAutoPrefix({
  browsers: ['last 2 versions', 'not ie < 8'],
});

var cleancssOption = {
  advanced: false,
  aggressiveMerging: false,
  sourceMap: true,
  compatibility: 'ie8',
  debug: true,
};

var runCmd = function (cmd, args, fn) {
  var options = args || [];
  var runner = childProcess.spawn(cmd, options, {
    // keep color
    stdio: 'inherit',
  });
  runner.on('close', (code) => {
    if (fn) {
      fn(code);
    }
  });
};

var webpackCfg = require('./webpack.conf.js');
var pkg = JSON.parse(file.readFileAsString('package.json'));

function versionCompare(a, b) {
  return semver.gt(a, b);
}

function getQuestions() {
  return new Promise(function (resolve) {
    git.branch(function (branch) {
      var defaultBranch = branch;
      var defaultNpm = 'npm';
      var questions = [
        {
          type: 'input',
          name: 'version',
          message: 'please enter the package version to publish (should be xx.xx.xx)',
          default: pkg.version,
          validate: function (input) {
            if (semver.valid(input)) {
              if (versionCompare(input, pkg.version)) {
                return true;
              }
              return 'the version you entered should be larger than now';
            }
            return 'the version you entered is not valid';
          },
        },
        {
          type: 'input',
          name: 'branch',
          message: 'which branch you want to push',
          default: defaultBranch,
        },
        {
          type: 'input',
          name: 'npm',
          message: 'which npm you want to publish',
          default: defaultNpm,
          validate: function (input) {
            if (/npm/.test(input)) {
              return true;
            }
            return 'it seems not a valid npm';
          },
        },
      ];
      resolve(questions);
    });
  });
}

colors.setTheme({
  info: ['bold', 'green'],
});

gulp.task('js_build', ['js_clean'], function (done) {
  webpack(webpackCfg, function (err, stats) {
    if (err) {
      console.log(err);
    } else {
      console.log('webpack log:' + stats.toString({
        hash: false,
        chunks: false,
        children: false,
      }));
      done();
    }
  });
});


gulp.task('js_uglify', ['js_build'], function (done) {
  gulp.src('./build/uxcore.js')
      .pipe(uglify({
        mangle: false,
      }))
      .pipe(rename('uxcore.min.js'))
      .pipe(gulp.dest('./build'))
      .on('end', function () {
        done();
      });
});

gulp.task('theme', ['theme_clean', 'iconfont'], function (done) {
  gulp.src(['./style/theme/**/*.less'])
      .pipe(less({
        plugins: [autoprefix, LessPluginInlineUrls, new LessPluginFunctions()],
      }))
      .pipe(gulp.dest('./assets'))
      .on('end', function () {
        done();
      });
});


gulp.task('theme_transport', ['theme'], function () {
  var themes = ['blue', 'orange', 'green', 'alipay'];
  themes.forEach(function (theme) {
    gulp.src(['./assets/' + theme + '/kuma.css'])
        .pipe(concat(theme + '.css'))
        .pipe(gulp.dest('./assets'))
        .pipe(cleancss(cleancssOption))
        .pipe(rename({
          suffix: '.min',
        }))
        .pipe(gulp.dest('./assets'));
  });
  themes.forEach(function (theme) {
    gulp.src(['./assets/' + theme + '/compatible.css'])
        .pipe(rename({
          prefix: theme + '-',
        }))
        .pipe(gulp.dest('./assets'))
        .pipe(cleancss(cleancssOption))
        .pipe(rename({
          suffix: '.min',
        }))
        .pipe(gulp.dest('./assets'));
  });
  themes.forEach(function (theme) {
    gulp.src(['./assets/' + theme + '/'])
        .pipe(clean({
          read: false,
        }));
  });
});

gulp.task('iconfont', ['theme_clean'], function (done) {
  gulp.src(['./iconfont.css'])
      .pipe(cssimport())
      .pipe(cleancss({ compatibility: 'ie8' }))
      .pipe(gulp.dest('./assets'))
      .on('end', function () {
        done();
      });
});

gulp.task('js_clean', function (done) {
  rimraf('./build', {}, function () {
    done();
  });
});

gulp.task('theme_clean', function (done) {
  rimraf('./assets', {}, function () {
    done();
  });
});

gulp.task('pub', ['js_uglify', 'theme_transport'], function () {
  getQuestions().then(function (questions) {
    inquirer.prompt(questions).then(function (answers) {
      pkg.version = answers.version;
      file.writeFileFromString(JSON.stringify(pkg, null, ' '), 'package.json');
      console.log(colors.info('#### Git Info ####'));
      spawn.sync('git', ['add', '.'], { stdio: 'inherit' });
      spawn.sync('git', ['commit', '-m', 'ver. ' + pkg.version], { stdio: 'inherit' });
      spawn.sync('git', ['push', 'origin', answers.branch], { stdio: 'inherit' });
      const isBeta = !/^\d+.\d+.\d+$/.test(pkg.version);
      const npmArgs = isBeta ? ['publish', '--tag', 'beta'] : ['publish'];
      console.log(colors.info(`#### Npm${isBeta ? '(Beta Mode)' : ''} Info ####`));
      spawn.sync(answers.npm, npmArgs, { stdio: 'inherit' });
    }).catch(function (err) { console.log(err); });
  }).catch(function (err) { console.log(err); });
});

gulp.task('test', function (done) {
  var karmaBin = require.resolve('karma/bin/karma');
  var karmaConfig = path.join(__dirname, './karma.phantomjs.conf.js');
  var args = [karmaBin, 'start', karmaConfig];
  runCmd('node', args, done);
});

gulp.task('makefiles', function () {
  rimraf('./lib', {}, () => {
    const components = Object.keys(pkg.dependencies)
      .filter((comp) => /^uxcore-/.test(comp))
      .map((comp) => {
        const compname = comp.split('-').slice(1).join('-');
        return {
          compname,
          CompName: to.pascal(compname),
        };
      });

    gulp.src('./templates/component.less')
      .pipe(ejs({
        component_names: components.map(comp => comp.compname),
        ComponentNames: components.map(comp => comp.CompName),
      }))
      .pipe(gulp.dest('./style'));
    const babelConfig = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: 'ie 10',
            },
          },
        ],
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-export-default-from',
        'babel-plugin-add-module-exports',
      ],
    };
    components.concat([
      {
        compname: 'select',
        CompName: 'Select',
      },
    ]).forEach((comp) => {
      gulp.src('./templates/index.js')
        .pipe(ejs({
          compname: comp.compname === 'select' ? 'select2' : comp.compname,
        }))
        .pipe(babel(babelConfig))
        .on('error', console.log)
        .pipe(gulp.dest(`./lib/${comp.CompName}`));
    });
    components.concat([
      {
        compname: 'select',
        CompName: 'Select',
      },
    ]).forEach((comp) => {
      gulp.src('./templates/style.js')
        .pipe(ejs({
          compname: comp.compname === 'select' ? 'select2' : comp.compname,
        }))
        .pipe(babel(babelConfig))
        .on('error', console.log)
        .pipe(gulp.dest(`./lib/${comp.CompName}`));
    });
  });
});

gulp.task('default', ['js_uglify', 'theme_transport']);
