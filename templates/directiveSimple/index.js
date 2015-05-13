'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.directives.<%= cameledName %>', [])
  .directive('<%= cameledName %>', require('./<%= cameledName %>.directive'));
