import axios from "axios";

export function Rating(videoRating){
  const sessionData = JSON.parse(localStorage.getItem('sessionData'))
  const { sessionId } = sessionData;
  console.log(sessionId);
  const url = "/video/ratings?sessionId=" + sessionId;
  return dispatch => {
    return axios.post(url, {
        videoId: videoRating.videoId,
        rating: videoRating.rating
      })
  }
}
