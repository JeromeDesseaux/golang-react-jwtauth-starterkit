import { combineReducers } from "redux";
import NotificationsReducer  from "./notification-reducer";

export default combineReducers({
    notifications: NotificationsReducer 
});