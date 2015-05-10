'use strict';

angular.module('portfolio.sectionProjects')
  .controller('SectionProjectsCtrl', function ($scope, ProjectsFactory) {
    //projekty cez factory
    $scope.projects = ProjectsFactory;

    //nakliknuta galeria pre projekt
    $scope.selectedProject = null;

    $scope.onGalleryClick = function (project) {
      $scope.selectedProject = project;
    };
  });
