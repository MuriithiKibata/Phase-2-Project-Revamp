import React from "react";
import "./home.css";
import img from "./background.jpg";
import { Outlet } from "react-router-dom";
function home() {
  return (
    <div className="wrapper">
      <div className="img-cont">
        <img className="img" src={img} alt="background" />
      </div>
      <div className="card_cont">
        <Outlet />
      </div>
    </div>
  );
}

export default home;
