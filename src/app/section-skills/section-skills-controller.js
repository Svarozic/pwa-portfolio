'use strict';

angular.module('portfolio.sectionSkills')
  .controller('SectionSkillsCtrl', function ($scope, SkillFactory) {
    $scope.skills = [];
    $scope.filterText = '';

    angular.forEach(SkillFactory, function (value) {
      this.push(value.title);
    }, $scope.skills);

    $scope.getSelectedClassName = function (skillName) {
      return skillName.toLowerCase().indexOf($scope.filterText.toLowerCase()) != -1
        ? 'label-primary' : 'not-selected';
    }
  });
