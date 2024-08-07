import fetcher from "./fetcher";

export const updateAccountUser = {
  editUser: async (payload) => {
    try {
      const response = await fetcher.put(
        "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        payload
      );
      if (response.status === 200) {
        return response.data.content;
      } else {
        console.log("🚀error---->", error);
      }
    } catch (error) {
      console.log("🚀error---->", error);
    }
  },
};
