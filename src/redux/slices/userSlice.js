import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/saveAccount";

const userLocalStorage = getLocalStorage("user");
const initialState = {
  currentUser: userLocalStorage,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      console.log("🚀action.payload---->", action.payload);
      state.currentUser = action.payload;
    },
    removeUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUsers, removeUser } = userSlice.actions;

export default userSlice.reducer;
