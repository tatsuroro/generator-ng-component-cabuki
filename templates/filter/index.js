'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.filters', [
  ])
  .filter('<%= cameledName %>Filter', require('./<%= cameledName %>.filter'));
