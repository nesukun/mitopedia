'use strict';

export default ['$scope', '$location', '$routeParams', '$rootScope', '$q', function artistsController($scope, $location, $routeParams, $rootScope, $q, MitopediaApiStorage) {
  this.$scope = $scope;
  this.$location = $location;
  this.$routeParams = $routeParams;
  this.$rootScope = $rootScope;
  this.$q = $q;
  this.MitopediaApiStorage = MitopediaApiStorage;
  $scope.Cards = [];
  $scope.Artists = [];
  $scope.sortMode = {
      predicate: 'name',
      reverse: false
  };

  $scope.sortBy = function (predicate) {
      if (predicate === $scope.sortMode.predicate) {
          $scope.sortMode.reverse = !$scope.sortMode.reverse;
      }
      else {
          $scope.sortMode.reverse = false;
          $scope.sortMode.predicate = predicate;
      }
  };

  $rootScope.Title = 'Ilustradores';

  $q.all([MitopediaApiStorage.getCards(), MitopediaApiStorage.getArtists()]).then(function (result) {
      $scope.Cards = result[0];
      $scope.Artists = result[1];
  }, function (error) {
      console.log(error);
  });
}];
