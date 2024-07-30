import React from "react";
import { getLocalStorage } from "../../utils/saveAccount";
import { Table } from "antd";

const HistoricalBooking = () => {
  const storedData = getLocalStorage("seatList");

  if (!storedData) {
    return <p>Không Có Dữ Liệu</p>;
  }

  const { data } = storedData;
  const renderData = data.filter((item) => item.daDat === true);

  const columns = [
    {
      title: "Vị Trí Ghế",
      key: "position-seat",
      dataIndex: "tenGhe",
    },
    {
      title: "Gía Vé",
      key: "price-ticket",
      dataIndex: "giaVe",
    },
    {
      title: "Loại Ghế",
      key: "type-ticket",
      dataIndex: "loaiGhe",
    },
  ];

  return (
    <div className=" container">
      <Table columns={columns} dataSource={renderData} pagination={false} />
    </div>
  );
};

export default HistoricalBooking;
