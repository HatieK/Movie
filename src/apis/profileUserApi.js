import fetcher from "./fetcher";

export const profileUser = {
  getInfoUser: async (maNhom, userName) => {
    try {
      const response = await fetcher.get(
        `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}&tuKhoa=${userName}`
      );
      return response.data.content;
    } catch (error) {
      throw Error(error.response.data.content);
    }
  },
};
