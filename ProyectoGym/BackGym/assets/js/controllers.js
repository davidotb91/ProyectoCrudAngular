/**
 * Created by david on 10/08/2017.
 */
define(function (require) {

  var angular = require('angular'),
    Controllers = angular.module('controllers', []);

  Controllers.controller('angUsrController', require('controllers/angUsuarioController'));

  return Controllers;

});
