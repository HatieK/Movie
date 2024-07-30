import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import AuthPage from "../pages/Auth";
import BookingTicket from "../pages/BookingTicket";
import MovieDetail from "../pages/MovieDetail";
import {
  ADMIN_PATH,
  ADMIN_PATH_ACCOUNT,
  ADMIN_PATH_CINEMA,
  ADMIN_PATH_MOVIE,
  ADMIN_PATH_USER,
  AUTH_PATH,
  HOME_PATH,
  MOVIE_DETAIL_SEGMENT,
  PROFILE_PAGE,
  THEATER_DETAIL_SEGMENT,
  TICKET_BOOKING_SEGMENT,
} from "../constants/path";
import { useSelector } from "react-redux";
import RoomSeatList from "../pages/RoomSeatList";
import Profile from "../pages/Profile";
import AdminLayout from "../layout/AdminLayout/AdminLayout";
import UserManagement from "../modules/Admin/UserManagement/UserManagement";
import MovieManagement from "../modules/Admin/MovieManagement/MovieManagement";
import AccountSetting from "../modules/Admin/AccountSetting/AccountSetting";
import CinemaManagement from "../modules/Admin/CinemaManagement/CinemaManagement";

export const RejectedRoutes = () => {
  const { pathName } = useSelector((state) => state.pathNameLogin);

  const { currentUser } = useSelector((state) => state.authenticUser);

  if (currentUser === null) {
    return <Outlet />;
  }
  return currentUser.maLoaiNguoiDung === "QuanTri" ? (
    <Navigate to={ADMIN_PATH} />
  ) : (
    <Navigate to={pathName} />
  );
};

const ProtectedRoutes = () => {
  const { currentUser } = useSelector((state) => state.authenticUser);

  if (currentUser === null) {
    return <Navigate to={AUTH_PATH} />;
  }
  return <Outlet />;
};

const ProtectedAdmin = () => {
  const { currentUser } = useSelector((state) => state.authenticUser);
  if (currentUser === null) {
    return <Navigate to={AUTH_PATH} />;
  }
  return currentUser.maLoaiNguoiDung === "QuanTri" ? (
    <Outlet />
  ) : (
    <Navigate to={AUTH_PATH} />
  );
};

const useRoutesElements = () => {
  const routes = useRoutes([
    {
      path: THEATER_DETAIL_SEGMENT,
      element: <ProtectedRoutes />,
      children: [{ path: THEATER_DETAIL_SEGMENT, element: <RoomSeatList /> }],
    },
    {
      path: PROFILE_PAGE,
      element: <ProtectedRoutes />,
      children: [{ path: PROFILE_PAGE, element: <Profile /> }],
    },
    {
      path: HOME_PATH,
      index: true,
      element: <HomePage />,
    },
    { path: AUTH_PATH, element: <AuthPage /> },
    { path: TICKET_BOOKING_SEGMENT, element: <BookingTicket /> },
    { path: MOVIE_DETAIL_SEGMENT, element: <MovieDetail /> },
    { path: THEATER_DETAIL_SEGMENT, element: <RoomSeatList /> },
    { path: PROFILE_PAGE, element: <Profile /> },

    {
      path: ADMIN_PATH,
      element: <ProtectedAdmin />,
      children: [
        {
          index: true,
          element: <Navigate to={ADMIN_PATH_USER} />,
        },
        {
          path: ADMIN_PATH_USER,
          element: (
            <AdminLayout>
              <UserManagement />
            </AdminLayout>
          ),
        },
        {
          path: ADMIN_PATH_MOVIE,
          element: (
            <AdminLayout>
              <MovieManagement />
            </AdminLayout>
          ),
        },
        {
          path: ADMIN_PATH_ACCOUNT,
          element: (
            <AdminLayout>
              <AccountSetting />
            </AdminLayout>
          ),
        },
        {
          path: ADMIN_PATH_CINEMA,
          element: (
            <AdminLayout>
              <CinemaManagement />
            </AdminLayout>
          ),
        },
      ],
    },
  ]);

  return routes;
};

// const useRoutesElements = () => {
//   const routes = useRoutes([
//     {
//       element: <MainLayout />,
//       children: [
//         {
//           path: THEATER_DETAIL_SEGMENT,
//           element: <ProtectedRoutes />,
//           children: [
//             { path: THEATER_DETAIL_SEGMENT, element: <RoomSeatList /> },
//           ],
//         },
//         {
//           path: PROFILE_PAGE,
//           element: <ProtectedRoutes />,
//           children: [{ path: PROFILE_PAGE, element: <Profile /> }],
//         },
//         {
//           path: HOME_PATH,
//           index: true,
//           element: <HomePage />,
//         },
//         { path: AUTH_PATH, element: <AuthPage /> },
//         { path: TICKET_BOOKING_SEGMENT, element: <BookingTicket /> },
//         { path: MOVIE_DETAIL_SEGMENT, element: <MovieDetail /> },
//         { path: THEATER_DETAIL_SEGMENT, element: <RoomSeatList /> },
//         { path: PROFILE_PAGE, element: <Profile /> },
//       ],
//     },
//   ]);
//   return routes;
// };

export default useRoutesElements;
