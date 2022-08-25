/*
    Title: action for contest
    Description: action for contest
    Author: Iqbal Hossain
    Date: 24-August-2022
    Modified: 24-August-2022
*/

import { ADD_CONTEST_SECTION, DELETE_CONTEST_SECTION, FETCH_CONTEST_SECTION, FETCH_CONTEST_SECTION_BY_ID, FETCH_CONTEST_SECTION_DETAILS_BY_ID, TOGGLE_CONTEST_SECTION_MODAL, UPDATE_CONTEST_SECTION } from "./actionTypes";

//fetch 
export const fetchContestSection = () => async dispatch =>{
    dispatch({
        type: FETCH_CONTEST_SECTION,
        payload: ''
    })
}

//add 
export const addContestSection = (payload) => async dispatch =>{
    console.log(payload);
    dispatch({
        type: ADD_CONTEST_SECTION,
        payload: payload
    })
}

//fetch by id 
export const fetchContestSectionByID = (payload) => async dispatch =>{
    dispatch({
        type: FETCH_CONTEST_SECTION_BY_ID,
        payload: payload
    })
}

//fetch for details by id 
export const fetchContestSectionDetailsByID = (payload) => async dispatch =>{
    dispatch({
        type: FETCH_CONTEST_SECTION_DETAILS_BY_ID,
        payload: payload
    })
}

//update 
export const updateContestSection = (payload) => async dispatch =>{
    dispatch({
        type: UPDATE_CONTEST_SECTION,
        payload: payload
    })
}

//update 
export const deleteContestSection = (payload) => async dispatch =>{
    dispatch({
        type: DELETE_CONTEST_SECTION,
        payload: payload
    })
}

//modal open
export const toggleContestSectionModal = condition => dispatch => {
    dispatch({
      type: TOGGLE_CONTEST_SECTION_MODAL,
      payload: condition
    });
  };