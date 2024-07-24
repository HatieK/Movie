import { useQuery } from "@tanstack/react-query";
import React from "react";
import { bookingTheaterInfo } from "../../apis/bookingTheater";

const HeaderBottom = () => {
  const { data: theaterList } = useQuery({
    queryKey: ["name-theater"],
    queryFn: () => {
      return bookingTheaterInfo.getTheaterList();
    },
  });
  return (
    <div className="header-bottom">
      <div className="header-bottom-wrap">
        <div className="header-bottom-action">
          <div className="theater">
            <div>
              <span className="text">Chọn Rạp</span>
              <i className="fa-solid fa-location-dot icon-bottom" />
            </div>
            <div className="theater-list">
              {theaterList?.map((item) => {
                return (
                  <a href="" className="link" key={item.maHeThongRap}>
                    {item.tenHeThongRap.toUpperCase()}
                  </a>
                );
              })}
              {/* <a href="" className="link">
                Cine Mobile
              </a>
            
              <a href="" className="link">
                Cine Galaxy
              </a>
              <a href="" className="link">
                Cine Nha Trang
              </a>
              <a href="" className="link">
                Cine New York
              </a>
              <a href="" className="link">
                Cine Vin Pearl
              </a> */}
            </div>
          </div>
          <div className="theater-schedule">
            <div>
              <span className="text">Lịch Chiếu</span>
              <i className="fa-solid fa-calendar-days icon-bottom"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
