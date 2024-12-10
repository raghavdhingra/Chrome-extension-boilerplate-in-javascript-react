import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { settingReducer } from "@reducers/settings/settings.slice";

const rootReducer = combineReducers({
  setting: settingReducer.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
