'use strict';

/**
 * Requirements:
 * JQUERY.SCROLLTO.JS
 * https://github.com/flesler/jquery.scrollTo
 * <a href="XXX" scroll-to [scroll-to-dealy='XX']>
 */

/* global $ */
/* global setTimeout */

angular.module('gryfonnlair.scrollTo', [])
  .directive('scrollTo', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.click(function (event) {
          event.preventDefault();
          //var fullUrl = attrs.href;
          //var parts = fullUrl.split('#');
          //var trgt = parts[1];
          if (attrs.scrollToDelay) {
            setTimeout(function () {
              $('body').scrollTo($(attrs.scrollTo), 800, {offset: -80});
            }, attrs.scrollToDelay);
          }
          else {
            $('body').scrollTo($(attrs.scrollTo), 800, {offset: -80});
          }
        });
      }
    };
  });
