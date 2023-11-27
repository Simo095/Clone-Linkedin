import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import currentUserReducer from "../reducers/currentUser";
import profileReducer from "../reducers/profileReducer";
import modalReducer from "../reducers/modalReducer";
import postReducers from "../reducers/postReducers";
import addExp from "../reducers/Experiences";
import friendsReducers from "../reducers/friendsReducers";
import jobsReducers from "../reducers/jobsReducers";
import generalJobsReducers from "../reducers/generalJobsReducers";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["currenUser", "listFriends", "jobs"],
};

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  profile: profileReducer,
  modal: modalReducer,
  post: postReducers,
  addExps: addExp,
  listFriends: friendsReducers,
  jobs: jobsReducers,
  generalJobs: generalJobsReducers,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

export const persiStore = persistStore(store);
