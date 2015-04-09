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
      //one-way binding, !! copy as String value !!
      scope: {
        img: '@img',
        alt: '@alt',
        header: '@header',
        content: '@content',
        date: '@date'
      },
      templateUrl: 'components/codyhouse-timeline/timeline-item.html'
    };
  });
