import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App.js"
import LoginPage from "./components/Login/LoginPage";
import VideoPage from "./components/video/VideoPage";
import LandingPage from "./components/landing/LandingPage";
import SingleVideoPage from "./components/video/SingleVideoPage";
import requireAuth from "./utilities/requireAuth";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={(LandingPage)}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/videoslist/:sessionId" component={requireAuth(VideoPage)}/>
    <Route path="/video/:sessionId/:videoId" component={requireAuth(SingleVideoPage)}/>
  </Route>
)
