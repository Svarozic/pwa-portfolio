'use strict';

angular.module('portfolio.sectionProjects')
  .controller('SectionProjectsCtrl', function ($scope, ProjectsFactory) {
    //projekty cez factory
    $scope.projects = ProjectsFactory;

    //nakliknuta galeria pre projekt
    $scope.selectedProject = null;

    $scope.onGalleryClick = function (project) {
      $scope.selectedProject = project;

      //var dialog = ngDialog.open({
      //  plain: true,
      //  template: '<project-detail></project-detail>',
      //  scope: $scope
      //});
      //
      ////po zatvorenie promise ze clear selected
      //dialog.closePromise.then(function () {
      //  $scope.selectedProject = null;
      //});
    };
  });
