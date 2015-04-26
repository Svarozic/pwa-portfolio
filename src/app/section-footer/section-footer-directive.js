'use strict';

angular.module('portfolio.sectionFooter')
  .directive('sectionFooter', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/section-footer/section-footer.html'
    };
  });
