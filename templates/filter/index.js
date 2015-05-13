'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.filters.<%= cameledName %>', [])
  .filter('<%= cameledName %>', require('./<%= cameledName %>.filter'));
