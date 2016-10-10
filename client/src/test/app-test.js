require('./dom-mock')('<html><body></body></html>');

var React = require('react');
var ReactTestUtils = require('react-addons-test-utils');
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();



describe('Crossover Video Portal', function () {
  it('Application renders without problems', function () {

    var ReactApp = require('../ReactApp').default;
    var Greetings = require('../components/test/Greetings').default;

    var app = ReactTestUtils.renderIntoDocument(<ReactApp />);
    //var greeting = ReactTestUtils.findRenderedComponentWithType(app, Greetings)

    expect(app).to.be.ok;
    //expect(greeting).to.be.ok;

  });


});
