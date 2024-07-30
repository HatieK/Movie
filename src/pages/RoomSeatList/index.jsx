import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { bookingTheaterInfo } from "../../apis/bookingTheater";
import ComponentLoading from "../../components/Loading";
import SeatGrid from "./SeatGrid";
import { useDispatch, useSelector } from "react-redux";
import { initialSeatList } from "../../redux/slices/bookingRoomInfo";

const RoomSeatList = () => {
  const { slug } = useParams();
  const { data: detailTheater, isLoading: detailTheaterLoading } = useQuery({
    queryKey: ["theater-detail", slug],
    queryFn: () => bookingTheaterInfo.getTheaterInfo(slug),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (detailTheater) {
      const { danhSachGhe: detailSeat } = detailTheater;
      if (detailSeat) {
        dispatch(initialSeatList({ apiKey: slug, data: detailSeat }));
      }
    }
  }, [detailTheater, dispatch, slug]);

  if (detailTheaterLoading) {
    return <ComponentLoading />;
  }
  const { thongTinPhim: movieInfo } = detailTheater;
  const {
    diaChi: address,
    lichChieu: schedule,
    tenCumRap: nameTheater,
    tenRap: numberTheater,
    tenPhim: nameMovie,
  } = movieInfo;

  return (
    <div className="container main" style={{ position: "relative" }}>
      <div className="seat-list">
        <h2 className="heading">CHỌN GHẾ -</h2>
        <div className="seat-screen">
          <img src="../../../public/img/img-screen.png" alt="" />
          <p>Màn Hình</p>
        </div>
        {detailTheaterLoading && <ComponentLoading />}

        <SeatGrid
          // detailSeat={detailSeat}
          nameMovie={nameMovie}
          nameTheater={nameTheater}
          numberTheater={numberTheater}
          address={address}
          slug={slug}
        />
      </div>
    </div>
  );
};

export default RoomSeatList;
