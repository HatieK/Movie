import { GROUP_CODE, PAGE_SIZE } from "../constants/general";
import fetcher from "./fetcher";

export const movieApi = {
  getListMovies: async (payload) => {
    const params = {
      maNhom: GROUP_CODE,
      soTrang: payload.page,
      soPhanTuTrenTrang: payload.pageSize || PAGE_SIZE,
    };

    try {
      const response = await fetcher.get(
        "/QuanLyPhim/LayDanhSachPhimPhanTrang",
        {
          params,
        }
      );
      return response.data.content;
    } catch (error) {
      throw Error(error.response.data.content);
    }
  },
  addMovie: async (payload) => {
    try {
      const response = await fetcher.post(
        "/QuanLyPhim/ThemPhimUploadHinh",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data?.content;
    } catch (error) {
      throw Error(error.response.data.content);
    }
  },
  deleteMovie: async (idMovie) => {
    try {
      const response = await fetcher.delete(
        `/QuanLyPhim/XoaPhim?MaPhim=${Number(idMovie)}`
      );
      return response.data.content;
    } catch (error) {
      throw Error(error.response.data.content);
    }
  },
  editMovie: async (payload) => {
    try {
      const response = await fetcher.post(
        "/QuanLyPhim/CapNhatPhimUpload",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.content;
    } catch (error) {
      console.log("🚀error---->", error);
    }
  },
};
