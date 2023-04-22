import React from "react";
import "./home.css";
import { Outlet } from "react-router-dom";
function home() {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
}

export default home;
