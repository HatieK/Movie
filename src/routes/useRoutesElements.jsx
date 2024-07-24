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
  MOVIE_DETAIL_SEGMENT,
  THEATER_DETAIL_SEGMENT,
  TICKET_BOOKING_SEGMENT,
} from "../constants/path";
import { useSelector } from "react-redux";
import RoomSeatList from "../pages/RoomSeatList";

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
    { path: TICKET_BOOKING_SEGMENT, element: <BookingTicket /> },
    { path: MOVIE_DETAIL_SEGMENT, element: <MovieDetail /> },
    { path: THEATER_DETAIL_SEGMENT, element: <RoomSeatList /> },
  ]);

  return routes;
};

export default useRoutesElements;
