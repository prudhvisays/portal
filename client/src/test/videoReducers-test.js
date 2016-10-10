import * as types from '../actions/types';
import reducer from '../reducers/videoReducers';


var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

const initialState = {
    videos: [],
    activeVideo: {}
}

describe('Videos Reducer', function () {
  it('should return the initial state', function () {
    expect(
      reducer(undefined, {})
    ).to.eql(
      initialState
    );
  });

  it('should return the videos list', function () {
    const videos = { data : [
                              { _id : 1, title : 'Video title'}
                            ]
                   };
    const action = { type: types.POPULATE_VIDEOS , videos};
    expect(
      reducer(initialState, action)
    ).to.eql(
      {
        videos: [{ _id:1, title : 'Video title', playing : false}],
        fetch: true
      }
    );
  });

  it('should play the video', function () {
    const currentState = {
                          videos: [{ _id:1, title : 'Video title 1', playing : false},
                                   { _id:2, title : 'Video title 2', playing : false}]
                         };
    const videoId = 1;
    const action = { type: types.PLAY_VIDEO , videoId};
    expect(
      reducer(currentState, action)
    ).to.eql(
      {
        videos: [{ _id:1, title : 'Video title 1', playing : true},
                 { _id:2, title : 'Video title 2', playing : false}]
      }
    );
  });

  it('should pause all other videos except one', function () {
    const currentState = {
                          videos: [{ _id:1, title : 'Video title 1', playing : true},
                                   { _id:2, title : 'Video title 2', playing : false}]
                         };
    const videoId = 2;
    const action = { type: types.PLAY_VIDEO , videoId};
    expect(
      reducer(currentState, action)
    ).to.eql(
      {
        videos: [{ _id:1, title : 'Video title 1', playing : false},
                 { _id:2, title : 'Video title 2', playing : true}]
      }
    );
  });

  it('should pause the video', function () {
    const currentState = {
                          videos: [{ _id:1, title : 'Video title 1', playing : true},
                                   { _id:2, title : 'Video title 2', playing : false}]
                         };
    const videoId = 1;
    const action = { type: types.PAUSE_VIDEO , videoId};
    expect(
      reducer(currentState, action)
    ).to.eql(
      {
        videos: [{ _id:1, title : 'Video title 1', playing : false},
                 { _id:2, title : 'Video title 2', playing : false}]
      }
    );
  });


});
