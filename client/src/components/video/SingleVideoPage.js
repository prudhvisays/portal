import React from "react";
import { connect } from "react-redux";
import { fetchSingleVideo } from "../../actions/videoActions";
import { map } from "lodash";
import { Link } from "react-router";
import NavigationBar from "../NavigationBar";
import StarRating from "../rating/StarRating";
import DefaultRate from "../rating/DefaultRate";

class SingleVideoPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      video:{
        name:'',
        description:'',
        ratings:[2,4]
      },
      sessionId:"",
      expanded:false
    }
    this.expandedText = this.expandedText.bind(this);
    this.getMoretext = this.getMoretext.bind(this);
  }
  componentDidMount () {
  window.scrollTo(0, 0)
}

  componentWillMount(){
    const { sessionId,videoId } = this.props.params;
    this.setState({sessionId:sessionId});
    this.props.fetchSingleVideo(sessionId,videoId);
  }


componentWillReceiveProps(nextProps){
  console.log(nextProps);

  if(this.props.video !== nextProps.video){
    this.setState({video:nextProps.video})
    this.setState({expanded:false});
  }
}

componentDidUpdate(prevProps){
  const { sessionId,videoId } = this.props.params;
  if(prevProps.params !== this.props.params){
    this.props.fetchSingleVideo(sessionId,videoId);

  }
}

expandedText(){
  this.setState({expanded:true});
}

getMoretext(){
  if(this.state.expanded){
    return this.state.video.description.substring(180)
  } else{
    return null
  }
}
  render(){
    const { video } = this.state
    const { videos } = this.props
    const videoUrl = `/${video.url}`;
    const expandedTexts = this.getMoretext();

    const videoList =  map(videos,(video,i) =>
    <div className="media" key={i}>
    <Link className="media-left" to={`/video/${this.state.sessionId}/${video._id}`}>
    <video className="media-object" src={`/${video.url}`} width="120" height="120"></video>
    </Link>
    <div className="media-body">
        <h6 className="media-heading">{video.name.substring(3)}</h6>
        <p className="lead">{video.description.substring(0,60)}</p>
        <div className="card-text"><small className="text-muted"><DefaultRate rating={video.ratings}/></small></div>
    </div>

    </div>
  );

    return(
      // <div>
      // <h1>this is activeVideo page {video.name}</h1>
      // <video ref={video._id} src={videoUrl} width="520" height="440" controls autoPlay>
      // </video>
      // </div>
      <div>
      <div style={{paddingBottom:'34px'}}>

      </div>
      <NavigationBar/>
              <div className="container" style={{'marginTop':'30px'}}>
                  <div className="row">
                    <div className="col-md-8">
                    <div className="card">
                    <video className="card-img-top" ref={video._id} src={videoUrl} width="100%"  controls>
                    </video>
                    </div>
                    <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">{video.name.substring(4)}</h4>
                        <div className="text-xs-right"><DefaultRate rating={video.ratings}></DefaultRate></div>

                          <p className="card-text">{video.description.substring(0,180)}
                          {!this.state.expanded ? <a onClick={this.expandedText}> Read more</a> : null}{ expandedTexts }</p>


                      </div>
                      <div className="container-fluid">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"><StarRating videoId={video._id} /></li>
                          </ul>
                      </div>

                    </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                      <div className="container-fluid">
                        {videoList}
                      </div>

                  </div>
              </div>
              </div>
              </div>

      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    video: state.videoReducers.activeVideo,
    videos: state.videoReducers.videos
  }
}

export default connect(mapStateToProps,{ fetchSingleVideo })(SingleVideoPage);
