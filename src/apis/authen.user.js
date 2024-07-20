import fetcher from "./fetcher";

export const registerApi = async (payload) => {
  //payload bao gồm các giá trị trong swagger
  try {
    const response = await fetcher.post("/QuanLyNguoiDung/DangKy", payload);
    return response.data.content;
  } catch (error) {
    throw Error(error);
  }
};
