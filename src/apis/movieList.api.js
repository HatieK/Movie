import { GROUP_CODE } from "../constants/general";
import fetcher from "./fetcher";

export const movieListApi = {
  getListMovie: async () => {
    try {
      const response = await fetcher.get(
        `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_CODE}`
      );
      return response.data.content;
    } catch (error) {
      console.log("🚀error---->", error);
    }
  },
  getScheduleMovieList: async (idMovie) => {
    try {
      const response = await fetcher.get(
        `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`
      );
      return response.data.content;
    } catch (error) {
      console.log("🚀error---->", error);
    }
  },
  getDetailMovie: async (idMovie) => {
    try {
      const response = await fetcher.get(
        `QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`
      );
      return response.data.content;
    } catch (error) {
      console.log("🚀error---->", error);
    }
  },
};
