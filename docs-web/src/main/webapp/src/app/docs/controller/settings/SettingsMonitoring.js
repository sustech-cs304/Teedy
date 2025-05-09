'use strict';

/**
 * Settings monitoring controller.
 */
angular.module('docs').controller('SettingsMonitoring', function($scope, Restangular) {
  // Get app data
  Restangular.one('app').get().then(function(data) {
    $scope.app = data;
  });

  // Date time format
  $scope.dateTimeFormat = 'yyyy-MM-dd HH:mm:ss';
  
  // Get logs
  Restangular.one('app/log').get({
    limit: 100
  }).then(function(data) {
    $scope.logs = data.logs;
  });

  $scope.reindexingStarted = false;
  $scope.startReindexing = function() {
    Restangular.one('app').post('batch/reindex').then(function () {
      $scope.reindexingStarted = true;
    });
  };
});