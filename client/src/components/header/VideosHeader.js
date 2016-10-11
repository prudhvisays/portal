import React from "react";
import NavigationBar from "../NavigationBar";
import VideoGrid from "../video/VideoGrid";

class VideosHeader extends React.Component{
constructor(props){
  super(props);
  this.state = {
    transform:""
  }
  this.handleScroll = this.handleScroll.bind(this);
}
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(event){
  console.log(Math.floor(window.pageYOffset));
  const itemTranslate = window.pageYOffset;
  this.setState({transform: itemTranslate})

}

  render(){
    const lineHeader = { transform : 'translate(0px, -'+ this.state.transform /60 + '%)' }
    return(
  <header className="title-box">
        <div className="line-header" style={lineHeader}></div>
          <div className="container" style={{marginTop:'70px'}}>
          <div className="card">
          <VideoGrid/>
          </div>
          </div>

  </header>

    )
  }
}

export default VideosHeader;
