'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.filters.<%= cameledName %>', [])
  .filter('<%= cameledName %>Filter', require('./<%= cameledName %>.filter'));
