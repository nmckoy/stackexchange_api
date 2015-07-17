'use strict';

// search controller to route to questions view
angular.module('SRCH')
  .controller('SearchController', ['$scope', '$log', '$window', 
    function SearchController($scope, $log, $window) {
      
      $scope.search = function() {
        $window.location.href = '/#/questions/' + $scope.keywords;
      };
      
    }]);
    