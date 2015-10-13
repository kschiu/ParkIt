angular.module('app', ['ionic', 'ngResource'])

.factory('Listing', ['$resource', function($resource) {
  return $resource('http://localhost:8080/listings/:id');
}])

.controller('ListingCtrl', function($scope, $routeParams, Listing) {
  var listing = Listing.get({id : $routeParams.id});
  $scope.listing = listing;

  $scope.listingData = {};
  $scope.newListing = function() {
    var newListing = new Listing($scope.listingData);
    console.log(newListing);
    newListing.$save();
  }
});