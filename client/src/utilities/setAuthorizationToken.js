import axios from "axios";

export default function setAuthorizationToken(token) {
  if(token) {
    console.log(token);
    axios.defaults.headers.common['Authorization'] = `Session ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}
