'use strict';

// initialize application
angular.module(ApplicationConfiguration.applicationName, 
        ApplicationConfiguration.appVendorDependencies);

angular.module(ApplicationConfiguration.applicationName)
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/Search/views/home.html',
        controller: 'SearchController'
      })
      .when('/questions/:keywords', {
        templateUrl: '/Search/views/results.html',
        controller: 'QuestionsController'
      })
      .when('/questions/answers/:id', {
        templateUrl: '/Search/views/answers.html',
        controller: 'AnswersController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);