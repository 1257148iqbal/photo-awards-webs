import { combineReducers } from "redux";
import { authReducer } from '../pages/Login/store/reducers';
import { messageReducer } from '../pages/Message/store/reducer';


const rootReducer = combineReducers({
    authReducer,
    messageReducer
});

export default rootReducer;
