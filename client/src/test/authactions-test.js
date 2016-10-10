import * as types from '../actions/types';
import * as actions from '../actions/authActions';


var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Authentication Actions', function () {
  it('should set the current user', function () {
      const user = 'Ali';
      const expectedAction = {
          type: types.SET_CURRENT_USER,
          user
      };
     expect(actions.setCurrentUser(user)).to.eql(expectedAction);
  });

  it('should set error message for the inavalid user', function () {
      const invalid = 'Username does not exist';
      const expectedAction = {
          type: types.INVALID_USER,
          invalid
      };
     expect(actions.invalidUser(invalid)).to.eql(expectedAction);
  });

});
