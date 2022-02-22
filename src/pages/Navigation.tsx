import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <Link style={{ paddingLeft: "20px", fontSize: "30px" }} to="/home">
        Home{" "}
      </Link>
      <Link style={{ paddingLeft: "30px", fontSize: "30px" }} to={"/counter"}>
        Counter
      </Link>
      <Link style={{ paddingLeft: "30px", fontSize: "30px" }} to={"/news"}>
        News
      </Link>
      <Outlet />
    </div>
  );
};
