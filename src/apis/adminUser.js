import { GROUP_CODE, PAGE_SIZE } from "../constants/general";
import fetcher from "./fetcher";

export const adminUser = {
  getListUser: async (payload) => {
    try {
      const params = {
        maNhom: GROUP_CODE,
        soTrang: payload.page,
        soPhanTuTrenTrang: payload.pageSize || PAGE_SIZE,
      };
      const response = await fetcher.get(
        `QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang`,
        {
          params,
        }
      );
      return response.data.content;
    } catch (error) {
      throw Error(error.response.data.content);
    }
  },
  addUser: async (payload) => {
    try {
      const response = await fetcher.post(
        "/QuanLyNguoiDung/ThemNguoiDung",
        payload
      );
      return response.data.content;
    } catch (error) {
      console.log("🚀error---->", error);
    }
  },
};
