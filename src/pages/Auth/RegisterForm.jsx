import React from "react";
import FormPage from "../../components/Form";

const RegisterForm = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="register-modal">
          <div className="register-modal-content">
            <img
              src="../../../public/img/header-logo.webp"
              className="register-logo"
              alt=""
            />
            <h2 className="register-title">
              Đăng Ký Để Được Cập Nhật Các Chương Trình Khuyến Mãi Mới Nhất
            </h2>
            <p className="register-title">
              Bạn Đã Có Tài Khoản:
              <a href="">
                <span className="register-login">Đăng Nhập</span>
              </a>
            </p>
            <FormPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
