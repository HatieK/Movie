import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import AuthPage from "../pages/Auth";
import BookingTicket from "../pages/BookingTicket";
import MovieDetail from "../pages/MovieDetail";
import {
  ADMIN_PATH,
  ADMIN_PATH_CINEMA,
  ADMIN_PATH_MOVIE,
  ADMIN_PATH_USER,
  AUTH_PATH,
  HOME_PATH,
  PROFILE_PAGE,
  THEATER_DETAIL,
  THEATER_DETAIL_SEGMENT,
  TICKET_BOOKING_PATH,
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
import RegisterForm from "../pages/Auth/RegisterForm";
import SeatGrid from "../pages/RoomSeatList/SeatGrid";

const RejectedRouters = () => {
  const { currentUser } = useSelector((state) => state.authenticUser);

  if (currentUser === null) {
    return <Outlet />;
  }
  return currentUser.maLoaiNguoiDung === "QuanTri" ? (
    <Navigate to={ADMIN_PATH} />
  ) : (
    <Navigate to={HOME_PATH} />
  );
};

const ProtectedRoutes = () => {
  const { currentUser } = useSelector((state) => state.authenticUser);

  if (currentUser === null) {
    return <Navigate to={AUTH_PATH} />;
  }
  return currentUser.maLoaiNguoiDung === "QuanTri" ? (
    <Outlet />
  ) : (
    <Navigate to={HOME_PATH} />
  );
};

const useRoutesElements = () => {
  const routes = useRoutes([
    {
      path: ADMIN_PATH,
      element: <ProtectedRoutes />,
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
          path: ADMIN_PATH_CINEMA,
          element: (
            <AdminLayout>
              <CinemaManagement />,
            </AdminLayout>
          ),
        },
      ],
    },
    {
      path: PROFILE_PAGE,
      element: <Profile />,
    },

    {
      path: HOME_PATH,
      element: <HomePage />,
    },

    {
      path: AUTH_PATH,
      element: <RegisterForm />,
    },
    {
      path: TICKET_BOOKING_SEGMENT,
      element: <BookingTicket />,
    },
    {
      path: THEATER_DETAIL_SEGMENT,
      element: <RoomSeatList />,
    },
  ]);

  return routes;
};

export default useRoutesElements;
