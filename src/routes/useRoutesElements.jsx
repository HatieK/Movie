import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import AuthPage from "../pages/Auth";
import BookingTicket from "../pages/BookingTicket";
import MovieDetail from "../pages/MovieDetail";
import {
  ADMIN_PATH,
  AUTH_PATH,
  HOME_PATH,
  MOVIE_DETAIL,
  TICKET_BOOKING_PATH,
  TICKET_DETAIL,
} from "../constants/path";
import { useSelector } from "react-redux";

export const RejectedRoutes = () => {
  const { pathName } = useSelector((state) => state.pathNameLogin);
  console.log("🚀pathName---->", pathName);

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
const useRoutesElements = () => {
  const routes = useRoutes([
    {
      path: HOME_PATH,
      element: <RejectedRoutes />,
      children: [
        {
          path: HOME_PATH,
          element: <HomePage />,
        },
      ],
    },
    // { path: HOME_PATH, index: true, element: <HomePage /> },
    { path: AUTH_PATH, element: <AuthPage /> },
    { path: TICKET_BOOKING_PATH, element: <BookingTicket /> },
    { path: MOVIE_DETAIL, element: <MovieDetail /> },
  ]);

  return routes;
};

export default useRoutesElements;
