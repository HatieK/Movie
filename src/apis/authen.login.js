import fetcher from "./fetcher";

export const authenticationApi = {
  login: async (data) => {
    try {
      const response = await fetcher.post("/QuanLyNguoiDung/DangNhap", data);
      return response.data.content;
    } catch (error) {
      throw error.response.data.content;
    }
  },
};
