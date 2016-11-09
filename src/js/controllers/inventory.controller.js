angular.module('inventoryApp').controller('InventoryController', function($scope, $q, ItemsService) {

    this.tax = 0.0575;
    $scope.orderByField = 'totalPrice';
    $scope.reverse = false;
    this.minLength = 2;

    $scope.allItems = ItemsService.get();

    $q.when(ItemsService.get()).then(function(response) {

    $scope.create = function(name, price, quantity, color, discount) {

        var newPrice = getPriceValue(price, discount);


        $scope.allItems = ItemsService.get();

        $scope.allItems.push({
          id: Date.now(),
          name: name,
          quantity: quantity,
          color: color,
          price: price,
          discount: discount,
          totalPrice: newPrice
        });

        ItemsService.set($scope.allItems);
    };

  });

    // get total price
    getPriceValue = function(price, discount) {
        console.log(price, discount);

        var discountPrice = ((price - discount) * 1.0575);
        this.totalPrice = discountPrice;
        console.log(discountPrice);

        return this.totalPrice;
    };

});
