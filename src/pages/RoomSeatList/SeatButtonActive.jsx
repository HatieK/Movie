import React from "react";

const SeatButtonActive = ({ handleBookSeat, seat, row, active, booking }) => {
  return (
    <div
      onClick={() => handleBookSeat(row.label, seat.tenGhe)}
      className={`seat ${seat.loaiGhe === "Thuong" ? "" : "vip"}
        ${seat.daDat === true ? "booked" : ""}
      ${booking.includes(seat.tenGhe) ? "booking" : ""}
      `}
    >
      {seat.tenGhe}
    </div>
  );
};

export default SeatButtonActive;
