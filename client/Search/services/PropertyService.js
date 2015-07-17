'use strict';

// service to set values for controllers to pass around
angular.module('SRCH')
  .service('PropertyService', [function PropertyService() {
      var field = null;
      
      return {
          getField: function(){
              return field;
          },
          setField: function(param) {
              field = param;
          }
      };
      
    }]);