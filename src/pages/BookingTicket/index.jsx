import React, { act, useEffect, useRef, useState } from "react";
import { Col, Empty, Row } from "antd";
import { useSelector } from "react-redux";
import { movieListApi } from "../../apis/movieList.api";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import ComponentLoading from "../../components/Loading";
import moment from "moment/moment";
import { THEATER_DETAIL, THEATER_DETAIL_SEGMENT } from "../../constants/path";

const extractShowtimes = (data) => {
  let result = [];

  data.forEach((heThongRap) => {
    heThongRap.cumRapChieu.forEach((cumRap) => {
      cumRap.lichChieuPhim.forEach((lichChieu) => {
        const { maLichChieu, maRap, tenRap, ngayChieuGioChieu, thoiLuong } =
          lichChieu;
        const ngayChieu = ngayChieuGioChieu.split("T")[0];
        const gioChieu = ngayChieuGioChieu.split("T")[1];
        const { tenCumRap, diaChi } = cumRap;

        result.push({
          maLichChieu,
          maRap,
          tenRap,
          ngayChieu,
          gioChieu,
          thoiLuong,
          tenCumRap,
          diaChi,
        });
      });
    });
  });

  return result;
};

const BookingTicket = () => {
  const {
    data: dataScheduleMovie,
    isLoading: scheduleMovieLoading,
    error: scheduleMovieError,
  } = useQuery({
    queryKey: ["schedule-movie"],
    queryFn: () => movieListApi.getScheduleMovieList(slug),
  });
  const [showTimes, setShowTimes] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [scheduleInfo, setScheduleInfo] = useState(null);

  const [dateFiltered, setFiltered] = useState("");

  useEffect(() => {
    if (dataScheduleMovie) {
      const showTimes = extractShowtimes(dataScheduleMovie.heThongRapChieu);
      setShowTimes(showTimes);
      const uniqueDates = [
        ...new Set(showTimes.map((showTime) => showTime.ngayChieu)),
      ];
      setUniqueDates(uniqueDates);
      setSelectedDate(uniqueDates[0]);
    }
  }, [dataScheduleMovie]);

  const { slug } = useParams();
  const { movieId } = useSelector((state) => state.bookingTicket);
  const { data: dataMovieDetail, isLoading: dateMovieDetailLoading } = useQuery(
    {
      queryKey: ["movie-detail", movieId],
      queryFn: () => movieListApi.getDetailMovie(slug),
    }
  );

  if (scheduleMovieLoading) {
    return <ComponentLoading />;
  }

  if (!dataScheduleMovie) {
    return <Empty description="KHÔNG CÓ DỮ LIỆU" />;
  }

  const filterShowTimes = showTimes.filter(
    (showTime) => showTime.ngayChieu === selectedDate
  );
  console.log("🚀filterShowTimes---->", filterShowTimes);

  // const    = (dateValue) => {
  //   filterShowTimes.forEach((item) => {
  //     if (item.ngayChieu === dateValue) {
  //       setActiveDate(!activeDate);
  //     } else {
  //       setActiveDate(false);
  //     }
  //   });
  // };

  const handleBookingTicket = (value) => {
    console.log("🚀value---->", value);
  };

  const templateReview =
    "Inception là một kiệt tác của đạo diễn Christopher Nolan, mang đến một trải nghiệm điện ảnh đầy kích thích và sâu sắc. Với cốt truyện phức tạp xoay quanh việc xâm nhập vào giấc mơ, phim cuốn hút khán giả từ đầu đến cuối. Leonardo DiCaprio thể hiện xuất sắc vai Dom Cobb, một chuyên gia trộm giấc mơ, mang đến sự căng thẳng và cảm xúc mãnh liệt. Hiệu ứng hình ảnh và âm thanh đỉnh cao, cùng với âm nhạc của Hans Zimmer, tạo nên một không gian mơ ảo và đầy mê hoặc. Inception là một bộ phim không thể bỏ qua cho những ai yêu thích điện ảnh.";

  if (dataMovieDetail) {
    return (
      <div className="bookingTicket main">
        <div className="bookingTicket-movie">
          <div className="container">
            <div className="movie-select">
              <Row>
                <Col span={12}>
                  <div className="movie-image">
                    <img src={dataMovieDetail?.hinhAnh} alt="" />
                  </div>
                </Col>
                <Col span={12}>
                  <Row gutter={[20, 20]} className="movie-info">
                    <Col span={24}>
                      <h1 className="heading">
                        {(dataMovieDetail?.tenPhim).toUpperCase()}
                      </h1>
                    </Col>
                    <Col span={24}>
                      <ul className="info-detail">
                        <li className="info-item">
                          <span className="ic">
                            <img
                              src="../../../public/img/icon-tag.svg"
                              alt=""
                            />
                          </span>
                          <span className="txt">Hoạt Hình</span>
                        </li>
                        <li className="info-item">
                          <span className="ic">
                            <img
                              src="../../../public/img/icon-clock.svg"
                              alt=""
                            />
                          </span>
                          <span className="txt">182'</span>
                        </li>
                      </ul>
                    </Col>
                    <Col span={24}>
                      <div className="detail">
                        <span>MÔ TẢ</span>
                        <p className="txt">Đạo Diễn: Josh Gordon, Will Speck</p>
                        <p className="txt">
                          Diễn Viên: Anthony Ramos, Naomi Scott, Kristofer Hivju
                        </p>
                        <p className="txt">
                          Khởi Chiếu:{" "}
                          {moment(dataMovieDetail?.ngayKhoiChieu).format(
                            "DD/MM/YYYY"
                          )}
                        </p>
                        <div className="detail-content">
                          <h2>NỘI DUNG PHIM</h2>
                          <p className="txt">{`${
                            dataMovieDetail?.moTa.length < 50
                              ? templateReview
                              : dataMovieDetail.moTa
                          }}`}</p>
                        </div>
                        <div className="info-action">
                          <a href="" className="booking action-watch">
                            <span className="ic">
                              <img
                                src="../../../public/img/icon-play-vid.svg"
                                alt=""
                              />
                            </span>
                            <span className="text">Xem Trailer</span>
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Col span={24}>
                <div className="detail bookingTicket-mobile">
                  <span>MÔ TẢ</span>
                  <p className="txt">Đạo Diễn: Josh Gordon, Will Speck</p>
                  <p className="txt">
                    Diễn Viên: Anthony Ramos, Naomi Scott, Kristofer Hivju
                  </p>
                  <p className="txt">
                    Khởi Chiếu: {dataMovieDetail?.ngayKhoiChieu}
                  </p>
                  <div className="detail-content">
                    <h2>NỘI DUNG PHIM</h2>
                    <p className="txt">{`${
                      dataMovieDetail?.moTa.length < 50
                        ? templateReview
                        : dataMovieDetail.moTa
                    }}`}</p>
                  </div>
                  <div className="info-action">
                    <a href="" className="booking action-watch">
                      <span className="ic">
                        <img
                          src="../../../public/img/icon-play-vid.svg"
                          alt=""
                        />
                      </span>
                      <span className="text">Xem Trailer</span>
                    </a>
                  </div>
                </div>
              </Col>
            </div>
            {dataScheduleMovie.dangChieu === false ? (
              <div className="container-ticket">
                <div className="movie-schedule">
                  <h2 className="heading">LỊCH CHIẾU</h2>
                  <div className="schedule-list">
                    {uniqueDates.map((item, index) => {
                      return (
                        // <div
                        //   className={`time ${activeDate ? "active" : ""}`}
                        //   key={item}
                        //   onClick={() => handleDateClick(item)}
                        // >
                        //   <p className="time-month">
                        //     {moment(item).format("DD/MM")}
                        //   </p>
                        // </div>
                        <DateTime
                          item={item}
                          isActive={item === dateFiltered}
                          onChange={(item) => setFiltered(item)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="theater-list">
                  <h2 className="heading">DANH SÁCH RẠP</h2>
                  {filterShowTimes.map((item, index) => {
                    const theaterDetail =
                      THEATER_DETAIL + `/${item.maLichChieu}`;
                    return (
                      <div key={index} className="theater-info">
                        <p className="name">{item.tenCumRap}</p>
                        <p className="address">{item.diaChi}</p>
                        <Link
                          className="hour"
                          to={theaterDetail}
                          onClick={() => handleBookingTicket(item.maLichChieu)}
                        >
                          {item.gioChieu}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>KHÔNG CÓ LỊCH CHIẾU</div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

const DateTime = ({ item, onChange, isActive }) => {
  return (
    <div
      className={`time ${isActive ? "active" : ""}`}
      key={item}
      onClick={() => {
        onChange(item);
      }}
    >
      <p className="time-month">{moment(item).format("DD/MM")}</p>
    </div>
  );
};

export default BookingTicket;
