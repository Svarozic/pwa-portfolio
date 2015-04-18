'use strict';

angular.module('portfolio.navigationBar')
  .directive('navigationBar', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/navigation-bar/navigation-bar.html'
    };
  });
