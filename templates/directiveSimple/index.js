'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.directives.<%= cameledName %>', [])
  .directive('<%= cameledName %>Directive', require('./<%= cameledName %>.directive'));
