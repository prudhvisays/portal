import axios from "axios";
import { SET_CURRENT_USER, INVALID_USER } from "./types";
import setAuthorizationToken from "../utilities/setAuthorizationToken";

// after login set the current user
export function setCurrentUser(user) {
  return {
    type: "SET_CURRENT_USER",
    user
  };
}

export function logout(sessionId) {
  let logoutparams = {
    params: {
      sessionId
    }
  }

  return dispatch => {
    return axios.get('/user/logout',logoutparams).then(res =>
    {
      localStorage.removeItem('sessionData');
      dispatch(setCurrentUser({}));
      setAuthorizationToken(false);
    });
  }
}

export function invalidUser(invalid) {
  console.log(invalid);
  return {
    type: "INVALID_USER",
    invalid
  };
}
// fetch login data
export function login(userData) {
  return dispatch => {
    return axios.post('/user/auth',userData).then((res) => {
      const { status, sessionId, username, error} = res.data;
      if(status === "success"){
        localStorage.setItem('sessionData', JSON.stringify(res.data));
        setAuthorizationToken(sessionId);
        dispatch(setCurrentUser(res.data));
      }else {
        dispatch(invalidUser(error));
      }
    });
  }
}
