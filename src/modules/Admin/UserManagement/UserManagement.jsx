import { useQuery } from "@tanstack/react-query";
import { Breadcrumb, Button, Pagination, Table, Tag } from "antd";
import React from "react";
import { adminUser } from "../../../apis/adminUser";
import { USER_TYPES_MAPPING } from "../../../constants/general";

const UserManagement = () => {
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["list-users", {}],
    queryFn: () => adminUser.getListUser({ page: currentPage, pageSize }),
  });

  const columns = [
    {
      title: "Username",
      key: "user-name",
      dataIndex: "taiKhoan",
    },
    {
      title: "Full name",
      key: "full-name",
      dataIndex: "hoTen",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Phone number",
      key: "phone-number",
      dataIndex: "soDt",
    },
    {
      title: "Type User",
      key: "type-user",
      dataIndex: "maLoaiNguoiDung",
      render: (_, { maLoaiNguoiDung }) => (
        <Tag>{USER_TYPES_MAPPING[maLoaiNguoiDung] || ""}</Tag>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <div className="flex">
            <Button
              type="primary"
              className="mr-2"
              onClick={() => alert(record.taiKhoan)}
            >
              Edit
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => alert(record.taiKhoan)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const dataSource = userData?.items || [];
  const total = userData?.totalCount || 0;

  return (
    <>
      <div className="userManagement">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Dashboard",
            },
            {
              title: "User Management",
              href: "",
            },
          ]}
        />

        <Button size="large" type="primary">
          Add User
        </Button>
      </div>
      <h3 className="heading">List User</h3>
      <Table
        rowKey="taiKhoan"
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        loading={isLoading}
      />
      <div className="flex justify-end mt-10">
        <Pagination
          total={total}
          // defaultCurrent={currentPage}
          onChange={(page, pSize) => {
            setCurrentPage(page);

            if (pSize !== pageSize) {
              setPageSize(pSize);
            }
          }}
        />
      </div>
    </>
  );
};

export default UserManagement;
