import React from "react";

const FooterMobileXs = () => {
  return (
    <div className="footer-mobile__xs">
      <a href="#">
        <img className="logo-footer" src="../../img/header-logo.webp" alt="" />
      </a>
      <p className="text">BE HAPPY, BE A START</p>
      <div className="footer__list">
        <ul className="footer__nav">
          <li>
            <a href="" className="nav-link">
              Tài Khoản
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Lịch Chiếu
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Thông Tin
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Về Chúng Tôi
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMobileXs;
