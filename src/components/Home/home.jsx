import React from "react";
import "./home.css";
import { Outlet } from "react-router-dom";
function home() {
  let token = localStorage.getItem("token");
  if (token) {
    return (
      <div className="wrapper">
        <Outlet />
      </div>
    );
  } else
    return (
      <div>
        <h1>Unauthorized</h1>
      </div>
    );
}

export default home;
