/**
 * Created by david on 10/08/2017.
 */
define(function () {
  return ['$scope', '$http', function($scope, $http) {


    function resetItem(){
      $scope.usuario = {
        nombre : '',
        sexo : '',
        email : '',
        edad:'',
        ci:'',
        somatotipo:'',
        universidad:'',
        pais:'',
        ciudad:'',
        id : ''
      };
      $scope.displayForm = '';

    }
    resetItem();

    $scope.addItem = function () {
      resetItem();
      $scope.displayForm = true;
    };


    $scope.saveItem = function () {
      var usr = $scope.usuario;
      if (usr.id.length == 0){
        $http.get('/usuario/create?nombre='+ usr.nombre + '&sexo=' +  usr.sexo + '&ci=' +  usr.ci+ '&email=' +  usr.email + '&edad=' +  usr.edad + '&somatotipo=' +  usr.somatotipo+ '&universidad=' +  usr.universidad+ '&pais=' +  usr.pais+ '&ciudad=' +  usr.ciudad).success(function(data) {
          $scope.items.push(data);
          $scope.displayForm = '';
          removeModal();
          console.log("registro nuevo="+usr.id);
        }).
        error(function(data, status, headers, config) {
          alert(data.summary);
        });
      }
      else{
        $http.get('/usuario/update/'+usr.id+ '?nombre=' +usr.nombre + '&sexo=' +  usr.sexo + '&ci=' +  usr.ci+ '&email=' +  usr.email + '&edad=' +  usr.edad + '&somatotipo=' +  usr.somatotipo+ '&universidad=' +  usr.universidad+ '&pais=' +  usr.pais+ '&ciudad=' +  usr.ciudad).success(function(data) {
          $scope.displayForm = '';
          removeModal();
          console.log("registro modificar="+usr.id);
        }).
        error(function(data, status, headers, config) {
          alert(data.summary);
        });
      }
    };

    $scope.editItem = function (data) {
      $scope.usuario = data;
      $scope.displayForm = true;
    }

    $scope.removeItem = function (data) {
      if (confirm('Do you really want to delete?')){
        $http['delete']('/usuario/' + data.id).success(function() {
          $scope.items.splice($scope.items.indexOf(data), 1);
        });
      }
    };

    $http.get('/usuario/find').success(function(data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.items = data;
    });

    function removeModal(){
      $('.modal').modal('hide');
    }

  }];
});
