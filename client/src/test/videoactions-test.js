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

  it('should play video', function () {
      const videoId = 1;
      const expectedAction = {
          type: types.PLAY_VIDEO,
          videoId
      };
     expect(actions.onPlay(videoId)).to.eql(expectedAction);
  });

  it('should pause video', function () {
      const videoId = 1;
      const expectedAction = {
          type: types.PAUSE_VIDEO,
          videoId
      };
     expect(actions.onPause(videoId)).to.eql(expectedAction);
  });

  it('should play single video', function () {
      const video = { _id : 1, title : 'Video Title'};
      const expectedAction = {
          type: types.SINGLE_VIDEO,
          video
      };
     expect(actions.playSingleVideo(video)).to.eql(expectedAction);
  });

});
