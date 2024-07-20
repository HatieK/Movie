import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNavbar: false,
  showInputHeaderMobile: false,
};

const showHamburgerSlice = createSlice({
  name: "hamburger",
  initialState: initialState,
  reducers: {
    handleShowNavbar: (state, action) => {
      state.showNavbar = !state.showNavbar;
    },
    handleShowInputHeader: (state, action) => {
      state.showInputHeaderMobile = !state.showInputHeaderMobile;
    },
    handleCloseInput: (state, action) => {
      console.log("🚀222---->", 222);
      state.showInputHeaderMobile = false;
    },
  },
});

export const { handleShowNavbar, handleShowInputHeader, handleCloseInput } =
  showHamburgerSlice.actions;

export default showHamburgerSlice.reducer;
