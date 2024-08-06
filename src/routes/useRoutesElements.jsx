import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import {
  ADMIN_PATH,
  ADMIN_PATH_CINEMA,
  ADMIN_PATH_MOVIE,
  ADMIN_PATH_USER,
  AUTH_PATH,
  HOME_PATH,
  PROFILE_PAGE,
  THEATER_DETAIL_SEGMENT,
  TICKET_BOOKING_SEGMENT,
} from "../constants/path";
import AdminLayout from "../layout/AdminLayout/AdminLayout";
import CinemaManagement from "../modules/Admin/CinemaManagement/CinemaManagement";
import MovieManagement from "../modules/Admin/MovieManagement/MovieManagement";
import UserManagement from "../modules/Admin/UserManagement/UserManagement";
import RegisterForm from "../pages/Auth/RegisterForm";
import BookingTicket from "../pages/BookingTicket";
import HomePage from "../pages/Home";
import Profile from "../pages/Profile";
import RoomSeatList from "../pages/RoomSeatList";
import MainLayout from "../layout/MainLayout/MainLayout";

const RejectedRouters = () => {
  const { currentUser } = useSelector((state) => state.authenticUser);

  if (currentUser === null) {
    return <Outlet />;
  }
  return currentUser.maLoaiNguoiDung === "QuanTri" ? (
    <Navigate to={ADMIN_PATH} />
  ) : (
    <Outlet />
  );
};

const ProtectedRoutes = () => {
  const { currentUser } = useSelector((state) => state.authenticUser);
  if (currentUser && currentUser.maLoaiNguoiDung === "QuanTri") {
    return <Outlet />;
  }
  return <Navigate to={HOME_PATH} />;
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
      element: (
        <MainLayout>
          <Profile />
        </MainLayout>
      ),
    },

    {
      path: HOME_PATH,
      element: <RejectedRouters />,
      children: [
        {
          index: true,
          element: (
            <MainLayout>
              <HomePage />
            </MainLayout>
          ),
        },
      ],
    },

    {
      path: AUTH_PATH,
      element: <RejectedRouters />,
      children: [
        {
          index: true,
          element: <RegisterForm />,
        },
      ],
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
