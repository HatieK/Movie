import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import HeaderMobileSelect from "./HeaderMobileSelect";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import {
  handleCloseInput,
  handleShowInputHeader,
} from "../../redux/slices/showHamburger";
import OutsideAlerter from "../../hooks/useClickOutSide";
import LoginForm from "../../pages/Auth/LoginForm";
import { Link, Navigate, useLocation } from "react-router-dom";
import { removeUser } from "../../redux/slices/userSlice";

const HeaderTopRight = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.authenticUser);

  const { showInputHeaderMobile } = useSelector((state) => state.burger);
  const handleShowInput = () => {
    dispatch(handleShowInputHeader());
  };

  const handleCloseInputOutside = () => {
    dispatch(handleCloseInput());
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  console.log("🚀isModalOpen---->", isModalOpen);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(removeUser(null));
    setIsModalOpen(false);
  };

  const items = [
    {
      key: "1",
      label: <p onClick={handleLogout}>Đăng Xuất</p>,
    },
    {
      key: "2",
      label: (
        <Link to="">
          <p>Thông Tin Hồ Sơ</p>
        </Link>
      ),
    },
  ];

  return (
    <div className="header-top-right">
      {/* HEADER SEARCH */}
      <div className="header-top-search">
        <div className="header-search">
          <img
            src="../../../public/img/ic-header-search.svg"
            alt="cine start"
          />
        </div>
        <div>
          <div className="search">
            <Input
              className={`${
                showInputHeaderMobile ? "active" : ""
              } search-input `}
              placeholder="Tìm Phim, Rạp"
            />
            <OutsideAlerter handleShowInput={handleCloseInputOutside}>
              <button className="search-button" onClick={handleShowInput}>
                <img
                  src="../../../public/img/icon-search.svg"
                  alt="icon-search"
                />
              </button>
            </OutsideAlerter>
          </div>
        </div>
      </div>
      {/* HEADER AUTH */}
      <div className="header-top-auth">
        <div className="header-auth-wrap">
          {currentUser === null ? (
            <>
              <div className="auth-ava">
                <img src="../../../public/img/ic-header-auth.svg" alt="" />
              </div>
              <div className="auth-text">
                <Button onClick={showModal}>Đăng Nhập</Button>

                <Modal
                  footer={null}
                  title="ĐĂNG NHẬP"
                  open={isModalOpen}
                  onCancel={handleCancel}
                >
                  <LoginForm />
                </Modal>
              </div>
            </>
          ) : (
            <Dropdown
              menu={{
                items,
              }}
              className="auth-ava"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img src="../../../public/img/ic-header-auth.svg" alt="" />
                  <p className="authentic-user">{currentUser.taiKhoan}</p>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-mobile-wrap">
          <a href="" className="main-logo">
            <img src="../../../public/img/header-logo.webp" alt="cine start" />
          </a>

          <div className="mobile-hamburger"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopRight;

// <div className="auth-text">
// {currentUser === null ? (
//   <Button onClick={showModal}>Đăng Nhập</Button>
// ) : (
//   <p className="authentic-user">{currentUser.taiKhoan}</p>
// )}
// <Modal
//   footer={null}
//   title="ĐĂNG NHẬP"
//   open={isModalOpen}
//   onCancel={handleCancel}
// >
//   <LoginForm />
// </Modal>
// </div>
