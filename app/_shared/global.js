(function(){
  angular.module('app')
  .controller('globalCtrl', [ '$scope', '$location', '$http',
  function ($scope, $location, $http) {

    $http.get('app/_shared/bookmarks.json')
    .then( function(response) {
      $scope.bookmarks = response.data;
    });

    $scope.openPage= function(page) {
      $scope.page = page;
      $location.path('/' + page );
    };

    $scope.page = "dashboard";

  }]);

})();
