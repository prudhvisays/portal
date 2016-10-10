import React from "react";

class VideoUtil extends React.Component{
constructor(props){
  super(props);
  this.playOrPause = this.playOrPause.bind(this);
  this.getVideoState = this.getVideoState.bind(this);

}
  playOrPause(){
    const videoElement = this.refs[this.props.refId]
    if(videoElement.paused){
      videoElement.play();
    }else {
      videoElement.pause();
    }
  }

  componentDidUpdate(){
    const videoElement = this.refs[this.props.refId];
    if(!this.props.playing && !videoElement.paused){
      videoElement.pause();
    }
  }

  getVideoState(){
    const videoElement = this.refs[this.props.refId];
    console.log(videoElement)
    return {
      time: videoElement.currentTime,
      paused:videoElement.paused
    }
  }

  render() {
    const { refId, srcUrl, onPlayu, onPause, className} = this.props;
    return (
      // <video ref="video" src={this.props.src} controls/>
      <video className={className} ref={refId}  width="100%" height="auto"  controls onPlay={onPlayu} onPause={onPause}>
        <source src={srcUrl}></source>
      </video>
    );
  }
}




export default VideoUtil;
