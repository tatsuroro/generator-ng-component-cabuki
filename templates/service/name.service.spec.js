'use strict';

describe('Service: <%= classedName %>Service', function () {

  // load the service's module
  beforeEach(module('<%= scriptAppName %>'));

  // instantiate service
  var <%= cameledName %>;
  beforeEach(inject(function (_<%= cameledName %>_) {
    <%= cameledName %> = _<%= cameledName %>_;
  }));

  it('should do something', function () {<% if (hasFilter('jasmine')) { %>
    expect(!!<%= cameledName %>).toBe(true);<% } if (hasFilter('mocha')) { %>
    expect(!!<%= cameledName %>).to.be.true;<% } %>
  });

});
