import React from "react";
import VideoGrid from "./VideoGrid";
import VideosHeader from "../header/VideosHeader";
import NavigationBar from "../NavigationBar";
 class VideoPage extends React.Component {
   render() {
     return (
       <div>
       <VideosHeader/>
             <div style={{'height':'59px'}}>
       <NavigationBar/>
       </div>
      <div className="container">

     <VideoGrid />

      </div>
       </div>


     );
   }
 }
 export default VideoPage;
