'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require('lodash');
var wrench = require('wrench');

/**
 * Options objekt sa buchne do kazdeho skriptu ako parameter pre funkciu
 * @type {{src: string, dist: string, tmp: string, e2e: string, errorHandler: Function}}
 */
var options = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler: function (title) {
    return function (err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  }
};

/**
 * Rekurzivne citanie priecinka, kazdy skript definuje globalne tasky do gulpu preto ich vidim prepojene
 */
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
