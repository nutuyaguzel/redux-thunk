import { ActionType } from "../constants/actionType";

const initialState = {
  chatAi: [],
  imageAi: [],
  isLoading: false,
};
export const chatReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.GET_ANSWER:
      return {
        ...state,
        chatAi:[...state.chatAi,payload],
        isLoading:false
        }
      case ActionType.GET_DATA_START:
        return{
          ...state,
          isLoading:true
        }
      case ActionType.GET_IMAGE:
       
        return{
          ...state,
          imageAi:[...state.imageAi,payload],
          isLoading:false
        }

    default:
      return state;
  }
};
