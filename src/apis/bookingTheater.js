import fetcher from "./fetcher";

export const bookingTheaterInfo = {
  getTheaterInfo: async (scheduleId) => {
    try {
      const response = await fetcher.get(
        `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${scheduleId}`
      );
      return response.data.content;
    } catch (error) {
      console.log("🚀error---->", error);
    }
  },
  // lấy tên các hệ thống rạp
  getTheaterList: async () => {
    try {
      const response = await fetcher.get(`/QuanLyRap/LayThongTinHeThongRap`);
      return response.data.content;
    } catch (error) {
      console.log("🚀error---->", error);
    }
  },
};
