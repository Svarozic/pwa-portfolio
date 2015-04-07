'use strict';

angular.module('portfolio.sectionAbout')
  .directive('sectionAbout', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/section-about/section-about.html'
    };
  });
