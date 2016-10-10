import React from "react";
import { connect } from "react-redux";
import { videoList, onPlay, onPause } from "../../actions/videoActions";
import { map } from "lodash";
import Video from "./Video";

class VideoGrid extends React.Component {
  componentWillMount(){
    const { sessionId } = this.props;
    console.log(sessionId);
    this.props.videoList(sessionId)

  }

  render() {
    const { videos } = this.props
    return (
      <div>
        {map(videos,(video) => <Video {...this.props} key={video._id} video={video}/>)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    sessionId : state.authReducers.user.sessionId,
    videos: state.videoReducers.videos
  }
}

export default connect(mapStateToProps,{ videoList, onPlay, onPause })(VideoGrid);
