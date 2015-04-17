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
        project: '=project'
      },
      templateUrl: 'app/section-projects/codyhouse-timeline/timeline-item.html',
      controller: function ($scope) {
        console.log(JSON.stringify($scope.project))
      }
    };
  });
