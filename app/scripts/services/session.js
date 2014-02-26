'use strict';

angular.module('jingleGridApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
