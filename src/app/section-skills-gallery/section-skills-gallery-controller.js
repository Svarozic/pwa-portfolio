'use strict';

angular.module('portfolio.sectionSkillsGallery')
  .controller('SectionSkillsGalleryCtrl', function ($scope, SkillFactory) {

    $scope.filterByNameLength = function (s) {
      return s.title.length ? s.title.length : 0;
    };

    $scope.imagesSkillsDir = 'img/skills/';

    $scope.skills = SkillFactory;
  });
