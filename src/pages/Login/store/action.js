import { userData } from "../../../@fake-db/auth";
import { SET_MESSAGE } from "../../Message/store/actionTypes";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

export const login = (username, password) => (dispatch) => {
  
  const data = userData.find(
    (user) => user.username === username && user.password === password
  );

  if (data) {
    console.log(data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } else {
    console.log(data);
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: "Please Provide currect Info!",
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
