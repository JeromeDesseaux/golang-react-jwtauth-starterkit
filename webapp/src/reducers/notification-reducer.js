import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/';
import { toast } from "react-toastify";


export default function(state = {}, action){
   switch (action.type){
       case ADD_NOTIFICATION:
            toast.success(action.displayMessage);
            return state;
       case REMOVE_NOTIFICATION:
           let newState = Object.assign({}, state)
           delete newState[action.payload]
           return newState;
       default:
           return state;
   }
}