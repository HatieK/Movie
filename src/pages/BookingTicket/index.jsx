import React from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { movieListApi } from "../../apis/movieList.api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const BookingTicket = () => {
  const params = useParams();
  console.log("🚀params---->", params);
  const { movieId, theaterId } = useSelector((state) => state.bookingTicket);
  const { data: dataMovieDetail, isLoading: dateMovieDetailLoading } = useQuery(
    {
      queryKey: ["movie-detail", movieId],
      queryFn: () => {
        return movieListApi.getDetailMovie(movieId);
      },
    }
  );

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
          </div>
        </div>
      </div>
    );
  }
};

export default BookingTicket;
