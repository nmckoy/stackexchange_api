'use strict';

// answer view controller
angular.module('SRCH')
  .controller('AnswersController', ['$scope', '$log', 'PropertyService', 'AnswersService', 'QuestionsService', '$routeParams',
    function AnswersController($scope, $log, PropertyService, AnswersService, QuestionsService, $routeParams) {
      // $log.info($routeParams.keywords);
      QuestionsService.get({id: $routeParams.id})
        .$promise.then(function(data) {
            $scope.question = data.items;
        }, function(error) {
            $scope.error = error.message;
        });
     
      AnswersService.get({id: $routeParams.id})
        .$promise.then(function(data) {
          $scope.answers = data.items;
        }, function(error) {
            $scope.error = error.message;
        });
      
      $scope.quesitonLink = PropertyService.getField();
    //   $log.info($scope.questionLink);
    }]);
    