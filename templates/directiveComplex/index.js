'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.directives.<%= cameledName %>', [])
  .directive('<%= cameledName %>Module', require('./<%= cameledName %>.directive'));
