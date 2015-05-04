'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.directives', []);
  .directive('<%= cameledName %>Directive', require('./<%= cameledName %>Directive'));
