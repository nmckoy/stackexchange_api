'use strict';

// service to retrieve answers by ques id
angular.module('SRCH')
  .factory('AnswersService', ['$resource', 
    function AnswersService($resource) {
      return $resource('//api.stackexchange.com/2.2/questions/:id/answers?order=desc&sort=activity&site=stackoverflow',
        {id: '@id'});
    }]);