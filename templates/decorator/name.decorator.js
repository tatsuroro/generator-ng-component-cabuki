'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.<%= cameledName %>')
  .config(Configuration);

  /* @ngInject */
  function Configuration($provide) {
    $provide.decorator('<%= cameledName %>', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  }
