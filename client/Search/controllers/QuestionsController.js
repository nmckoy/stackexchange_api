'use strict';


angular.module('SRCH')
  .controller('QuestionsController', ['$scope', '$log', 'PropertyService', 'SearchService', '$routeParams',
    function SearchController($scope, $log, PropertyService, SearchService, $routeParams) {
      // $log.info($routeParams.keywords);
     
      SearchService.get({intitle: $routeParams.keywords})
        .$promise.then(function(data) {
          $scope.questions = data.items;
        }, function(error) {
            $scope.error = error.message;
        });
      
      $scope.setLink = function(link) {
        PropertyService.setField(link);
      };
      
    }]);
    