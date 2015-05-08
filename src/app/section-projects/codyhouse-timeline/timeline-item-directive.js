'use strict';

angular.module('gryfonnLair.codyhouseTimeline')
  .directive('cdTimeline', function () {
    return {
      restrict: 'E',
      replace: true,
      //two-way binding, len koli tomu ze one-way sa berie ako text vzdy, a ja potrebuje objekt
      scope: {
        project: '=project'
      },
      templateUrl: 'app/section-projects/codyhouse-timeline/timeline-item.html'
    };
  });
