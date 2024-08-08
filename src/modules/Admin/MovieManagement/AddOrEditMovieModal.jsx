import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ERROR_MESSAGE,
  maxLength,
  minLength,
} from "../../../constants/general";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Typography,
  Upload,
} from "antd";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

const schema = yup.object({
  tenPhim: yup
    .string()
    .trim()
    .required(ERROR_MESSAGE.name.required)
    .min(minLength, ERROR_MESSAGE.name.minLength),
  trailer: yup
    .string()
    .trim()
    .required("Vui lòng nhập đường link trailer phim"),
  moTa: yup
    .string()
    .trim()
    .required("Vui lòng nhập mô tả phim")
    .min(20, "Mô tả tối thiểu 20 ký tự"),
  ngayKhoiChieu: yup
    .string()
    .trim()
    .required("Vui lòng nhập ngày khỏi chiếu phim"),
});

const AddOrEditMovieModal = ({
  isOpen,
  onCloseModal,
  isPending,
  dataEdit,
  onSubmit,
}) => {
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      trangThai: false,
      hot: false,
      danhGia: "",
      ngayKhoiChieu: "",
      hinhAnh: undefined,
    },
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });
  const watchHinhAnh = watch("hinhAnh");

  const statusMovie = watch("trangThai");

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  useEffect(() => {
    if (dataEdit) {
      setValue("maPhim", dataEdit.maPhim.toString());
      setValue("tenPhim", dataEdit.tenPhim);
      setValue("trailer", dataEdit.tenPhim);
      setValue("moTa", dataEdit.moTa);
      setValue("trangThai", dataEdit.dangChieu);
      setValue("hot", dataEdit.hot);
      setValue("danhGia", dataEdit.danhGia.toString());
      setValue(
        "ngayKhoiChieu",
        dataEdit.ngayKhoiChieu
          ? dayjs(new Date(dataEdit.ngayKhoiChieu)).format("YYYY-MM-DD")
          : null
      );
    }
  }, [dataEdit, setValue]);

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen]);

  return (
    <Modal
      open={isOpen}
      title={
        <Typography className="text-2xl font-medium">Add movie</Typography>
      }
      centered
      onCancel={() => onCloseModal()}
      footer={false}
      width={700}
    >
      <Form className=" my-4 " onFinish={handleSubmit(onSubmit)}>
        <Row gutter={[48, 24]}>
          <Col span={24}>
            <label className="text-sm">
              <span className="text-red-600">*</span> Movie name
            </label>
            <Controller
              name="tenPhim"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  placeholder="Movie name"
                  status={errors.tenPhim ? "error" : ""}
                />
              )}
            />
            {errors?.tenPhim && (
              <p className="text-danger">{errors.tenPhim.message}</p>
            )}
          </Col>
          <Col span={24}>
            <label className="text-sm">
              <span className="text-red-600">*</span> Trailer
            </label>
            <Controller
              name="trailer"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  placeholder="Trailer"
                  className="mt-1"
                  status={errors.trailer ? "error" : ""}
                />
              )}
            />
            {errors?.trailer && (
              <p className="text-danger">{errors.trailer.message}</p>
            )}
          </Col>
          <Col span={24}>
            <label className="text-sm">
              <span className="text-red-600">*</span> Description
            </label>
            <Controller
              name="moTa"
              control={control}
              render={({ field }) => (
                <Input.TextArea
                  {...field}
                  rows={4}
                  size="large"
                  placeholder="Description"
                  className="mt-1"
                  status={errors.moTa ? "error" : ""}
                />
              )}
            />
            {errors?.moTa && (
              <p className="text-danger">{errors.moTa.message}</p>
            )}
          </Col>
          <Col span={24}>
            <label className="text-sm block">Status</label>
            <Controller
              name="trangThai"
              control={control}
              render={({ field }) => (
                <Radio.Group {...field} className="mt-1" defaultValue={false}>
                  <Radio value={true}>Showing</Radio>
                  <Radio value={false}>Coming soon</Radio>
                </Radio.Group>
              )}
            />
          </Col>
          <Col span={24}>
            <Controller
              control={control}
              name="hot"
              render={({ field }) => (
                <Checkbox checked={field.value} {...field}>
                  Film hot
                </Checkbox>
              )}
            />
          </Col>
          <Col span={12}>
            <label className="text-sm">
              <span className="text-red-600">*</span> Rate
            </label>
            <Controller
              control={control}
              name="danhGia"
              render={({ field }) => (
                <Input
                  {...field}
                  size="large"
                  placeholder="Rate"
                  type="number"
                  className="mt-1"
                  max={10}
                />
              )}
            />
          </Col>
          <Col span={12}>
            <label className="text-sm">
              <span className="text-red-600">*</span> Release date
            </label>
            <Controller
              name="ngayKhoiChieu"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  size="large"
                  className="mt-1 w-full"
                  placeholder="DD/MM/YYYY"
                  format={"YYYY-MM-DD"}
                  status={errors.ngayKhoiChieu ? "error" : ""}
                  disabledDate={!statusMovie ? disabledDate : undefined}
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) =>
                    field.onChange(date ? date.format("YYYY-MM-DD") : null)
                  }
                />
              )}
            />
            {errors?.ngayKhoiChieu && (
              <p className="text-danger">{errors.ngayKhoiChieu.message}</p>
            )}
          </Col>
          <Col span={24}>
            <Controller
              control={control}
              name="hinhAnh"
              render={({ field: { onChange, ...field } }) => {
                return (
                  <Upload
                    {...field}
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader relative w-fit"
                    showUploadList={false}
                    beforeUpload={() => {
                      return false;
                    }}
                    onChange={(info) => {
                      onChange(info.file);
                    }}
                  >
                    <button
                      style={{ border: 0, background: "none" }}
                      type="button"
                    >
                      {watchHinhAnh || dataEdit ? (
                        <div>
                          <img
                            style={{
                              width: 100,
                              height: 100,
                              objectFit: "cover",
                            }}
                            src={
                              dataEdit?.hinhAnh ||
                              URL.createObjectURL(new Blob([watchHinhAnh]))
                            }
                          />

                          <div
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={(event) => {
                              event.stopPropagation();
                              setValue("hinhAnh", undefined);
                            }}
                          >
                            <DeleteOutlined />
                          </div>
                        </div>
                      ) : (
                        <>
                          <PlusOutlined />
                          <div style={{ marginTop: 8 }}>Upload</div>
                        </>
                      )}
                    </button>
                  </Upload>
                );
              }}
            />
          </Col>
          <Col span={24} className="flex justify-end">
            <Button size="large" type="default">
              Cancel
            </Button>
            <Button
              loading={isPending}
              disabled={isPending}
              htmlType="submit"
              size="large"
              type="primary"
              className="ml-3"
            >
              {dataEdit ? "Edit movie" : "Add movie"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddOrEditMovieModal;
