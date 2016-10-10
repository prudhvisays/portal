import isEmpty from "lodash/isEmpty";

const initialState = {
  isAuthenticated : false,
  user: {},
  error:{}
};

export default (state = initialState, action) => {
  switch(action.type){
    case "SET_CURRENT_USER":
    console.log("hello");
  return {...state,
    isAuthenticated:!isEmpty(action.user),
    user: action.user
  }
    case "INVALID_USER":
    console.log(action.invalid);
    return {
      ...state,
      error:action.invalid
    }
    default: return state;
  }
}
