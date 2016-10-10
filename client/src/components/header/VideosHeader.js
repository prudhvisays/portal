import React from "react";
import NavigationBar from "../NavigationBar";

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
  const itemTranslate = event.srcElement.body.scrollTop;
  this.setState({transform: itemTranslate})

}

  render(){
    const cameraHeader = { transform : 'translate(0px, '+ this.state.transform /50 + '%)' }
    const bigwheelHeader = { transform : 'translate(0px, '+ this.state.transform /18 + '%)' }
    const clapHeader = { transform : 'translate(0px, -'+ this.state.transform /60 + '%)' }
    const lineHeader = { transform : 'translate(0px, -'+ this.state.transform /60 + '%)' }
    const titleHeader = { transform : 'translate(0px, '+ this.state.transform /5 + '%)' }
    console.log(cameraHeader);
    return(
  <header className="title-box">
        <div className="line-header" style={lineHeader}></div>
        <div className="camera-header" style={cameraHeader}></div>
        <div className="bigwheel-header" style={bigwheelHeader}></div>
        <div className="highreel-header"></div>
        <div className="miniwheel-header"></div>
        <div className="nanowheel-header"></div>
      <div className="logo" style={titleHeader}>
        <h1>VIDEOS</h1>
      </div>

      <div className="clap-header" style={clapHeader}></div>
      <div className="lowreel-header"></div>
  </header>

    )
  }
}

export default VideosHeader;
