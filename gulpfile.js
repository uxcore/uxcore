var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleancss = require('gulp-clean-css');
var webpack = require('webpack');
var Promise = require('promise');
var git = require('git-rev');
var file = require('html-wiring');
var inquirer = require('inquirer');
var spawn = require('cross-spawn');
var colors = require('colors/safe');

colors.setTheme({
    info: ['bold', 'green']
});

var webpackCfg = require('./webpack.conf.js');
var pkg = JSON.parse(file.readFileAsString('package.json'));

var runCmd = function(cmd, args, fn) {
    args = args || [];
    var runner = require('child_process').spawn(cmd, args, {
        // keep color
        stdio: 'inherit',
    });
    runner.on('close', (code) => {
        if (fn) {
            fn(code);
        }
    });
}

var versionCompare = function(a, b) {
    var aArr = a.split('.');
    var bArr = b.split('.');
    var larger = false;
    for (var i = 0; i < 3; i++) {
        if (parseInt(aArr[i]) === parseInt(bArr[i])) {

        }
        else {
            larger = parseInt(aArr[i]) > parseInt(bArr[i]);
            break;
        }
    }
    return larger;
}

var getQuestions = function() {
        var me = this;
        return new Promise(function(resolve, reject) {
            git.branch(function(branch) {
                var defaultBranch = branch;
                var defaultNpm = 'npm';
                var questions = [
                    {
                        type: 'input',
                        name: 'version',
                        message: 'please enter the package version to publish (should be xx.xx.xx)',
                        default: pkg.version,
                        validate: function(input) {
                            if (/\d+\.\d+\.\d+/.test(input)) {
                                if (versionCompare(input, pkg.version)) {
                                    return true;
                                }
                                else {
                                    return "the version you entered should be larger than now"
                                }
                            }
                            else {
                                return "the version you entered is not valid"
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'branch',
                        message: 'which branch you want to push',
                        default: defaultBranch
                    },
                    {
                        type: 'input',
                        name: 'npm',
                        message: 'which npm you want to publish',
                        default: defaultNpm,
                        validate: function(input) {
                            if (/npm/.test(input)) {
                                return true;
                            }
                            else {
                                return "it seems not a valid npm"
                            }
                        }
                    }
                ];
                resolve(questions);
            });
        })
    }

gulp.task('js_build', function(done) {
    var compiler = webpack(webpackCfg, function(err, stats) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('webpack log:' + stats.toString({
                hash: false,
                chunks: false,
                children: false
            }));
            done();
        }
    });
});


gulp.task('js_uglify', ['js_build'], function(done) {
    gulp.src("./lib/uxcore.js")
        .pipe(uglify({
            mangle: false
        }))
        .pipe(rename('uxcore.min.js'))
        .pipe(gulp.dest('./lib'))
        .on('end', function() {
            done();
        });
});

gulp.task('copy_css', function(done) {
    gulp.src(['./node_modules/uxcore-kuma/dist/**.css'])
        .pipe(gulp.dest('./assets'))
        .on('end', function() {
            done();
        });
});

gulp.task('iconfont', function(done) {
    gulp.src(['./iconfont.css'])
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./assets'))
        .on('end', function() {
            done();
        });
});


gulp.task('pub', ['js_uglify', 'copy_css', 'iconfont'], function() {
    getQuestions().then(function(questions) {
        inquirer.prompt(questions).then(function(answers) {
            pkg.version = answers.version;
            file.writeFileFromString(JSON.stringify(pkg, null, ' '), 'package.json');
            console.log(colors.info('#### Git Info ####'));
            spawn.sync('git', ['add', '.'], {stdio: 'inherit'});
            spawn.sync('git', ['commit', '-m', 'ver. ' + pkg.version], {stdio: 'inherit'});
            spawn.sync('git', ['push', 'origin', answers.branch], {stdio: 'inherit'});
            console.log(colors.info('#### Npm Info ####'));
            spawn.sync(answers.npm, ['publish'], {stdio: 'inherit'});
        }).catch(function(err) {console.log(err);});
    }).catch(function(err) {console.log(err);});
});

gulp.task('default', ['js_uglify', 'copy_css', 'iconfont']);