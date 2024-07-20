import React from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { TICKET_BOOKING_PATH } from "../../constants/path";
import { showMovieDetail } from "../../redux/slices/dataMovie";

const CardFilm = ({ dataCardFilm }) => {
  const dispatch = useDispatch();
  const handleBookingTicket = (movieId) => {
    dispatch(showMovieDetail(movieId));
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
                  <img src="../../../public/img/icon-tag.svg" alt="" />
                </span>
                <span className="title-name">Phim Đang Chiếu</span>
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
            <span className="txt">Xem Trailer</span>
          </a>
          <Button
            variant="btn--yellow"
            link={detailMovie}
            onClick={() => handleBookingTicket(dataCardFilm.maPhim)}
          >
            <span>Đặt vé ngay</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardFilm;
