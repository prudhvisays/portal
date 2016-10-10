import React from "react";
import VideosHeader from "../header/VideosHeader";
import NavigationBar from "../NavigationBar";

 class VideoPage extends React.Component {
   render() {
     return (
       <div>
       <NavigationBar/>
       <VideosHeader />
       </div>


     );
   }
 }
 export default VideoPage;
