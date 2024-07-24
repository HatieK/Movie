import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieId: null,
  theaterId: null,
};

const handleBookingTicketPage = createSlice({
  name: "bookingTicketPage",
  initialState,
  reducers: {
    showMovieDetail: (state, action) => {
      console.log("🚀action.payload---->", action.payload);
      state.movieId = action.payload;
    },
    showTheaterDetail: (state, action) => {
      state.theaterId = action.payload;
    },
  },
});

export const { showMovieDetail, showTheaterDetail } =
  handleBookingTicketPage.actions;

export default handleBookingTicketPage.reducer;
