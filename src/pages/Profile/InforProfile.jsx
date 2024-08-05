import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input, message } from "antd";
import { ERROR_MESSAGE, maxLength, minLength } from "../../constants/general";
import { useMutation, useQuery } from "@tanstack/react-query";
import { profileUser } from "../../apis/profileUserApi";
import { registerApi } from "../../apis/authen.user";

const schema = yup.object({
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

    .oneOf(
      [yup.ref("password"), null],
      ERROR_MESSAGE.confirmPassword.errorPassword
    ),
});

const InforProfile = () => {
  const { currentUser } = useSelector((state) => state.authenticUser);
  console.log("🚀currentUser---->", currentUser);

  const { data: dataInfoUser, isLoading: dataInfoUserLoading } = useQuery({
    queryKey: ["infoUser"],
    queryFn: () =>
      profileUser.getInfoUser(currentUser.maNhom, currentUser.hoTen),
  });

  console.log("🚀dataInfoUser---->", dataInfoUser);

  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: dataInfoUser?.taiKhoan || "",
      email: dataInfoUser?.email || "",
      phone: dataInfoUser?.soDT || "",
      password: dataInfoUser?.password || "",
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
      message.success("Đăng Ký Thành Công");
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
      maNhom: "GP00",
      hoTen: name,
    };
    mutation.mutate(payload);
  };

  if (!dataInfoUserLoading) {
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
                  disabled={true}
                  {...register("name")}
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
                  {...register("email")}
                />
              );
            }}
            control={control}
          />

          {errors?.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
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

          {errors?.phone && (
            <p className="text-danger">{errors.phone.message}</p>
          )}
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

        <Button htmlType="submit" className="btn btn-register">
          Đăng Ký
        </Button>
      </Form>
    );
  }
};

export default InforProfile;
