'use strict';

angular.module('portfolio.sectionSkills')
  .directive('sectionSkills', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/section-skills/section-skills.html',
      controller: 'SectionSkillsCtrl'
    };
  });
