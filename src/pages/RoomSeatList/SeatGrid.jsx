import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { getDetailSeat } from "../../redux/slices/bookingRoomInfo";

const SeatGrid = ({ detailSeat, nameMovie, nameTheater, numberTheater }) => {
  const { infoSeat, seatList } = useSelector((state) => state.bookingRoom);
  console.log("🚀seatList---->", seatList);
  const dispatch = useDispatch();
  const seatRef = useRef(null);
  const groupSeatsWithLabels = (seats) => {
    const rows = [];
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (let i = 0; i < seats.length; i += 16) {
      const rowSeats = seats.slice(i, i + 16);
      const rowLabel = labels[Math.floor(i / 16)];
      rows.push({ label: rowLabel, seats: rowSeats });
    }
    return rows;
  };
  const rows = groupSeatsWithLabels(detailSeat);
  let renderSeatList = seatList.map((item) => `${item.row}-${item.tenGhe}`);
  const final = renderSeatList.join(" | ");
  let totalPrice = seatList.reduce((total, currentValue) => {
    return (total += currentValue.giaVe);
  }, 0);
  console.log("🚀totalPrice---->", totalPrice);
  const handleBookSeat = (detailRow, seatId) => {
    const index = rows.findIndex((item) => item.label === detailRow);
    const findSeat = rows[index].seats.find((item) => item.tenGhe === seatId);
    const newFindSeat = {
      ...findSeat,
      row: detailRow,
    };

    dispatch(getDetailSeat(newFindSeat));
  };

  return (
    <>
      {rows.map((row, index) => (
        <div key={index} className="row">
          <div className="row-label">{row.label}</div>

          {row.seats.map((seat) => {
            return (
              <div className="row-seat">
                <div
                  onClick={() => handleBookSeat(row.label, seat.tenGhe)}
                  key={seat.maGhe}
                  ref={seatRef}
                  className={`seat ${seat.loaiGhe === "Thuong" ? "" : "vip"} ${
                    seat.daDat ? "booked" : ""
                  }`}
                >
                  {seat.tenGhe}
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <div className="type-seat">
        <div className="booked">
          <p></p>
          <span>GHẾ ĐÃ ĐƯỢC CHỌN</span>
        </div>
        <div className="booking">
          <p></p>
          <span>GHẾ ĐANG CHỌN</span>
        </div>
        <div className="vip">
          <p></p>
          <span>GHẾ VIP</span>
        </div>
        <div className="normal">
          <p></p>
          <span>GHẾ THƯỜNG</span>
        </div>
      </div>
      <div className="bill">
        <div className="container">
          <div className="bill-wrapper">
            <div className="bill-left">
              <h4 className="name-film">{nameMovie.toUpperCase()}</h4>
              <ul className="list">
                <li className="item">
                  <span className="txt">{nameTheater}</span>
                  <span className="dot"> | </span>
                </li>
                <li className="item"></li>
                <li className="item">
                  <span className="txt">{`${numberTheater}`}:</span>
                  <span className="txt"></span>
                  <span className="dot">|</span>
                  <span className="txt">{final}</span>
                </li>
              </ul>
            </div>
            <div className="bill-custom-right">
              <div className="bill-countdown">
                <p className="txt">Thời Gian Giữ Vé</p>
                <div className="bill-time">
                  <span className="item" id="timer">
                    05:00
                  </span>
                </div>
              </div>
              <div className="bill-right">
                <div className="price">
                  <span className="txt">Tạm Tính: </span>
                  <span className="num">{totalPrice.toLocaleString()}</span>
                </div>
                <div className="bill-button">
                  <Button link="/ticket-booking" variant="btn--primary">
                    <img src="../public/img/ic-ticket.svg" alt="cine-start" />
                    <span>Đặt vé ngay</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeatGrid;
