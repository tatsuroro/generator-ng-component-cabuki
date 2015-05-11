'use strict';

module.exports = /*@ngInject*/
  function <%= cameledName %>Directive(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      templateUrl: '<%= htmlUrl %>',
      restrict: 'EA',
      replace: true,
      link: function (scope, element, attrs) {
      }
    };
  };
