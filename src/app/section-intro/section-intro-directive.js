'use strict';

/* global $ */
/* global window */

angular.module('portfolio.sectionIntro')
  .directive('sectionIntro', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/section-intro/section-intro.html',
      link: function (scope, element) {
        var screenWidth = $(window).width() + 'px';
        var screenHeight = '';
        if ($(window).height() > 500) {
          screenHeight = $(window).height() + 'px';
        }
        else {
          screenHeight = '500px';
        }

        element.css({
          width: screenWidth,
          height: screenHeight
        });
        element.children().eq(0).css({
          width: screenWidth,
          height: screenHeight
        });
      }

    };
  });
