import React, { useState } from "react";
import {
  ClockCircleOutlined,
  DeleteOutlined,
  PlusOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { useOpenModal } from "../../../hooks/useOpenModal";
import {
  Breadcrumb,
  Button,
  message,
  Pagination,
  Popconfirm,
  Rate,
  Table,
  Tag,
  Typography,
} from "antd";
import { useListMovies } from "../../../hooks/useListMovies";
import { format } from "date-fns";
import { movieApi } from "../../../apis/adminMovie";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import AddOrEditMovieModal from "./AddOrEditMovieModal";

const MovieManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataEdit, setDataEdit] = useState(undefined);
  const { isOpen, openModal, closeModal } = useOpenModal();
  const { data, isLoading, error } = useListMovies(currentPage);

  const queryClient = useQueryClient();

  // ADD MOVIE
  const { mutate: handleAddMovieApi, isPending: isCreating } = useMutation({
    mutationFn: (payload) => movieApi.addMovie(payload),
    onSuccess: (data) => {
      queryClient.refetchQueries({
        queryKey: ["list-movies", { currentPage }],
        type: "active",
      });
      message.success("Thêm Phim Thành Công");
      closeModal();
    },
    onError: (error) => {
      message.error("Thêm Phim Không Thành Công");
    },
  });

  //DELETE MOVIE
  const { mutate: handleDeleteMovieApi, isPending: isDeleting } = useMutation({
    mutationFn: (idMovie) => {
      return movieApi.deleteMovie(idMovie);
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["list-movies", { currentPage }],
        type: "active",
      });
      message.success("Xóa Phim Thành Công");
      closeModal();
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  //EDIT MOVIE
  const { mutate: handleEditMovieApi, isPending: isEditing } = useMutation({
    mutationFn: (payload) => movieApi.editMovie(payload),
    onSuccess: (data) => {
      queryClient.refetchQueries({
        queryKey: ["list-movies", { currentPage }],
        type: "active",
      });
      message.success("Edit Thành Công");
      closeModal();
    },
    onError: (error) => {
      message.error("Edit Không Thành Công");
    },
  });

  const columns = [
    {
      title: "Movie name",
      key: "movie-name",
      dataIndex: "tenPhim",
      width: 200,
    },
    {
      title: "Image",
      key: "image",
      render: (record) => {
        return (
          <img
            src={record.hinhAnh}
            alt={record.biDanh}
            style={{ width: "100px", height: "120px", objectFit: "cover" }}
          />
        );
      },
    },
    {
      title: "Description",
      key: "description",
      width: 260,
      render: (record) => {
        return (
          <Typography.Paragraph
            ellipsis={{
              rows: 2,
            }}
            className="w-[200px]"
          >
            {record.moTa}
          </Typography.Paragraph>
        );
      },
    },
    {
      title: "Show time",
      key: "show-time",
      dataIndex: "ngayKhoiChieu",
      width: 200,
      render: (date) => {
        const dateObject = new Date(date);
        if (!isNaN(dateObject)) {
          const formattedDate = format(dateObject, "yyyy/MM/dd hh:mm a");
          return <Typography>{formattedDate}</Typography>;
        } else {
          console.error("Ngày giờ không hợp lệ");
        }
      },
    },
    {
      title: "Rate",
      key: "rate",
      dataIndex: "danhGia",
      render: (rate) => {
        return <Rate disabled allowHalf value={(rate || 0) / 2} count={5} />;
      },
    },
    {
      title: "Hot",
      key: "hot",
      dataIndex: "hot",
      render: (isHot) => {
        return isHot ? (
          <Tag color="red">Hot 🔥 </Tag>
        ) : (
          <Tag color="green">Normal</Tag>
        );
      },
    },
    {
      title: "Showing",
      key: "dangChieu",
      dataIndex: "dangChieu",
      render: (isShowing) => {
        return isShowing ? (
          <Tag icon={<SyncOutlined spin />} color="processing">
            Showing
          </Tag>
        ) : (
          <Tag>N/A</Tag>
        );
      },
    },
    {
      title: "Coming soon",
      key: "sapChieu",
      dataIndex: "sapChieu",
      render: (isComingSoon) => {
        return isComingSoon ? (
          <Tag color="success" icon={<ClockCircleOutlined />}>
            Coming soon
          </Tag>
        ) : (
          <Tag>N/A</Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      width: 200,
      render: (record) => {
        return (
          <div className="flex">
            <Button
              type="primary"
              className="mr-2"
              onClick={() => {
                setDataEdit(record);
                openModal();
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Delete the movie"
              description="Are you sure to delete this movie?"
              onConfirm={() => handleDeleteMovieApi(record.maPhim.toString())}
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

  const dataSource = data?.items || [];
  const total = data?.totalCount || 0;

  const handleSubmit = (formValues) => {
    const formData = new FormData();
    formData.append("tenPhim", formValues.tenPhim);
    formData.append("trailer", formValues.trailer);
    formData.append("danhGia", formValues.danhGia);
    formData.append("moTa", formValues.moTa);
    formData.append("hinhAnh", formValues.hinhAnh);
    formData.append("hot", formValues.hot.toString());
    formData.append("dangChieu", formValues.trangThai ? "true" : "false");
    formData.append("sapChieu", formValues.trangThai ? "false" : "true");
    formData.append("ngayKhoiChieu", formValues.ngayKhoiChieu);
    formData.append("maNhom", "GP03");

    if (dataEdit) {
      formData.append("maPhim", dataEdit.maPhim.toString());
      handleEditMovieApi(formData);
    } else {
      handleAddMovieApi(formData);
    }
    // handleAddMovieApi(formData);
    // dataEdit ? handleEditMovieApi(formData) : handleAddMovieApi(formData);
  };

  if (!isLoading && error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className="movieManagement">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Dashboard",
            },
            {
              title: "Movie Management",
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
          Add Movie
        </Button>
      </div>
      <h3 className="heading">List movies</h3>
      <Table
        rowKey="maPhim"
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        loading={isLoading}
      />
      <div className="pagination">
        <Pagination
          total={total}
          defaultCurrent={1}
          onChange={(page, pSize) => {
            setCurrentPage(page);
          }}
          showSizeChanger={false}
        />
      </div>
      <AddOrEditMovieModal
        dataEdit={dataEdit}
        isOpen={isOpen}
        isPending={isCreating || isEditing}
        onCloseModal={closeModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default MovieManagement;
