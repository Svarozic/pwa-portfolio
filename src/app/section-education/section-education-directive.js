'use strict';

angular.module('portfolio.sectionEducation')
  .directive('sectionEducation', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/section-education/section-education.html',
      controller: 'SectionEducationCtrl',
      link: function (scope, element) {
        element.parallax('50%', 0.1);
      }
    };
  });
