require('./dom-mock')('<html><body></body></html>');


var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();



describe('Crossover Video Portal', function () {

  var React = require('react');
  var ReactTestUtils = require('react-addons-test-utils');

  var ReactApp;

  beforeEach(function() {
    ReactApp = require('../ReactApp').default;
  });

  it('Application renders without problems', function () {


    var app = ReactTestUtils.renderIntoDocument(<ReactApp />);
    expect(app).to.be.ok;

    
  });




});
