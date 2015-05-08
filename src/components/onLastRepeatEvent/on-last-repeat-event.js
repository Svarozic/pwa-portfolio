'use strict';

/**
 * Ak sa jedna o posledny element v ng-repeat direktive, vyhodit to event s nazvom definovany
 * v samotnej atributovej direktive, a v argumentoch posielam element z kt sa to hodilo
 * http://stackoverflow.com/questions/15207788/calling-a-function-when-ng-repeat-has-finished
 *
 * Pouzitie:
 * <img ng-repeat="i in project.images" gl-on-last-repeat="timelineRepeatFinished"/>
 *
 */


angular.module('gryfonnlair.onLastRepeat', [])
  .directive('glOnLastRepeat', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function () {
            scope.$emit(attr.glOnLastRepeat, {element: element});
          });
        }
      }
    };
  });
