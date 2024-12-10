import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

export const settingReducer = createSlice({
  name: "settings",
  initialState,
  reducers: {},
});

export const {} = settingReducer.actions;
