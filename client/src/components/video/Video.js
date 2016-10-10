import React from "react";
import { map } from "lodash";
import VideoUtil from "./VideoUtil";
import { Link } from "react-router";
import DefaultRate from "../rating/DefaultRate";

class Video extends React.Component{
constructor(props){
  super(props);
  this.onPlay = this.onPlay.bind(this);
  this.onPaused = this.onPaused.bind(this);
}
componentDidMount(){
  const refId = this.refs[this.props.video._id];
  refId;

}

onPlay(){
this.props.onPlay(this.props.video._id);

}
onPaused(){
  this.props.onPause(this.props.video._id);
}
  render() {
    const { video } = this.props;
    const videoUrl = `/video/${this.props.sessionId}/${video._id}`;
    return (
      <div className="video-card">
      <VideoUtil className="video-card-header video-width" playing={video.playing} onPlayu={this.onPlay} onPause={this.onPaused} ref={video._id} refId={video._id} srcUrl={`/${video.url}`} />
        <div className="video-card-summary">
        <Link to={videoUrl}>
          <p>{video.name.substring(3)}</p>
        </Link>
      </div>
      <div className="video-card-meta">
      <DefaultRate rating={video.ratings}/>
      </div>
      </div>

    )
  }
}

Video.contextTypes = {
  router : React.PropTypes.object.isRequired
}

export default Video;
