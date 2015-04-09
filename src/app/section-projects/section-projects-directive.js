'use strict';

angular.module('portfolio.sectionProjects')
  .directive('sectionProjects', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/section-projects/section-projects.html',
      controller: 'SectionProjectsCtrl'
    };
  });
