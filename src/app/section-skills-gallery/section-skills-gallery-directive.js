'use strict';

angular.module('portfolio.sectionSkillsGallery')
  .directive('sectionSkillsGallery', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'app/section-skills-gallery/section-skills-gallery.html',
      controller: 'SectionSkillsGalleryCtrl'
    };
  });
