angular.module('app', ['ionic'])

.controller('MainCtrl', function($scope, $http) {
  $http.get('http://localhost:8080/locations').then(function(resp) {
    $scope.location = resp.data[0];
    console.log(resp.data);
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
});