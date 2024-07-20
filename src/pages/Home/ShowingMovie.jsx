import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CardFilm from "../../components/CardFilm";
import "swiper/css/navigation";

const ShowingMovie = ({ showingMovieList }) => {
  return (
    <>
      <h2 className="movie-heading">PHIM ĐANG CHIẾU</h2>
      {/* <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1195: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          {showingMovieList.map((cardFilm, index) => {
            return (
              <div key={cardFilm.maPhim || index}>
                <SwiperSlide className="movie-list">
                  <div className="card-movie-item">
                    <div>
                      <CardFilm dataCardFilm={cardFilm} />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </div>
      </Swiper> */}
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1195: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          {showingMovieList.map((cardFilm, index) => {
            return (
              <div key={cardFilm.maPhim || index}>
                <SwiperSlide className="movie-list">
                  <div className="card-movie-item">
                    <div>
                      <CardFilm dataCardFilm={cardFilm} />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </div>
      </Swiper>
    </>
  );
};

export default ShowingMovie;
