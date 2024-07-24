import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatList: [],
  infoSeat: {
    number: "A07",
    booked: false,
    price: 90000,
  },
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
  },
});

export const { getDetailSeat } = bookingRoomInfoSlice.actions;

export default bookingRoomInfoSlice.reducer;
