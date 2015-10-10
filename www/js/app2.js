angular.module('app', ['ionic', 'ngResource'])

.factory('Location', ['$resource', function($resource) {
  return $resource('http://localhost:8080/locations');
}])

.controller('MainCtrl', function($scope, Location) {
  $scope.locations = Location.query();
  $scope.locData = {};
  $scope.newLocation = function() {
    var loc = new Location($scope.locData);
    console.log(loc);
    loc.$save();
  }
});