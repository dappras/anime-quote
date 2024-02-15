import React from "react";
import { Link } from "react-router-dom";
import RouteName from "../routes/routeName";

const NotFoundPage = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div style={{ fontSize: 68, fontWeight: "bold" }}>404</div>
      <div style={{ fontSize: 32, fontWeight: "lighter" }}>Page Not Found</div>
      <Link
        style={{ color: "blue", textDecoration: "underline" }}
        to={RouteName.home}
        className="mt-5"
      >
        Go To HomePage
      </Link>
    </div>
  );
};

export default NotFoundPage;
