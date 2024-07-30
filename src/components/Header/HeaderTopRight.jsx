import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
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
import { PROFILE_PAGE } from "../../constants/path";

const HeaderTopRight = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.authenticUser);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

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
        <Link to={PROFILE_PAGE}>
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
                  <p className="modal-info">
                    BẠN CHƯA CÓ TÀI KHOẢN: <span> ĐĂNG KÝ NGAY</span>
                  </p>
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
