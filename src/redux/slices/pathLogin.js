import { createSlice } from "@reduxjs/toolkit";
import { HOME_PATH } from "../../constants/path";

const initialState = {
  pathName: HOME_PATH,
};

const pathLoginSlice = createSlice({
  name: "path-name",
  initialState,
  reducers: {
    changePathName: (state, action) => {
      state.pathName = action.payload;
    },
  },
});

export const { changePathName } = pathLoginSlice.actions;

export default pathLoginSlice.reducer;
