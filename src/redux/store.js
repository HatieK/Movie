import { configureStore } from "@reduxjs/toolkit";
import showHamburger from "./slices/showHamburger";
import dataMovie from "./slices/dataMovie";
import userSlice from "./slices/userSlice";
import pathLogin from "./slices/pathLogin";
import bookingRoomInfo from "./slices/bookingRoomInfo";

const store = configureStore({
  reducer: {
    burger: showHamburger,
    bookingTicket: dataMovie,
    authenticUser: userSlice,
    pathNameLogin: pathLogin,
    bookingRoom: bookingRoomInfo,
  },
});

export default store;
