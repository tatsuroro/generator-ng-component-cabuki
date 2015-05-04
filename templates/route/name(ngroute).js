'use strict';

module.exports =
  angular.module('<%= scriptAppName %>.<%= cameledName %>', [
    //load your foo submodules here, e.g.:
    // require('./main.controller').name
  ])
  .config(Configuration)
  .controller('<%= classedName %>Ctrl', require('./<%= cameledName %>.controller'));

  /* @ngInject */
  function Configuration($routeProvider) {
    $routeProvider
      .when('<%= route %>', {
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Ctrl'
      });
  }
