'use strict';

angular.module('portfolio.sectionContact')
  .directive('sectionContact', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/section-contact/section-contact.html',
      controller: 'SectionContactCtrl'
    };
  });
