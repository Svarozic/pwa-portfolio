'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

module.exports = function (options) {
    gulp.task('watch', ['inject'], function () {

        gulp.watch([options.src + '/*.html', 'bower.json'], function (event) {
            gulp.start('inject');
            reloadBrowser(event, true);
        });

        gulp.watch(options.src + '/{app,components}/**/*.css', function (event) {
            if (isOnlyChange(event)) {
                reloadBrowser(event)
            } else {
                gulp.start('inject');
                reloadBrowser(event, true);
            }
        });

        gulp.watch(options.src + '/{app,components}/**/*.js', function (event) {
            if (isOnlyChange(event)) {
                gulp.start('scripts');
                reloadBrowser(event);
            } else {
                gulp.start('inject');
                reloadBrowser(event, true);
            }
        });

        gulp.watch(options.src + '/{app,components}/**/*.html', function (event) {
            reloadBrowser(event);
        });
    });
};

function reloadBrowser(event, isDelayed, millis) {
    //zavysi to od scripts + inject tasku casu kolko maju dokopy a podla toho zladit
    var defaultMillis = 350;


    if (isDelayed) {
        setTimeout(function () {
            browserSync.reload(event.path);
        }, parseInt(millis) || 300);
    }
    else {
        browserSync.reload(event.path);
    }
}