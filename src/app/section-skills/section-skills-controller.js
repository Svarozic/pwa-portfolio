'use strict';

angular.module('portfolio.sectionSkills')
  .controller('SectionSkillsCtrl', function ($scope, SkillFactory) {
    $scope.skills = [];

    angular.forEach(SkillFactory, function (value) {
      this.push(value.title);
    }, $scope.skills);

    /*
     Specialne skilli ku ktorym nemam obrazok ale tak by tam boli vidiet
     */
    $scope.skills = $scope.skills.concat([
      //another type of skills
      'Testing',

      'German',
      'English',
      'Slovak',
      'Kanban'
    ]);
  });
