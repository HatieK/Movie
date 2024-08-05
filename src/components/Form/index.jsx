import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input, message } from "antd";
import { ERROR_MESSAGE, maxLength, minLength } from "../../constants/general";
import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../apis/authen.user";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../constants/path";

const schema = yup.object({
  name: yup
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
  phone: yup
    .string()
    .trim()
    .required(ERROR_MESSAGE.phone.required)
    .matches(ERROR_MESSAGE.phone.regex, ERROR_MESSAGE.phone.errorRegex),
  password: yup
    .string()
    .trim()
    .notRequired()
    .required(ERROR_MESSAGE.password.required)
    .matches(ERROR_MESSAGE.password.regex, ERROR_MESSAGE.password.errorRegex),
  confirmPassword: yup
    .string()
    .trim()
    .notRequired()
    .required(ERROR_MESSAGE.confirmPassword.required)

    .oneOf([yup.ref("password"), null], "Xác Nhận Mật Khẩu Sai"),
});

const FormPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    React.useState(false);

  const mutation = useMutation({
    mutationFn: (payload) => {
      return registerApi(payload);
    },
    onSuccess: (response) => {
      message.success("Đăng Ký Tài Khoản Thành Công");
      navigate(HOME_PATH);
    },
    onError: (error) => {
      message.error("Đăng Kỳ Thất Bại");
    },
  });

  const onSubmit = (formValue) => {
    const { name, email, phone, password, confirmPassword } = formValue;
    const payload = {
      taiKhoan: name,
      matKhau: password,
      email: email,
      soDt: phone,
      maNhom: "GP03",
      hoTen: name,
    };
    mutation.mutate(payload);
  };

  return (
    <Form className="form" onFinish={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="form-label " htmlFor="name">
          Name
        </label>
        <Controller
          name="name"
          render={({ field }) => {
            return (
              <Input
                {...field}
                size="large"
                type="text"
                status={errors.name ? "error" : ""}
              />
            );
          }}
          control={control}
        />
        {errors?.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label className="form-label " htmlFor="email">
          Email
        </label>
        <Controller
          name="email"
          render={({ field }) => {
            return (
              <Input
                {...field}
                size="large"
                className="form-input"
                id="email"
                type="text"
                status={errors.email ? "error" : ""}
              />
            );
          }}
          control={control}
        />

        {errors?.email && <p className="text-danger">{errors.email.message}</p>}
      </div>
      <div className="form-group">
        <label className="form-label " htmlFor="phone">
          Phone
        </label>
        <Controller
          name="phone"
          render={({ field }) => {
            return (
              <Input
                {...field}
                size="large"
                className="form-input"
                id="phone"
                type="text"
                status={errors.phone ? "error" : ""}
              />
            );
          }}
          control={control}
        />

        {errors?.phone && <p className="text-danger">{errors.phone.message}</p>}
      </div>
      <div className="form-group">
        <label className="form-label " htmlFor="password">
          Password
        </label>
        <Controller
          name="password"
          render={({ field }) => {
            return (
              <Input.Password
                {...field}
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
                size="large"
                className="form-input"
                id="password"
                type="password"
                status={errors.password ? "error" : ""}
              />
            );
          }}
          control={control}
        />

        {errors?.password && (
          <p className="text-danger">{errors?.password.message}</p>
        )}
      </div>
      <div className="form-group">
        <label className="form-label " htmlFor="confirmPassword">
          Confirm Password
        </label>

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => {
            return (
              <Input.Password
                {...field}
                visibilityToggle={{
                  visible: confirmPasswordVisible,
                  onVisibleChange: setConfirmPasswordVisible,
                }}
                size="large"
                className="form-input"
                id="confirmPassword"
                type="password"
                status={errors.confirmPassword ? "error" : ""}
              />
            );
          }}
        />

        {errors?.confirmPassword && (
          <p className="text-danger">{errors?.confirmPassword.message}</p>
        )}
      </div>
      <Button htmlType="submit" className="btn btn-register">
        Đăng Ký
      </Button>
    </Form>
  );
};

export default FormPage;
