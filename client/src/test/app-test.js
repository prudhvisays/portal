require('./dom-mock')('<html><body></body></html>');

var React = require('react');
var ReactTestUtils = require('react-addons-test-utils');
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();



describe('Crossover Video Portal', function () {
  it('Application renders without problems', function () {

    var ReactApp = require('../ReactApp').default;
    var app = ReactTestUtils.renderIntoDocument(<ReactApp />);
    expect(app).to.be.ok;

  });


});
