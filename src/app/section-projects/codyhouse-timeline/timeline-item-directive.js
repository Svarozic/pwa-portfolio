'use strict';

angular.module('gryfonnLair.codyhouseTimeline')
  .directive('cdTimelineContainer', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div id="cd-timeline" class="cd-container" ng-transclude></div>'
    };
  })
  .directive('cdTimeline', function () {
    return {
      require: '^cdTimelineContainer',
      restrict: 'E',
      replace: true,
      //two-way binding
      scope: {
        project: '=project'
      },
      templateUrl: 'app/section-projects/codyhouse-timeline/timeline-item.html'
    };
  });
