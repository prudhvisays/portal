import React from "react";
import { connect } from "react-redux";
import { videoList, onPlay, onPause, fetchSingleVideo } from "../../actions/videoActions";
import { map } from "lodash";
import Video from "./Video";
import Infinite from "react-infinite";

class VideoGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos:{}
    }
  }
  componentWillMount(){
    const { sessionId } = this.props;
    console.log(sessionId);
    this.props.videoList(sessionId);
    }

  shouldComponentUpdate(nextProps, nextState) {
  return nextProps.videos !== this.props.videos;
}

  componentWillReceiveProps(nextProps){
    if(this.props.videos !== nextProps.videos){
      this.setState({videos:nextProps.videos});
    }
  }
  componentDidUpdate(prevProps){
    const { sessionId } = this.props;
    if(this.props.videos !== prevProps.videos){
      this.setState({videos:this.props.videos});
    }
  }



  render() {
    const { videos } = this.state
    return (
      <div className="video-cards">
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



export default connect(mapStateToProps,{ videoList, onPlay, onPause, fetchSingleVideo })(VideoGrid);
