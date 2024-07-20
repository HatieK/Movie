import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const FooterRow = () => {
  return (
    <>
      <Col span={8} className="footer-info">
        <div className="footer-info__account">
          <span className="footer-title">TÀI KHOẢN</span>
          <ul>
            <li>
              <Link href="" className="link">
                Đăng Nhập
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Đăng Ký
              </Link>
            </li>
          </ul>
        </div>
      </Col>
      <Col className="footer-info__movie">
        <span className="footer-title">Xem Phim</span>
        <ul>
          <li>
            <Link href="" className="link">
              Phim Đang Chiếu
            </Link>
          </li>
          <li>
            <Link href="" className="link">
              Phim Sắp Chiếu
            </Link>
          </li>
        </ul>
      </Col>
      <Col span={8} className="footer-theater">
        <span className="footer-title">HỆ THỐNG RẠP</span>
        <ul>
          <li>
            <Link href="" className="link">
              Cinestar Hai Bà Trưng (TP.HCM)
            </Link>
          </li>
          <li>
            <Link href="" className="link">
              Cinestar Sinh Viên (Bình Dương)
            </Link>
          </li>
          <li>
            <Link href="" className="link">
              Cinestart Mỹ Tho{" "}
            </Link>
          </li>
          <li>
            <Link href="" className="link">
              Cinestart Đà Lạt
            </Link>
          </li>
          <li>
            <Link href="" className="link">
              Cinestart Lâm Đồng
            </Link>
          </li>
        </ul>
      </Col>
    </>
  );
};

export default FooterRow;
