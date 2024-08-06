import { Button, Col, Form, Input, message, Modal, Row, Select } from "antd";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  ERROR_MESSAGE,
  maxLength,
  minLength,
} from "../../../constants/general";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminUser } from "../../../apis/adminUser";

const schema = yup.object({
  taiKhoan: yup
    .string()
    .trim()
    .required(ERROR_MESSAGE.name.required)
    .min(minLength, ERROR_MESSAGE.name.minLength)
    .max(maxLength, ERROR_MESSAGE.name.maxLength),
  email: yup
    .string()
    .trim()
    .required(ERROR_MESSAGE.email.required)
    .matches(ERROR_MESSAGE.email.regex, ERROR_MESSAGE.email.errorRegex),
  soDt: yup
    .string()
    .trim()
    .required(ERROR_MESSAGE.phone.required)
    .matches(ERROR_MESSAGE.phone.regex, ERROR_MESSAGE.phone.errorRegex),
  matKhau: yup
    .string()
    .trim()
    .notRequired()
    .required(ERROR_MESSAGE.password.required)
    .matches(ERROR_MESSAGE.password.regex, ERROR_MESSAGE.password.errorRegex),
  maNhom: yup.string().required("Vui Lòng Chọn Mã Nhóm"),
  maLoaiNguoiDung: yup.string().required("Vui Lòng Chọn Mã Người Dùng"),
});

const AddOrEditModal = ({ isOpen, onCloseModal, dataEdit }) => {
  const queryClient = useQueryClient();

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const {
    control,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  useEffect(() => {
    if (dataEdit) {
      setValue("taiKhoan", dataEdit.taiKhoan);
      setValue("email", dataEdit.email);
      setValue("soDt", dataEdit.soDt);
      setValue("matKhau", dataEdit.matKhau);
      setValue("maNhom", "GP03");
      setValue("maLoaiNguoiDung", dataEdit.maLoaiNguoiDung);
    }
  }, [dataEdit]);

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen]);

  const mutation = useMutation({
    mutationFn: (payload) => adminUser.addUser(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries();
      message.success("Thêm User Thành Công");
    },
  });

  const mutationEdit = useMutation({
    mutationFn: (payload) => adminUser.editUser(payload),
    onSuccess: (response) => {
      queryClient.invalidateQueries();
      message.success("Edit thành công");
    },
  });

  const onSubmit = (formValues) => {
    if (dataEdit) {
      mutationEdit.mutate(formValues);
      onCloseModal();
    } else {
      mutation.mutate(formValues);
      onCloseModal();
    }
  };
  return (
    <div>
      <Modal footer={false} open={isOpen} onCancel={onCloseModal}>
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Row gutter={[48, 16]}>
            <Col span={24}>
              <label htmlFor="">Tài Khoản</label>
              <Controller
                name="taiKhoan"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Vui Lòng Nhập Tài Khoản"
                    type="text"
                    status={errors.taiKhoan ? "error" : ""}
                    disabled={dataEdit ? true : false}
                  />
                )}
              />
              {errors?.taiKhoan && (
                <p className="text-danger">{errors.taiKhoan.message}</p>
              )}
            </Col>
            <Col span={24}>
              <label htmlFor="">Mật Khẩu</label>
              <Controller
                name="matKhau"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                    placeholder="Vui Lòng Nhập Tài Khoản"
                    type="password"
                    status={errors.matKhau ? "error" : ""}
                  />
                )}
              />
              {errors?.matKhau && (
                <p className="text-danger">{errors.matKhau.message}</p>
              )}
            </Col>
            <Col span={24}>
              <label htmlFor="">Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Vui Lòng Nhập Tài Khoản"
                    status={errors.email ? "error" : ""}
                  />
                )}
              />
              {errors?.email && <p className="">{errors.email.message}</p>}
            </Col>
            <Col span={24}>
              <label htmlFor="">Số Điện Thoại</label>
              <Controller
                name="soDt"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Vui Lòng Nhập Tài Khoản"
                    status={errors.soDt ? "error" : ""}
                  />
                )}
              />
              {errors?.soDt && <p className="">{errors.soDt.message}</p>}
            </Col>
            <Col span={24}>
              <label htmlFor="">Họ Tên</label>
              <Controller
                name="hoTen"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Vui Lòng Họ Và Tên" />
                )}
              />
            </Col>
            <Col span={24}>
              <label htmlFor="">Mã Nhóm</label>
              <Controller
                name="maNhom"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      status={errors.maNhom ? "error" : ""}
                      showSearch
                      style={{
                        width: 200,
                      }}
                      placeholder="Search to Select"
                      optionFilterProp="label"
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "GP00",
                          label: "GP00",
                        },
                        {
                          value: "GP01",
                          label: "GP01",
                        },
                        {
                          value: "GP02",
                          label: "GP02",
                        },
                        {
                          value: "GP03",
                          label: "GP03",
                        },
                        {
                          value: "GP04",
                          label: "GP04",
                        },
                      ]}
                    />
                  );
                }}
              />
              {errors?.maNhom && <p className="">{errors.maNhom.message}</p>}
            </Col>
            <Col span={24}>
              <label htmlFor="">Mã Loại Người Dùng</label>
              <Controller
                name="maLoaiNguoiDung"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      status={errors.maLoaiNguoiDung ? "error" : ""}
                      showSearch
                      style={{
                        width: 200,
                      }}
                      placeholder="Search to Select"
                      optionFilterProp="label"
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "QuanTri",
                          label: "Quản Trị",
                        },
                        {
                          value: "KhachHang",
                          label: "Khách Hàng",
                        },
                      ]}
                    />
                  );
                }}
              />
              {errors?.maLoaiNguoiDung && (
                <p className="">{errors.maLoaiNguoiDung.message}</p>
              )}
            </Col>
            <Col span={24}>
              <Button onClick={() => onCloseModal()}>Cancel</Button>
              <Button htmlType="submit">
                {dataEdit ? "Edit User" : "Add User"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default AddOrEditModal;
