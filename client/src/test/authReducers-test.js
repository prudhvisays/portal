import * as types from '../actions/types';
import reducer from '../reducers/authReducers';


var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Authentication Reducer', function () {
  it('should return the initial state', function () {
    expect(
      reducer(undefined, {})
    ).to.eql(
      {
        isAuthenticated : false,
        user: {},
        error:{}
      }
    );
  });

  it('should return the current user', function () {
    var user = 'Ali';
    expect(
      reducer({}, { type: types.SET_CURRENT_USER,
                    user  })
    ).to.eql(
      {
        isAuthenticated : true,
        user: user
      }
    );
  });

  it('should handle the invalid user error scenario', function () {
    var invalid = 'Username does not exist';
    expect(
      reducer({}, { type: types.SET_CURRENT_USER, invalid  })
    ).to.eql(
      {
        isAuthenticated: false,
        user: undefined
      }
   );

  });


});
