import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HeaderMobile = () => {
  const { showNavbar } = useSelector((state) => state.burger);

  const handleActiveLiElement = (liValue) => {
    // chưa fix xong
    if (liValue.classList.contains("active")) {
      liValue.classList.remove("active");
    } else {
      liValue.classList.add("active");
    }
  };

  useEffect(() => {
    const liElements = document.querySelectorAll(".menu-nav .menu-item");
    const liElementList = Array.from(liElements).slice(1);
    liElementList.forEach((liItem) => {
      liItem.addEventListener("click", () => {
        handleActiveLiElement(liItem);
      });
    });
  }, []);

  return (
    <div className="mobile">
      <div className="container-mobile">
        <div className="mobile-wrap">
          <div className="mobile-navbar">
            <nav className="menu-nav">
              <ul className="menu-list">
                <li className="menu-item active">
                  <a href="#" className="nav-link">
                    TRANG CHỦ
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    ĐẶT VÉ
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    LỊCH CHIẾU
                  </a>
                </li>
                <li className="menu-item">
                  <a href="" className="nav-link">
                    THÀNH VIÊN
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-content">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="" className="nav-link">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Thông tin
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Thành viên
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Liên Hệ
                </a>
              </li>
              <li>
                <a href="" className="nav-link">
                  Social:
                  <img src="../../../img/footer-facebook.svg" alt="" />
                  <img src="../../../img/footer-youtube.svg" alt="" />
                  <img src="../../../img/ic-zl-white.svg" alt="" />
                  <img src="../../../img/ic-tittok.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
