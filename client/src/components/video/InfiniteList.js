import React from "react";
import Infinite from "react-infinite";
import { videoList, onPlay, onPause, fetchSingleVideo } from "../../actions/videoActions";
import { map } from "lodash";

class InfiniteList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      videos: this.buildList(this.props.sessionId,0,3),
      isInfiniteLoading: false
    }
    this.buildList = this.buildList.bind(this);
  }

  const buildList(sessionId,skip,limit) {
    const
  }
  render(){
    return (
      <Infinite elementHeight={40}
                         containerHeight={250}
                         infiniteLoadBeginEdgeOffset={200}
                         onInfiniteLoad={this.handleInfiniteLoad}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}>

      </Infinite>
    )
  }
}

function mapStateToProps(state){
  return {
    sessionId : state.authReducers.user.sessionId,
    videos: state.videoReducers.videos
  }
}

export default (mapStateToProps,{ videoList })(InfiniteList);
