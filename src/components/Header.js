import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Login from "../screens/login";

function Header() {
  const [open, setstate] = useState(false);
  return (
    <div className="Header">
      <h1 className="Header-title"> MY LAND, MY WILL </h1>{" "}
      <ul className="Header-list">
        
        {/* style={{ transform: open ? "translateX(0px)" : "" }}{" "} */}
        <li id="Header-li">
          <Link to={"/"}> Home </Link> {/* <a href="#"> Home </a> */}{" "}
        </li>{" "}
        <li id="Header-li">
          <Link to={"/admin"}> AdminControls </Link> {/* <a href="#"> Home </a> */}{" "}
        </li>{" "}
        <li className="Header-log">
          {" "}
          {/* <Link to={'/signin'}><Login /></Link> */} <Login />{" "}
          {/* <a href="#">Log Out</a> */}{" "}
        </li>
      </ul>{" "}
      <i onClick={() => setstate(!open)} className="fas fa-bars Header-icon">
        {" "}
      </i>{" "}
    </div>
  );
}
export default Header;
