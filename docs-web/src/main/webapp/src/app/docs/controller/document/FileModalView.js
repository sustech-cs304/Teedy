'use strict';

/**
 * File modal view controller.
 */
angular.module('docs').controller('FileModalView', function ($uibModalInstance, $scope, $state, $stateParams, $sce, Restangular, $transitions, $uibModal, $translate) {
  var setFile = function (files) {
    // Search current file
    _.each(files, function (value) {
      if (value.id === $stateParams.fileId) {
        $scope.file = value;
        $scope.trustedFileUrl = $sce.trustAsResourceUrl('../api/file/' + $stateParams.fileId + '/data');
      }
    });
  };

  // Load files
  Restangular.one('file/list').get({ id: $stateParams.id }).then(function (data) {
    $scope.files = data.files;
    setFile(data.files);

    // File not found, maybe it's a version
    if (!$scope.file) {
      Restangular.one('file/' + $stateParams.fileId + '/versions').get().then(function (data) {
        setFile(data.files);
      });
    }
  });

  /**
   * Return the next file.
   */
  $scope.nextFile = function () {
    var next = undefined;
    _.each($scope.files, function (value, key) {
      if (value.id === $stateParams.fileId) {
        next = $scope.files[key + 1];
      }
    });
    return next;
  };

  /**
   * Return the previous file.
   */
  $scope.previousFile = function () {
    var previous = undefined;
    _.each($scope.files, function (value, key) {
      if (value.id === $stateParams.fileId) {
        previous = $scope.files[key - 1];
      }
    });
    return previous;
  };

  /**
   * Navigate to the next file.
   */
  $scope.goNextFile = function () {
    var next = $scope.nextFile();
    if (next) {
      $state.go('^.file', { id: $stateParams.id, fileId: next.id });
    }
  };

  /**
   * Navigate to the previous file.
   */
  $scope.goPreviousFile = function () {
    var previous = $scope.previousFile();
    if (previous) {
      $state.go('^.file', { id: $stateParams.id, fileId: previous.id });
    }
  };
  
  /**
   * Check if file needs special handling
   */
  $scope.needsSpecialHandling = function() {
    if (!$scope.file) return false;
    
    var mimetype = $scope.file.mimetype;
    var filename = $scope.file.name.toLowerCase();
    
    // Check for PDF files
    if (mimetype === 'application/pdf') {
      return true;
    }
    
    // Check for DOC/DOCX files
    if (mimetype === 'application/msword' || 
        mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        filename.endsWith('.doc') || 
        filename.endsWith('.docx')) {
      return true;
    }
    
    return false;
  };
  
  /**
   * Show warning dialog for special file types
   */
  $scope.showSpecialFileWarning = function(callback) {
    $uibModal.open({
      template: '<div class="modal-header">' +
                '<h3 class="modal-title">{{ \'file.view.special_handling_title\' | translate }}</h3>' +
                '</div>' +
                '<div class="modal-body">' +
                '<p>{{ \'file.view.special_handling_message\' | translate:{ fileType: fileType } }}</p>' +
                '<p>{{ \'file.view.special_handling_question\' | translate }}</p>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button class="btn btn-default" ng-click="$dismiss()">{{ \'file.view.special_handling_cancel\' | translate }}</button>' +
                '<button class="btn btn-primary" ng-click="$close(true)">{{ \'file.view.special_handling_continue\' | translate }}</button>' +
                '</div>',
      controller: function($scope, $uibModalInstance, fileType) {
        $scope.fileType = fileType;
      },
      resolve: {
        fileType: function() {
          if ($scope.file.mimetype === 'application/pdf') {
            return 'PDF';
          } else {
            return 'Word';
          }
        }
      }
    }).result.then(callback);
  };

  /**
   * Open the file in a new window.
   */
  $scope.openFile = function () {
    if ($scope.needsSpecialHandling()) {
      $scope.showSpecialFileWarning(function() {
        // User confirmed, open the file
        window.open('../api/file/' + $stateParams.fileId + '/data');
      });
    } else {
      // Open the file directly for other types
      window.open('../api/file/' + $stateParams.fileId + '/data');
    }
  };

  /**
   * Open the file content a new window.
   */
  $scope.openFileContent = function () {
    window.open('../api/file/' + $stateParams.fileId + '/data?size=content');
  };

  /**
   * Print the file.
   */
  $scope.printFile = function () {
    if ($scope.needsSpecialHandling()) {
      $scope.showSpecialFileWarning(function() {
        // User confirmed, print the file
        var popup = window.open('../api/file/' + $stateParams.fileId + '/data', '_blank');
        popup.onload = function () {
          popup.print();
          popup.close();
        }
      });
    } else {
      // Print the file directly for other types
      var popup = window.open('../api/file/' + $stateParams.fileId + '/data', '_blank');
      popup.onload = function () {
        popup.print();
        popup.close();
      }
    }
  };

  /**
   * Close the file preview.
   */
  $scope.closeFile = function () {
    $uibModalInstance.dismiss();
  };

  // Close the modal when the user exits this state
  var off = $transitions.onStart({}, function(transition) {
    if (!$uibModalInstance.closed) {
      if (transition.to().name === $state.current.name) {
        $uibModalInstance.close();
      } else {
        $uibModalInstance.dismiss();
      }
    }
    off();
  });

  /**
   * Return true if we can display the preview image.
   */
  $scope.canDisplayPreview = function () {
    return $scope.file && $scope.file.mimetype !== 'application/pdf';
  };
});