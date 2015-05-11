'use strict';

angular.module('portfolio.sectionProjects')
  .controller('SectionProjectsCtrl', function ($scope, ProjectsFactory, $timeout) {

    //projekty cez factory
    $scope.projects = ProjectsFactory;

    //nakliknuta galeria pre projekt
    $scope.selectedProject = null;

    $scope.onGalleryOpen = function (project) {
      $scope.selectedProject = project;
      var modal = $('#projects-modal-window');
      modal.css('visibility', 'visible');
      enableScroll(false);
    };

    $scope.onGalleryClose = function () {
      var modal = $('#projects-modal-window');
      modal.css('visibility', 'hidden');
      enableScroll(true);
      $scope.selectedProject = null;
    };

    function enableScroll(flag) {
      $('body').css('overflow', flag ? 'auto' : 'hidden');
    }
  });
