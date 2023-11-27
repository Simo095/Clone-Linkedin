import { ADD_FRIEND, DELETE_FRIEND } from "../action/listFriendsAction";

const initalState = {
  list: []
};

const friendsReducers = (state = initalState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case DELETE_FRIEND:
      return {
        ...state,
        list: state.list.filter(elem => elem._id !== action.payload)
      };
    default:
      return state;
  }
};
export default friendsReducers;
