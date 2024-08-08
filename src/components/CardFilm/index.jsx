import React from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { HOME_PATH, TICKET_BOOKING_PATH } from "../../constants/path";
import { showMovieDetail } from "../../redux/slices/dataMovie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { message } from "antd";

const CardFilm = ({ dataCardFilm }) => {
  const { currentUser } = useSelector((state) => state.authenticUser);

  const dispatch = useDispatch();
  const handleBookingTicket = (movieId) => {
    if (currentUser) {
      dispatch(showMovieDetail(movieId));
    }
  };
  const detailMovie = TICKET_BOOKING_PATH + `/${dataCardFilm.maPhim}`;

  return (
    <>
      <div className="card-movie-box">
        <div>
          <a href="">
            <img className="image" src={dataCardFilm.hinhAnh} alt="" />
          </a>
        </div>
        <div className="movie-info">
          <p className="name">{dataCardFilm.tenPhim}</p>
          <ul className="detail">
            <li className="title">
              <a href="" className="title-link">
                <span className="ic">
                  <img src="/img/icon-tag.svg" alt="" />
                </span>
                {dataCardFilm.dangChieu === true ? (
                  <span className="title-name">Phim Sắp Chiếu</span>
                ) : (
                  <span className="title-name">Phim Đang Chiếu</span>
                )}
              </a>
            </li>
            <li className="title">
              <a href="" className="title-link">
                <span className="ic">
                  <img src="../../../public/img/icon-clock.svg" alt="" />
                </span>
                <span className="title-name">120'</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="info">
        <a href="" className="movie-name">
          {dataCardFilm.tenPhim.toUpperCase()}
        </a>
        <div className="info-action">
          <a href={dataCardFilm.trailer} className="action-watch">
            <span className="ic">
              <img src="../../../public/img/icon-play-vid.svg" alt="" />
            </span>
            <Link to={dataCardFilm.trailer}>
              <span className="txt">Xem Trailer</span>
            </Link>
          </a>
          <Button
            variant="btn--yellow"
            link={detailMovie}
            onClick={() => handleBookingTicket(dataCardFilm.maPhim)}
          >
            {dataCardFilm.sapChieu === true ? (
              <span>Đặt Vé Ngay</span>
            ) : (
              <span>Tìm Hiểu Thêm</span>
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardFilm;
