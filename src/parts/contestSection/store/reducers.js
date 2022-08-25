import { v4 as uuid } from 'uuid';
import { ADD_CONTEST_SECTION, DELETE_CONTEST_SECTION, FETCH_CONTEST_SECTION, FETCH_CONTEST_SECTION_BY_ID, FETCH_CONTEST_SECTION_DETAILS_BY_ID, TOGGLE_CONTEST_SECTION_MODAL, UPDATE_CONTEST_SECTION } from "./actionTypes";

const initialContest=[
    {
      id: uuid(),
      contestName: "AWARD SEASONS 01",
      contestSections: [
          {id: uuid(), sectionName: "Nature", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
          {id: uuid(), sectionName: "Animal", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
          {id: uuid(), sectionName: "Happiness", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
          {id: uuid(), sectionName: "Humanity", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true}
      ]
    }
]

const initialState = {
    items:initialContest,
    selectItemEdit: null,
    selectItemsDetails: null,
    loading: false,
    isOpenModal: false
}

export const contestSectionReducer = (state= initialState, action)=>{
    const {type, payload}= action;

    switch (type) {
        case FETCH_CONTEST_SECTION:{
            return{
                ...state
            }
        }
        case ADD_CONTEST_SECTION:{
            return{
                ...state, items: [...state.items, payload]
            }
        }
        case FETCH_CONTEST_SECTION_BY_ID:{
            return{
                ...state, selectItemEdit: payload
            }
        }
        case FETCH_CONTEST_SECTION_DETAILS_BY_ID:{
            return{
                ...state, selectItemsDetails: payload, isOpenModal: true
            }
        }
        case UPDATE_CONTEST_SECTION:{
            return{
                ...state, items: state.items.map(item=>item.id === payload.id ? {...payload} : item )
            }
        }
        case DELETE_CONTEST_SECTION:{
            const filterdItems= [...state.items.filter(item=>item.id !== payload)];
            return{
                ...state, items: filterdItems
            }
        }
        case TOGGLE_CONTEST_SECTION_MODAL:{
            const updatedState = {...state, isOpenModal: payload }
            if(!payload) updatedState.selectItemEdit = null;
            return updatedState;
        }
        default:
            return state;
    }
}