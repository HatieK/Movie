import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input, message, Modal } from "antd";
import { ERROR_MESSAGE, maxLength, minLength } from "../../constants/general";
import { useMutation } from "@tanstack/react-query";
import { authenticationApi } from "../../apis/authen.login";
import { setLocalStorage } from "../../utils/saveAccount";
import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/slices/userSlice";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { changePathName } from "../../redux/slices/pathLogin";
import { HOME_PATH } from "../../constants/path";

const schema = yup.object({
  name: yup.string().trim().required(ERROR_MESSAGE.name.required),
  // .min(minLength, ERROR_MESSAGE.name.minLength)
  // .max(maxLength, ERROR_MESSAGE.name.maxLength),
  password: yup.string().trim().notRequired(),
  // .required(ERROR_MESSAGE.password.required)
  // .matches(ERROR_MESSAGE.password.regex, ERROR_MESSAGE.password.errorRegex),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const { mutate: handleLogin, isPending } = useMutation({
    mutationFn: (payload) => authenticationApi.login(payload),
    onSuccess: (response) => {
      setLocalStorage("user", response);
      dispatch(setUsers(response));
      message.success("Đăng Nhập Thành Công");
      navigate(HOME_PATH);
    },
    onError: (error) => {
      console.log("🚀error---->", error);
    },
  });

  const onSubmit = (value) => {
    const payload = {
      taiKhoan: value.name,
      matKhau: value.password,
    };
    handleLogin(payload);
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
        <Button htmlType="submit" className="btn btn-register">
          ĐĂNG NHẬP
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
