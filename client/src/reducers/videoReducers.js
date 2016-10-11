import isEmpty from "lodash/isEmpty";
import { POPULATE_VIDEOS, PLAY_VIDEO, PAUSE_VIDEO, SINGLE_VIDEO } from "../actions/types";
import { findIndex, filter } from "lodash";

//this is the initialState of the video component
const initialState = {
    videos: [],
    activeVideo: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case POPULATE_VIDEOS:
            console.log(action.videos.data);
            let videos = action.videos.data.map(v => {
                v.playing = false;
                return v;
            })
            return {
                videos: videos,
                fetch: !isEmpty(action.videos.data)
            }
        case PLAY_VIDEO:
            return onPlay(state, action);
        case PAUSE_VIDEO:
            return onPause(state, action);
        case SINGLE_VIDEO:
            return onClick(state, action);
        case "RATE_VIDEO":
            rateVideo(state, action);
        default:
            return state;
    }
}
//when selected a video to play..make the isplaying to true
function onPlay(state, action) {
    console.log("oldState " + state);
    const index = findIndex(state.videos, {
        _id: action.videoId
    });
    const newVideos = copy(state.videos)
    newVideos.forEach(v => v.playing = false);
    newVideos[index]['playing'] = true;
    const newState = {...state,
        videos: newVideos
    }
    console.log("newState " + newState);
    return newState;
}
//when another video/ video is paused .make the isplaying to false
function onPause(state, action) {
    console.log("oldState " + state);
    const index = findIndex(state.videos, {
        _id: action.videoId
    });
    const newVideos = copy(state.videos)
    newVideos[index]['playing'] = false;
    const newState = {...state,
        videos: newVideos
    }
    console.log("newState " + newState);
    return newState;
}

function onClick(state, action) {
    const { video } = action;
    return {...state,
        activeVideo: video.data
    }
}

function copy(o) {
    var output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
        v = o[key];
        output[key] = (typeof v === "object") ? copy(v) : v;
    }
    return output;
};
