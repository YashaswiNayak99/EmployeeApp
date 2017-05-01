console.log('\'Allo \'Allo!');
var app = angular.module("employeeApp", ['ngAnimate','ui.bootstrap','toastr']);

app.controller("employeeController", function($scope,$uibModal) {
    var $ctrl = this;
    
    $scope.modalOpen = function () {
    
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'modalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'modalCtrl',
      size: 'modal-lg'
    });

    modalInstance.result.then(function () {
      //$ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
    
    console.log("In COntroller....");
});

app.config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    allowHtml: false,
    closeButton: true,
    closeHtml: '<button>&times;</button>',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },
    progressBar: false,
    tapToDismiss: true,
    timeOut: 1000
  });
});