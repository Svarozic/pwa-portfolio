'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

module.exports = function (options) {
    gulp.task('watch', ['inject'], function () {

        gulp.watch([options.src + '/*.html', 'bower.json'], ['inject']);

        gulp.watch(options.src + '/{app,components}/**/*.css', function (event) {
            if (isOnlyChange(event)) {
                browserSync.reload(event.path);
            } else {
                gulp.start('inject');
            }
        });

        gulp.watch(options.src + '/{app,components}/**/*.js', function (event) {
            if (isOnlyChange(event)) {
                gulp.start('scripts');
            } else {
                gulp.start('inject');
            }
        });

        gulp.watch(options.src + '/{app,components}/**/*.html', function (event) {
            browserSync.reload(event.path);
        });
    });

    //gryfonn-gulp
    /**
     * Watch na gulp files a spustanie inject tasku
     */
    gulp.task('watch:gulp', ['clean'], function () {
        gulp.watch(['gulp/*.js'], function (event) {
            if (isOnlyChange(event)) {
                return gulp.start('gulp-inject');
            }
        });
    });
    //gryfonn-gulp
    /**
     * zaobalenie injectovania pre dependency na clean
     */
    gulp.task('gulp-inject', ['clean'], function () {
        return gulp.start('inject');
    })
};
