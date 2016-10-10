import axios from "axios";
import { POPULATE_VIDEOS, PLAY_VIDEO, PAUSE_VIDEO, SINGLE_VIDEO } from "./types";


export function populateVideos(videos) {
  console.log(videos);
  return {
    type: POPULATE_VIDEOS,
    videos
  };
}
export function onPlay(videoId){
  console.log(videoId);
  return {
    type: PLAY_VIDEO,
    videoId
  };
}
export function onPause(videoId){
console.log(videoId);
  return {
    type: PAUSE_VIDEO,
    videoId
  };
}

export function playSingleVideo(video){
  console.log(video);
  return {
    type: SINGLE_VIDEO,
    video
  };
}

export function fetchSingleVideo(sessionId,videoId){
  return dispatch =>{
    return axios.get("/video/",{
      params:{
        sessionId,
        videoId
      }
    }).then((res) => {
      dispatch(playSingleVideo(res.data));
    });
  }
}
export function videoList(sessionId) {
  console.log("the",sessionId);
  return dispatch => {
    return axios.get("/videos",{
      params: {
        sessionId
      }
    }).then((res) => {
      dispatch(populateVideos(res.data));
    });
  }
}
