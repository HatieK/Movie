import React from "react";

const HeaderBottom = () => {
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
              <a href="" className="link">
                Cine Mobile
              </a>
              <a href="" className="link">
                Cine Something
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
              </a>
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
