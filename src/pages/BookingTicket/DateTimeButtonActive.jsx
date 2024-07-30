import moment from "moment";
import React from "react";

const DateTimeButtonActive = ({ item, onChange, isActive }) => {
  return (
    <div
      className={`time ${isActive ? "active" : ""}`}
      onClick={() => {
        onChange(item);
      }}
    >
      <p className="time-month">{moment(item).format("DD/MM")}</p>
    </div>
  );
};

export default DateTimeButtonActive;
