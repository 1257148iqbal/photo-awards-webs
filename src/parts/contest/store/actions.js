/*
    Title: action for contest
    Description: action for contest
    Author: Iqbal Hossain
    Date: 24-August-2022
    Modified: 24-August-2022
*/

import { ADD_CONTEST, DELETE_CONTEST, FETCH_CONTEST, FETCH_CONTEST_BY_ID, TOGGLE_CONTEST_MODAL, UPDATE_CONTEST } from "./actionTypes";

//fetch 
export const fetchActiveContest = () => async dispatch =>{
    dispatch({
        type: FETCH_CONTEST,
        payload: ''
    })
}

//add 
export const addContest = (payload) => async dispatch =>{
    console.log(payload);
    dispatch({
        type: ADD_CONTEST,
        payload: payload
    })
}

//fetch by id 
export const fetchContestByID = (payload) => async dispatch =>{
    dispatch({
        type: FETCH_CONTEST_BY_ID,
        payload: payload
    })
}

//update 
export const updateContest = (payload) => async dispatch =>{
    console.log(payload);
    dispatch({
        type: UPDATE_CONTEST,
        payload: payload
    })
}

//update 
export const deleteContest = (payload) => async dispatch =>{
    dispatch({
        type: DELETE_CONTEST,
        payload: payload
    })
}

//modal open
//Open Sidebar
export const toggleContestModal = condition => dispatch => {
    dispatch({
      type: TOGGLE_CONTEST_MODAL,
      payload: condition
    });
  };