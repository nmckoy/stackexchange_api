'use strict';

// service to get list of questions
angular.module('SRCH')
  .factory('QuestionsService', ['$resource', 
    function QuestionsService($resource) {
      return $resource('//api.stackexchange.com/2.2/questions/:id?order=desc&sort=activity&site=stackoverflow',
        {id: '@id'});
    }]);