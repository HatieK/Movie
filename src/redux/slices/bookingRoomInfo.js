import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utils/saveAccount";

const initialState = {
  infoTotalSeatList: [],
  seatList: [],
  isInitialLoad: true, // Flag to check initial load
  currentApiKey: null,
};

const bookingRoomInfoSlice = createSlice({
  name: "booking-room",
  initialState,
  reducers: {
    getDetailSeat: (state, action) => {
      const index = state.seatList.findIndex(
        (seat) => seat.maGhe === action.payload.maGhe
      );
      if (index !== -1) {
        state.seatList.splice(index, 1);
      } else if (index === -1) {
        state.seatList.push(action.payload);
      }
    },
    resetState: (state, action) => {
      if (action.payload === "RESET-STATE") {
        state.seatList = [];
      }
    },
    updateNewSeatList: (state, action) => {
      state.seatList = action.payload;
    },
    initialSeatList: (state, action) => {
      state.infoTotalSeatList = action.payload.data;
      state.currentApiKey = action.payload.apiKey;
      state.isInitialLoad = false;
    },
    finalBooking: (state, action) => {
      state.infoTotalSeatList = action.payload.data;
      setLocalStorage("seatList", {
        apiKey: state.currentApiKey,
        data: action.payload.data,
      });
    },
    loadFromLocalStorage: (state, action) => {
      state.infoTotalSeatList = action.payload.data;
      state.currentApiKey = action.payload.apiKey;
      state.isInitialLoad = false;
    },
  },
});

export const {
  getDetailSeat,
  updateNewSeatList,
  initialSeatList,
  finalBooking,
  resetState,
  loadFromLocalStorage,
} = bookingRoomInfoSlice.actions;

export default bookingRoomInfoSlice.reducer;
