angular.module('app', ['ionic', 'ngResource'])

.factory('User', ['$resource', function($resource) {
  return $resource('http://localhost:8080/users/:id');
}])

.controller('UserCtrl', function($scope, $routeParams, User) {
  var user = User.get({id : $routeParams.id});
  $scope.user = user;

  $scope.userData = {};
  $scope.newUser = function() {
    var newUser = new User($scope.locData);
    console.log(newUser);
    newUser.$save();
  }
});