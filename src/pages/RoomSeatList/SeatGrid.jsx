import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  finalBooking,
  getDetailSeat,
  loadFromLocalStorage,
  resetState,
} from "../../redux/slices/bookingRoomInfo";
import SeatButtonActive from "./SeatButtonActive";
import { Button, message, Modal } from "antd";
import { getLocalStorage, setLocalStorage } from "../../utils/saveAccount";
import { Navigate, useNavigate } from "react-router-dom";
import { AUTH_PATH, HOME_PATH } from "../../constants/path";

const SeatGrid = ({ nameMovie, nameTheater, numberTheater, slug }) => {
  const navigate = useNavigate();
  const { seatList, infoTotalSeatList, isInitialLoad, currentApiKey } =
    useSelector((state) => state.bookingRoom);

  const { currentUser } = useSelector((state) => state.authenticUser);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    message.success("ĐẶT VÉ THÀNH CÔNG");
    setIsModalOpen(false);
    navigate(HOME_PATH);
    const updateBooking = infoTotalSeatList.map((item) => {
      const seat = seatList.find((seat) => item.maGhe === seat.maGhe);
      if (seat) {
        return {
          ...seat,
          daDat: true,
        };
      }
      return item;
    });
    dispatch(finalBooking({ data: updateBooking }));
  };
  useEffect(() => {
    const storedData = getLocalStorage("seatList");
    if (storedData && storedData.apiKey === slug) {
      dispatch(
        loadFromLocalStorage({
          apiKey: storedData.apiKey,
          data: storedData.data,
        })
      );
    }
    return () => {
      dispatch(resetState("RESET-STATE"));
    };
  }, [dispatch, isInitialLoad, slug]);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [booking, setBooking] = useState([]);

  if (!Array.isArray(infoTotalSeatList)) {
    return null; // or render a fallback UI
  }
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

  const rows = groupSeatsWithLabels(infoTotalSeatList);

  let renderSeatList = seatList.map((item) => `${item.row}-${item.tenGhe}`);

  const final = renderSeatList.join(" | ");

  let totalPrice = seatList.reduce((total, currentValue) => {
    return (total += currentValue.giaVe);
  }, 0);

  const idSeat = seatList.map((item) => item.tenGhe);

  const handleBookSeat = (detailRow, seatId) => {
    const index = rows.findIndex((item) => item.label === detailRow);
    const findSeat = rows[index].seats.find((item) => item.tenGhe === seatId);
    const newFindSeat = {
      ...findSeat,
      row: detailRow,
    };
    dispatch(getDetailSeat(newFindSeat));

    if (idSeat.includes(seatId)) {
      setBooking(booking.filter((item) => item !== seatId));
    } else {
      setBooking([...booking, seatId]);
    }
  };

  const handleCompleteBookingTicket = () => {
    setIsModalOpen(true);
  };

  if (currentUser === null) {
    message.error("BẠN CHƯA CÓ TÀI KHOẢN, VUI LÒNG ĐĂNG NHẬP");
  } else if (currentUser === "KhachHang") {
  }
  return (
    <>
      {rows.map((row, index) => (
        <div key={index} className="row">
          <div className="row-label">{row.label}</div>
          {row.seats.map((seat) => {
            return (
              <div className="row-seat">
                <SeatButtonActive
                  key={seat.maGhe}
                  handleBookSeat={handleBookSeat}
                  seat={seat}
                  row={row}
                  booking={booking}
                />
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
              <div className="bill-right">
                <div className="price">
                  <span className="txt">Tạm Tính: </span>
                  <span className="num">{totalPrice.toLocaleString()}</span>
                </div>
                <div className="bill-button">
                  <Button
                    variant="btn--primary"
                    onClick={() => handleCompleteBookingTicket()}
                  >
                    <img src="../public/img/ic-ticket.svg" alt="cine-start" />
                    <span>Đặt vé ngay</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="XÁC NHẬN THÔNG TIN ĐẶT VÉ"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <p className="price">
          Tổng Tiền: {`${totalPrice.toLocaleString()} VNĐ`}
        </p>
        <div className="info-film">
          <h3>Thông Tin Bộ Phim</h3>
          <p>{`${nameMovie}`}</p>
          <p>{`${nameTheater}`}</p>
          <p>{`${numberTheater}`}</p>
        </div>
        <div className="dataSeat">Số ghế ngồi: {final}</div>
        <div className="info-user">
          <h3>Thông Tin Người Đặt</h3>
          <p>{currentUser.email}</p>
          <p>{currentUser.hoTen}</p>
          <p>{currentUser.soDT}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleOk}> Xác Nhận</Button>
          <Button onClick={handleCancel} style={{ marginLeft: "15px" }}>
            {" "}
            Hủy Bỏ
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SeatGrid;
