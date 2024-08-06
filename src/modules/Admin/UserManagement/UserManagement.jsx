import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Breadcrumb,
  Button,
  message,
  Pagination,
  Popconfirm,
  Table,
  Tag,
} from "antd";
import React, { useState } from "react";
import { adminUser } from "../../../apis/adminUser";
import { PAGE_SIZE, USER_TYPES_MAPPING } from "../../../constants/general";
import AddOrEditModal from "./AddOrEditModal";
import { useOpenModal } from "../../../hooks/useOpenModal";

const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, openModal, closeModal } = useOpenModal();
  const [dataEdit, setDataEdit] = useState(undefined);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const queryClient = useQueryClient();
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["list-users", { currentPage, pageSize }],
    queryFn: () => adminUser.getListUser({ page: currentPage, pageSize }),
  });

  const { mutate: handleDeleteUser, isPending: isDeleting } = useMutation({
    mutationFn: (username) => {
      return adminUser.deleteUser(username);
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["list-users", { currentPage }],
        type: "active",
      });
    },
    onError: (error) => {
      console.log("error", error);
    },
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
              onClick={() => {
                setDataEdit(record);
                openModal();
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Delete user"
              description="Are you sure to delete this user?"
              onConfirm={() => handleDeleteUser(record.taiKhoan.toString())}
              onCancel={() => {}}
              placement="bottom"
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger disabled={isDeleting}>
                Delete
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  const dataSource = userData?.items || [];
  const total = userData?.totalCount || 0;

  const handleSubmit = (value) => {
    console.log("🚀value---->", value);
  };

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

        <Button
          size="large"
          type="primary"
          onClick={() => {
            openModal();
            setDataEdit(undefined);
          }}
        >
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
      <div className="pagination">
        <Pagination
          total={total}
          defaultCurrent={currentPage}
          onChange={(page, pSize) => {
            setCurrentPage(page);
          }}
          showSizeChanger={false}
        />
      </div>
      <AddOrEditModal
        dataEdit={dataEdit}
        isOpen={isOpen}
        onCloseModal={closeModal}
      />
    </>
  );
};

export default UserManagement;
