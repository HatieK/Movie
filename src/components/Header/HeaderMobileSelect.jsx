import { TreeSelect } from "antd";
import React, { useState } from "react";

const HeaderMobileSelect = () => {
  const treeData = [
    {
      title: "Cinema Quang Trung",
      value: "0-0",
    },
    {
      title: "Cinema Thảo Điền",
      value: "0-1",
    },
    {
      title: "Cinema Masteri",
      value: "0-2",
    },
  ];

  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <>
      <TreeSelect
        style={{}}
        value={value}
        // dropdownStyle={{
        //   maxHeight: 400,
        //   overflow: "auto",
        // }}
        className="select-title"
        treeData={treeData}
        placeholder="Chọn Rạp"
        treeDefaultExpandAll
        onChange={onChange}
      />
    </>
  );
};

export default HeaderMobileSelect;
