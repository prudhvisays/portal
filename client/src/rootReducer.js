import { combineReducers } from 'redux';

import authReducers from './reducers/authReducers';
import videoReducers from './reducers/videoReducers';

export default combineReducers({
  authReducers,
  videoReducers
});
