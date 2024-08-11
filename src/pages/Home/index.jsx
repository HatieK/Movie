import React, { useEffect, useRef, useState } from "react";

import BannerMovie from "../../components/Banner";
import fetcher from "../../apis/fetcher";
import ShowingMovie from "./ShowingMovie";
import { Col, ConfigProvider, Row, Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import { movieListApi } from "../../apis/movieList.api";
import { useDispatch } from "react-redux";
import {
  TICKET_BOOKING_PATH,
  TICKET_BOOKING_SEGMENT,
} from "../../constants/path";
import {
  showMovieDetail,
  showTheaterDetail,
} from "../../redux/slices/dataMovie";
import Button from "../../components/Button";
import ComingSoon from "./ComingSoon";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigateWrapRef = useRef(null);
  const location = useLocation();
  const [bannerList, setBannerList] = useState([]);
  const [showingMovieList, setShowingMovieList] = useState([]);
  const [filterSelectList, setFilterSelectList] = useState({
    movie: {
      value: "",
      label: "CHỌN PHIM",
    },
    theater: {
      value: "",
      label: "CHỌN RẠP",
    },
    date: {
      value: "",
      label: "CHỌN NGÀY",
    },
    showTime: {
      value: "",
      label: "SUẤT CHIẾU",
    },
  });
  const [disableButton, setDisableButton] = useState(false);

  /*=============================================================CALL API================================ */

  const { data: dataMovieList, isLoading: dataMovieListLoading } = useQuery({
    queryKey: ["movie-list"],
    queryFn: () => movieListApi.getListMovie(),
  });

  const comingSoon = showingMovieList.filter((item) => item.sapChieu === false);
  const showingNow = showingMovieList.filter((item) => item.sapChieu === true);

  const getBannerMovie = async () => {
    try {
      const response = await fetcher.get("/QuanLyPhim/LayDanhSachBanner");
      if (response.data.content.length > 0) {
        setBannerList(response.data.content);
      }
    } catch (error) {
      console.log("🚀error---->", error);
    }
  };

  const getShowingMovie = async () => {
    try {
      const response = await fetcher.get(
        "/QuanLyPhim/LayDanhSachPhim?maNhom=GP03"
      );
      if (response.data.content.length > 0) {
        setShowingMovieList(response.data.content);
      }
    } catch (error) {
      console.log("🚀error---->", error);
    }
  };

  const getInfoSystemList = async () => {
    try {
      const response = await fetcher.get(
        "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03"
      );
      if (response.data.content.length > 0) {
        const { content } = response.data;
        const dataCGV = content.filter((item) => {
          return item.maHeThongRap === "CGV";
        });
      }
    } catch (error) {}
  };

  const { data: scheduleMovieList, isLoading: scheduleMovieListLoading } =
    useQuery({
      queryKey: ["scheduleMovie-list", filterSelectList.movie.value],
      queryFn: () =>
        movieListApi.getScheduleMovieList(filterSelectList.movie.value),
    });

  const dataMovie = dataMovieList?.map((item) => {
    return {
      value: item.maPhim,
      label: item.tenPhim.toUpperCase(),
    };
  });

  const { heThongRapChieu = [] } = scheduleMovieList || {};

  const dataTheaterList = heThongRapChieu.map((item) => {
    if (!item) {
      return {
        value: "",
        label: "Chưa Có Suất Chiếu",
      };
    }
    return {
      value: item.maHeThongRap,
      label: item.tenHeThongRap,
    };
  });

  const theaterItem = heThongRapChieu.map((item) => {
    return item.cumRapChieu;
  });

  /*=============================================================CALL API================================ */

  const extractShowtimes = (data) => {
    const showtimes = [];

    data.forEach((theaterArray) => {
      theaterArray.forEach((theater) => {
        theater.lichChieuPhim.forEach((show) => {
          const { ngayChieuGioChieu, maLichChieu } = show;
          const [date, time] = ngayChieuGioChieu.split("T");
          showtimes.push({ date, time, maLichChieu });
        });
      });
    });

    return showtimes;
  };

  const extractShowTimeList = extractShowtimes(theaterItem);
  const finalDateList = extractShowTimeList.map((item) => {
    return {
      value: item.maLichChieu,
      label: item.date,
    };
  });

  const finalShowTimeList = extractShowTimeList.map((item) => {
    return {
      value: item.maLichChieu,
      label: item.time,
    };
  });

  const handleChangeNavigate = (name, value) => {
    setFilterSelectList({
      ...filterSelectList,
      [name]: {
        ...filterSelectList,
        value: value,
        label: value,
      },
    });
  };

  const checkDisabledButton = () => {
    if (
      Object.values(filterSelectList).every(
        (value) =>
          value.value !== null &&
          value.value !== undefined &&
          value.value !== ""
      )
    ) {
      setDisableButton(true);
    }
  };

  const handleBookingTicket = () => {
    dispatch(showMovieDetail(filterSelectList.movie.value));
    dispatch(showTheaterDetail(filterSelectList.date.value));
  };
  const detailMovie = TICKET_BOOKING_PATH + `/${filterSelectList.movie.value}`;

  const handleDropDownRender = () => {};

  useEffect(() => {
    getBannerMovie();
    getShowingMovie();
    getInfoSystemList();
    checkDisabledButton();
  }, [filterSelectList]);

  return (
    <div className="main container">
      <BannerMovie bannerList={bannerList} />
      <Row
        ref={navigateWrapRef}
        id="navigate-wrap-scroll"
        className="navigate-wrap"
      >
        <Col className="heading">
          <h1 className="heading-title">ĐẶT VÉ NHANH</h1>
        </Col>
        <div>
          <Row className="navigate-filter" gutter={[24, 24]}>
            <Col className="navigate-filter-item" id="navigate-item-content">
              <Select
                showSearch
                // searchValue="theater"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={dataMovie}
                onChange={(value) => handleChangeNavigate("movie", value)}
                value={filterSelectList.movie.label}
              />
            </Col>
            <Col className="navigate-filter-item" id="navigate-item-content">
              {/* <ConfigProvider renderEmpty={() => "Phim Chưa Có Rạp Chiếu"}> */}
              <Select
                showSearch
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                disabled={
                  filterSelectList.movie.label === "CHỌN PHIM" ? true : false
                }
                onChange={(value) => handleChangeNavigate("theater", value)}
                value={filterSelectList.theater.label}
                options={dataTheaterList}
                notFoundContent="Phim Chưa Có "
              />
              {/* </ConfigProvider> */}
            </Col>
            <Col className="navigate-filter-item" id="navigate-item-content">
              <ConfigProvider renderEmpty={() => "Phim Chưa Có Suất Chiếu"}>
                <Select
                  showSearch
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  value={filterSelectList.date.label}
                  options={finalDateList}
                  disabled={
                    filterSelectList.theater.label === "CHỌN RẠP" ? true : false
                  }
                  onChange={(value) => handleChangeNavigate("date", value)}
                />
              </ConfigProvider>
            </Col>
            <Col className="navigate-filter-item" id="navigate-item-content">
              <Select
                showSearch
                placeholder="CHỌN SUẤT"
                optionFilterProp="label"
                options={finalShowTimeList}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                onChange={(value) => handleChangeNavigate("showTime", value)}
                value={filterSelectList.showTime.label}
                disabled={
                  filterSelectList.date.label === "CHỌN NGÀY" ? true : false
                }
              />
            </Col>
            <Col className="navigate-filter-btn">
              <Button
                class={`${disableButton ? "navigate-filter" : ""} btn`}
                onClick={() => handleBookingTicket()}
                to={disableButton ? detailMovie : ""}
              >
                <img src="/img/ic-ticket.svg" alt="cine-start" />
                <span>Đặt vé ngay</span>
              </Button>
            </Col>
          </Row>
        </div>
      </Row>
      <ShowingMovie showingMovieList={showingNow} />
      <ComingSoon comingSoon={comingSoon} />
    </div>
  );
};

export default HomePage;
