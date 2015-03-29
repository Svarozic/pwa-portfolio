'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

module.exports = function (options) {
    gulp.task('inject', ['scripts'], function () {
        var injectStyles = gulp.src([
            options.src + '/{app,components}/**/*.css',
            //gryfonn-gulp pridane css z boostrap template
            options.src + '/css/**/*.css',
            '!' + options.src + '/css/**/*.{blue,green,pink,red,violet}.css'
        ], {read: false});


        var injectScripts = gulp.src([
            options.src + '/{app,components}/**/*.js',
            '!' + options.src + '/{app,components}/**/*.spec.js',
            '!' + options.src + '/{app,components}/**/*.mock.js',

            //gryfonn-gulp external kniznice v priecinku js
            options.src + '/js/**/*.js',
            '!' + options.src + '/js/**/*.spec.js',
            '!' + options.src + '/js/**/*.mock.js',
            //gryfonn-gulp specialne kniznice kt musely do headere
            '!' + options.src + '/js/modernizr-2.6.2.min.js',
            '!' + options.src + '/js/respond.min.js'
        ])
            .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'));


        //gryfonn-gulp inject modernizera a respond specialne
        var injectHeaderScripts = gulp.src([
            options.src + '/js/modernizr-2.6.2.min.js'
        ], {read: false});
        var injectHeaderIf9Scripts = gulp.src([
            options.src + '/js/respond.min.js'
        ], {read: false});


        var injectOptions = {
            ignorePath: [options.src, options.tmp + '/serve'],
            addRootSlash: false
        };

        var wiredepOptions = {
            directory: 'bower_components'
        };

        return gulp.src(options.src + '/*.html')
            .pipe($.plumber())
            .pipe($.inject(injectStyles, injectOptions))
            .pipe($.inject(injectScripts, injectOptions))

            //gryfonn-gulp modenizer
            .pipe($.inject(injectHeaderScripts, {
                ignorePath: [options.src, options.tmp + '/serve'],
                addRootSlash: false,
                starttag: '<!-- inject:head:{{ext}} -->'
            }))
            //gryfonn-gulp respond if9, custom transform funkcia vlozi html kod
            .pipe($.inject(injectHeaderIf9Scripts, {
                starttag: '<!-- inject:if9:{{ext}} -->',
                transform: function () {
                    return '<!-- Responsivity for older IE -->\n<!--[if lt IE 9]>\n<script src="js/respond.min.js"></script>\n<![endif]-->';
                }
            }))

            .pipe(wiredep(wiredepOptions))
            .pipe(gulp.dest(options.tmp + '/serve'));

    });
};
