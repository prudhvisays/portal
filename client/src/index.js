import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./rootReducer";
import routes from "./routes";
import setAuthorizationToken from './utilities/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';
import "../../node_modules/granim/dist/granim.min.js";


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
let retrievedSessionData = localStorage.getItem('sessionData');
if(retrievedSessionData){
console.log(JSON.parse(retrievedSessionData));
const { sessionId } = JSON.parse(retrievedSessionData);
console.log(sessionId);
setAuthorizationToken(sessionId);
store.dispatch(setCurrentUser(JSON.parse(retrievedSessionData)));

}

render (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
