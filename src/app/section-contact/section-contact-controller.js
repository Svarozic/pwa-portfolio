'use strict';

angular.module('portfolio.sectionContact')
  .controller('SectionContactCtrl', function ($scope, $http, $timeout) {
    $scope.msgMaxLenght = 250;
    $scope.contact = {
      firstName: undefined,
      firstNameError: false,
      lastName: undefined,
      lastNameError: false,
      email: undefined,
      emailError: false,
      phone: undefined,
      text: undefined,
      textError: false
    };

    $scope.isWobbling = false;

    $scope.mailInProgress = false;

    $scope.checkFirstName = function () {
      $scope.contact.firstNameError = !($scope.contact.firstName && $scope.contact.firstName.length && $scope.contact.firstName.length > 0);
    };

    $scope.checkLastName = function () {
      $scope.contact.lastNameError = !($scope.contact.lastName && $scope.contact.lastName.length && $scope.contact.lastName.length > 0);
    };

    $scope.checkEmail = function () {
      var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      $scope.contact.emailError = !regex.test($scope.contact.email);
    };

    $scope.checkText = function () {
      $scope.contact.textError = (!$scope.contact.text || !$scope.contact.text.length || $scope.contact.text.length < 1 || $scope.contact.text.length > $scope.msgMaxLenght);
    };

    /**
     * Posielanie mail cez madrill
     * https://mandrillapp.com/api/docs/messages.JSON.html#method=send
     */
    $scope.sendEmail = function () {
      $scope.checkFirstName();
      $scope.checkLastName();
      $scope.checkEmail();
      $scope.checkText();

      if (!$scope.contact.firstNameError && !$scope.contact.lastNameError && !$scope.contact.emailError && !$scope.contact.textError) {
        $scope.mailInProgress = true;
        var mailData = {
          'key': 'T_9ZKsoB9JJ4IoX1Tk5DFA',
          'message': {
            'to': [{'email': 'gryfonn@seznam.cz'}],
            'from_email': 'it.portfolio@github.com',
            'autotext': 'true',
            'subject': 'IT_PORTFOLIO_MSG' + $scope.contact.firstName + ' ' + $scope.contact.lastName,
            'html': '<b>' + $scope.contact.firstName + ' ' + $scope.contact.lastName + '</b><br/>' +
            '<b>' + $scope.contact.phone + '</b><br/>' +
            '<b>' + $scope.contact.email + '</b><br/>' +
            '<p>' + $scope.contact.text + '</p>'
          }
        };
        $http.post('https://mandrillapp.com/api/1.0/messages/send.json', mailData)
          .success(function () {
            $scope.mailInProgress = false;
            clearContactForm();
          })
          .error(function () {
            $scope.mailInProgress = false;
          });
      }
      else {
        $scope.isWobbling = true;

        $timeout(function () {
          $scope.isWobbling = false;
        }, 1000);
      }
    };

    /**
     * Vycisti scope premenne pre formular
     */
    function clearContactForm() {
      $scope.contact = {
        firstName: undefined,
        firstNameError: false,
        lastName: undefined,
        lastNameError: false,
        email: undefined,
        emailError: false,
        phone: undefined,
        text: undefined,
        textError: false
      };
    }
  });
