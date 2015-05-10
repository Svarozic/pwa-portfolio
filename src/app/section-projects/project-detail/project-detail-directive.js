'use strict';

angular.module('portfolio.projectDetail')
  .directive('projectDetail', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/section-projects/project-detail/project-detail.html'
    };
  });

