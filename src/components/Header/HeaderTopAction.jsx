import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../constants/path";

const HeaderTopAction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${HOME_PATH}#navigate-wrap`);
  };

  return (
    <div className="header-top-actions">
      <Button link="#" onClick={handleClick} variant="btn--yellow">
        <img src="../public/img/ic-ticket.svg" alt="cine-start" />
        <span>Đặt vé ngay</span>
      </Button>
    </div>
  );
};

export default HeaderTopAction;
