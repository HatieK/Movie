import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { bookingTheaterInfo } from "../../apis/bookingTheater";
import ComponentLoading from "../../components/Loading";
import SeatGrid from "./SeatGrid";
import { useSelector } from "react-redux";

const RoomSeatList = () => {
  const { slug } = useParams();
  const { data: detailTheater, isLoading: detailTheaterLoading } = useQuery({
    queryKey: ["theater-detail"],
    queryFn: () => bookingTheaterInfo.getTheaterInfo(slug),
  });

  if (detailTheaterLoading) {
    return <ComponentLoading />;
  }
  const { danhSachGhe: detailSeat, thongTinPhim: movieInfo } = detailTheater;
  const {
    diaChi: address,
    lichChieu: schedule,
    tenCumRap: nameTheater,
    tenRap: numberTheater,
    tenPhim: nameMovie,
  } = movieInfo;

  console.log("🚀movieInfo---->", movieInfo);

  return (
    <div className="container main">
      <div className="seat-list">
        <h2 className="heading">CHỌN GHẾ -</h2>
        <div className="seat-screen">
          <img src="../../../public/img/img-screen.png" alt="" />
          <p>Màn Hình</p>
        </div>
        <SeatGrid
          detailSeat={detailSeat}
          nameMovie={nameMovie}
          nameTheater={nameTheater}
          numberTheater={numberTheater}
          address={address}
        />
      </div>
    </div>
  );
};

export default RoomSeatList;
