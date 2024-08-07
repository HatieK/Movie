import { Tabs } from "antd";
import React from "react";
import InforProfile from "./InforProfile";
import HistoricalBooking from "./HistoricalBooking";

const Profile = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "THÔNG TIN TÀI KHOẢN",
      children: <InforProfile />,
    },
    {
      key: "2",
      label: "LỊCH SỬ ĐẶT VÉ",
      children: <HistoricalBooking />,
    },
  ];
  return (
    <div style={{ backgroundColor: "gray" }} className="main container">
      <div className="profilePage">
        <h2 className="heading">THÔNG TIN TÀI KHOẢN</h2>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Profile;
