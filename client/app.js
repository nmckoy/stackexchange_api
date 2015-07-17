'use strict';

// AngularJS application configuration
var ApplicationConfiguration = (function(){
    // app name for init
    var applicationName = 'stackSearch';
    
    var appVendorDependencies = ['ngRoute', 'ngResource'];
    
    var registerModule = function(moduleName, dependencies) {
        // registering new module
        angular.module(moduleName, dependencies || []);
        
        // adding new module to whole application
        angular.module(applicationName).requires.push(moduleName);
        
    };
    
    return {
        applicationName: applicationName,
        appVendorDependencies: appVendorDependencies,
        registerModule: registerModule
    };
    
})();