import { combineReducers } from 'redux';
import user from "./reducers/user";
import callCenter from "./reducers/callCenter";

export default combineReducers({
    user,
    callCenter
});