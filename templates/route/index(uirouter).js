'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.<%= cameledName %>', [
    //load your foo submodules here, e.g.:
    // require('./main.controller').name
  ])
  .config(Configuration)
  .constant('<%= cameledName %>Const', constant())
  .controller('<%= classedName %>Ctrl', require('./<%= cameledName %>.controller'));

  // if you add service module
  // .factory('<%= classedName %>Service', require('./<%= cameledName %>.service'));

  /* @ngInject */
  function Configuration($stateProvider) {
    $stateProvider
      .state('<%= cameledName %>', {
        url: '^/<%= cameledName %>',
        templateUrl: 'app/<%= cameledName %>/<%= cameledName %>.html',
        controller: '<%= classedName %>Ctrl'
      });
  }

  function constant() {
    return {
      prop: 'constantVar'
    };
  }
