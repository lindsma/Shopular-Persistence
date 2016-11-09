angular.module('inventoryApp').controller('LoginController', function($scope, ItemsService) {

$scope.loggedIn = false;
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

$scope.loginUser = function(username) {

  $scope.loggedIn = true;
  $scope.username = username;
  var loginTime = new Date();
  var month = loginTime.getMonth();
  var monthName = monthNames[month];
  var shortMonth = monthName.substring(0,3);
  var date = loginTime.getDate();
  var hour = loginTime.getHours();
  var min = loginTime.getMinutes();

  if (hour > 11) {
    $scope.timestamp = shortMonth + ' ' + date + ' ' + hour + ':' + min + ' PM';
  } else {
    $scope.timestamp = shortMonth + ' ' + date + ' ' + hour + ':' + min + ' AM';
  }

  return $scope.timestamp;

};

});
