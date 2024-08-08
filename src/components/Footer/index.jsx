import { Col, Row } from "antd";
import React from "react";
import HeaderTopAction from "../Header/HeaderTopAction";
import FooterMobile from "./FooterMobile";
import FooterMobileXs from "./FooterMobileXs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row gutter={[100, 100]} className="footer-grid">
          <Col span={8} className="footer-social">
            <Row className="footer-grow">
              <a href="#">
                <img
                  className="footer-logo"
                  src="/img/header-logo.webp"
                  alt=""
                />
              </a>
              <p className="text">BE HAPPY, BE A START</p>
              <HeaderTopAction />
              <div className="footer-social__list">
                <a className="social-link" href="">
                  <img src="/img/footer-facebook.svg" alt="facebook" />
                </a>
                <a className="social-link" href="">
                  <img src="/img/footer-youtube.svg" alt="youtube" />
                </a>
                <a className="social-link" href="">
                  <img src="/img/ic-tittok.svg" alt="tiktok" />
                </a>
                <a className="social-link" href="">
                  <img src="/img/ic-zl-white.svg" alt="zalo" />
                </a>
              </div>
            </Row>
          </Col>
          <Row className="footer-grow">
            <Col span={8} className="footer-info">
              <div className="footer-info-account">
                <span className="footer-title">TÀI KHOẢN</span>
                <ul>
                  <li>
                    <a href="" className="link">
                      Đăng Nhập
                    </a>
                  </li>
                  <li>
                    <a href="" className="link">
                      Đăng Ký
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="footer-info__movie">
              <span className="footer-title">Xem Phim</span>
              <ul>
                <li>
                  <a href="" className="link">
                    Phim Đang Chiếu
                  </a>
                </li>
                <li>
                  <a href="" className="link">
                    Phim Sắp Chiếu
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Col span={8} className="footer-theater">
            <span className="footer-title">HỆ THỐNG RẠP</span>
            <ul>
              <li>
                <a href="" className="link">
                  Cinestar Hai Bà Trưng (TP.HCM)
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Cinestar Sinh Viên (Bình Dương)
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Cinestart Mỹ Tho{" "}
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Cinestart Đà Lạt
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Cinestart Lâm Đồng
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <FooterMobile />
        <FooterMobileXs />
      </div>
    </footer>
  );
};

export default Footer;
