import * as types from '../actions/types';
import * as actions from '../actions/videoActions';


var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Video Actions', function () {
  it('should populate videos', function () {
      const videos = [];
      const expectedAction = {
          type: types.POPULATE_VIDEOS,
          videos
      };
     expect(actions.populateVideos(videos)).to.eql(expectedAction);
  });

});
