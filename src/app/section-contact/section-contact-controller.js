'use strict';

angular.module('portfolio.sectionContact')
  .controller('SectionContactCtrl', function ($scope, $http) {
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

    $scope.sendEmail = function () {
      $scope.checkFirstName();
      $scope.checkLastName();
      $scope.checkEmail();
      $scope.checkText();

      //TODO dokoncit testnutt mail

      if (!$scope.contact.firstNameError && !$scope.contact.lastNameError
        && !$scope.contact.emailError && !$scope.contact.textError) {
        var mailData = {
          'key': 'T_9ZKsoB9JJ4IoX1Tk5DFA',
          'message': {
            'from_email': 'it-portfolio@gmail.com',
            'to': [
              {
                'email': 'petranikpeter@gmail.com',
                'name': 'Name',
                'type': 'to'
              }
            ],
            'autotext': 'true',
            'subject': 'IT_PORTFOLIO_MSG',
            'html': 'TEXT'
          }
        };
        $http.post('https://mandrillapp.com/api/1.0/messages/send.json', mailData)
          .success(function (data) {
            console.log(angular.toJson(data));
          })
          .error(function (err) {
            console.log(angular.toJson(err));
          });
      }
      else {
        console.log('contact form not valid');
      }
    };
  })
;
