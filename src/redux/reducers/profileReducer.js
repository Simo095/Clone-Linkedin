import { PROFILE } from "../action";

const initialstate = {
  content: null,
};

const profileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
