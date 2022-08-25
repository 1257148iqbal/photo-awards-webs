import { combineReducers } from "redux";
import { authReducer } from '../pages/Login/store/reducers';
import { messageReducer } from '../pages/Message/store/reducer';
import { contestReducer } from '../parts/contest/store/reducers';
import { contestSectionReducer } from '../parts/contestSection/store/reducers';


const rootReducer = combineReducers({
    authReducer,
    messageReducer,
    contestReducer,
    contestSectionReducer
});

export default rootReducer;
