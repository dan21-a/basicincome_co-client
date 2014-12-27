angular.module('rp').controller('delete_everything_modalCtrl',
function ($scope, $modal, $log) {



  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'delete_everything_modal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});



// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('rp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, $MongoDB) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

$MongoDB.remove

  $scope.ok = function () {

    $modalInstance.close($scope.selected.item);
    $MongoDB.remove()
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});