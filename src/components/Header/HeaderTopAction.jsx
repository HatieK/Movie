import React from "react";
import Button from "../Button";

const HeaderTopAction = () => {
  return (
    <div className="header-top-actions">
      <Button link="/ticket-booking" variant="btn--yellow">
        <img src="../public/img/ic-ticket.svg" alt="cine-start" />
        <span>Đặt vé ngay</span>
      </Button>
      <Button variant="btn--primary">
        <img src="../public/img/ic-cor.svg" alt="cine-start" />
        <span>Đặt bắp nước</span>
      </Button>
    </div>
  );
};

export default HeaderTopAction;
