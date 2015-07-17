'use strict';

// service used to search all ques by a keyword search
angular.module('SRCH')
  .factory('SearchService', ['$resource', 
    function SearchService($resource) {
      return $resource('//api.stackexchange.com/2.2/search?page=1&pagesize=100&order=desc&sort=votes&intitle=:intitle&site=stackoverflow',
        {intitle: '@intitle'});
    }]);