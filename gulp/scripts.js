'use strict';

/*
 * Len skontroluje vsetky scripty v  /SRC/{app,components} JsHintom a refreshne browser ak je spusteny
 */

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function (options) {
    gulp.task('scripts', function () {
        return gulp.src(options.src + '/{app,components}/**/*.js')
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe(browserSync.reload({stream: true}))
            .pipe($.size());
    });
};
