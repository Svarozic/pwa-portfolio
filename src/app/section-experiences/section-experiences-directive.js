'use strict';

angular.module('portfolio.sectionExperiences')
  .directive('sectionExperiences', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/section-experiences/section-experiences.html'
    };
  });
