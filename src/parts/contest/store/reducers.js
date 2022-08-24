import { v4 as uuid } from 'uuid';
import { ADD_CONTEST, DELETE_CONTEST, FETCH_CONTEST, FETCH_CONTEST_BY_ID, TOGGLE_CONTEST_MODAL, UPDATE_CONTEST } from "./actionTypes";

const initialContest=[
    {
      id: uuid(),
      contestName: "AWARD SEASONS 01",
      startDate: "02-02-2022",
      endDate: '02-12-2022',
      isActive: true,
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

export const contestReducer = (state= initialState, action)=>{
    const {type, payload}= action;

    switch (type) {
        case FETCH_CONTEST:{
            return{
                ...state
            }
        }
        case ADD_CONTEST:{
            return{
                ...state, items: [...state.items, payload]
            }
        }
        case FETCH_CONTEST_BY_ID:{
            return{
                ...state, selectItemEdit: payload, isOpenModal: true
            }
        }
        case UPDATE_CONTEST:{
            return{
                ...state, items: state.items.map(item=>item.id === payload.id ? {...payload} : item )
            }
        }
        case DELETE_CONTEST:{
            const filterdItems= [...state.items.filter(item=>item.id !== payload)];
            return{
                ...state, items: filterdItems
            }
        }
        case TOGGLE_CONTEST_MODAL:{
            const updatedState = {...state, isOpenModal: payload }
            if(!payload) updatedState.selectItemEdit = null;
            return updatedState;
        }
        default:
            return state;
    }
}