import {
  LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT
} from "./actionTypes";
    
  const initialState = {
    isLoggedIn: false, 
    user: null
  };
  
  export const authReducer = (state = initialState, action)=> {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        console.log(payload);
        return {
          ...state,
          isLoggedIn: true,
          user: payload,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }
  