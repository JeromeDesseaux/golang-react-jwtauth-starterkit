import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../constants/index";

export function incrementAction(message) {
    return {
      type: ADD_NOTIFICATION,
      displayMessage: message,
    };
  }
export function decreaseAction() {
  return{
    type: REMOVE_NOTIFICATION,
  };
}

