'use strict';

angular.module('portfolio.sectionSkillsGallery')
  .controller('SectionSkillsGalleryCtrl', function ($scope, SkillFactory) {

    //TODO zjednotit skills a gallery tak ze spravim service kde bude objekt {imgSrc title} a v skills direktive vytiahnem z service len title a pridam do pola
    //kde uz budu specialne skill ako germna/english atd

    $scope.filterByNameLength = function (s) {
      return s.title.length ? s.title.length : 0;
    };

    $scope.imagesSkillsDir = 'img/skills/';

    $scope.skills = SkillFactory;
  });
