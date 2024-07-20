// import { Select } from "antd";
// import React from "react";

// const NavigateWrap = ({
//   nameTheaterSystemList,
//   theaterSystemList,
//   setTheaterSystemList,
//   filterSelectList,
//   setFilterSelectList,
// }) => {
//   const handleChangeTheater = (e, name) => {
//     setFilterSelectList({
//       ...filterSelectList,
//       [name]: value,
//     });
//     console.log("🚀filter---->", filterSelectList);
//   };

//   const handleChangeMovieList = (value) => {
//     setFilterSelectList({ ...filterSelectList, movie: value });
//   };

//   const handleChangeShowTimeList = (value) => {
//     setFilterSelectList({ ...filterSelectList, interest: value });
//   };

//   return (
//     <div className="navigate-wrap">
//       <div className="heading">
//         <h1>ĐẶT VÉ NHANH</h1>
//       </div>
//       <div className="navigate-filter">
//         <div className="navigate-filter-item">
//           <Select
//             showSearch
//             style={{
//               width: 200,
//             }}
//             // searchValue="theater"
//             optionFilterProp="label"
//             filterSort={(optionA, optionB) =>
//               (optionA?.label ?? "")
//                 .toLowerCase()
//                 .localeCompare((optionB?.label ?? "").toLowerCase())
//             }
//             options={nameTheaterSystemList}
//             onChange={(e) => handleChangeTheater("theater")}
//             value={filterSelectList.theater}
//           />
//         </div>
//         <div className="navigate-filter-item">
//           <Select
//             showSearch
//             style={{
//               width: 200,
//             }}
//             optionFilterProp="label"
//             filterSort={(optionA, optionB) =>
//               (optionA?.label ?? "")
//                 .toLowerCase()
//                 .localeCompare((optionB?.label ?? "").toLowerCase())
//             }
//             options={nameTheaterSystemList}
//             value={filterSelectList.movie}
//             disabled={filterSelectList.theater === "CHỌN RẠP" ? true : false}
//             onChange={() => handleChangeMovieList("movie")}
//           />
//         </div>
//         <div className="navigate-filter-item">
//           <Select
//             showSearch
//             style={{
//               width: 200,
//             }}
//             placeholder="CHỌN SUẤT"
//             optionFilterProp="label"
//             filterSort={(optionA, optionB) =>
//               (optionA?.label ?? "")
//                 .toLowerCase()
//                 .localeCompare((optionB?.label ?? "").toLowerCase())
//             }
//             options={nameTheaterSystemList}
//             onChange={() => handleChangeShowTimeList("interest")}
//             value={filterSelectList.interest}
//             disabled={filterSelectList.movie === "CHỌN PHIM" ? true : false}
//           />
//         </div>
//         <div className="navigate-filter-btn">
//           <button class="btn--yellow" onClick={() => handleBookingTicket()}>
//             <img src="../public/img/ic-ticket.svg" alt="cine-start" />
//             <span>Đặt vé ngay</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavigateWrap;
