import { GENERAL_JOBS_LIST, GENERAL_JOBS_LIST_CATEGORY, GENERAL_JOBS_LIST_COMPANY } from "../action/jobsAction";

const initialState = {
  favJobs: [],
};

const jobsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB_FAV":
      return {
        ...state,
        favJobs: [...state.favJobs, action.payload],
      };
    case "REMOVE_JOB_FAV":
      return {
        ...state,
        favJobs: state.favJobs.filter((elem) => elem._id !== action.payload),
      };
    default:
      return state;
  }
};

export default jobsReducers;
