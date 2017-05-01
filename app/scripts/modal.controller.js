angular.module('employeeApp').controller('ModalInstanceCtrl', function ($uibModalInstance, toastr) {
  var $ctrl = this;
  $ctrl.formData = {
      'name':'',
      'email':'',
      'date':new Date(),
      'gender':'',
      'department':''
  }

  $ctrl.ok = function () {
      console.log($ctrl.formData);
    var checkValue = $ctrl.validationCheck();
      if(checkValue){
        toastr.success("Data Submitting");
        $uibModalInstance.close();      
      }
      else{
          toastr.warning("Fill all values please.");
      }
    
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
    
    $ctrl.validationCheck = function(){
        if($ctrl.formData.name == '' || $ctrl.formData.email == '' || $ctrl.formData.gender == '' || $ctrl.formData.department == '' )
            return 0;
        else
            return 1;
    }
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('employeeApp').component('modalComponent', {
  templateUrl: 'modalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.ok = function () {
      $ctrl.close({$value: 'ok'});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});