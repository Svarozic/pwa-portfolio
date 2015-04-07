'use strict';

/**
 * Requirements:
 * JQUERY.SCROLLTO.JS
 * https://github.com/flesler/jquery.scrollTo
 * <a href="XXX" scroll-to>
 */

/* global $ */

angular.module('gryfonnlair.scrollTo', [])
  .directive('scrollTo', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.click(function (event) {
          event.preventDefault();
          var fullUrl = attrs.href;
          var parts = fullUrl.split('#');
          var trgt = parts[1];

          $('body').scrollTo($('#' + trgt), 800, {offset: -80});
        });
      }
    };
  });
