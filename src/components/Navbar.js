import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/Context";

function Navbar() {
  const user = useContext(UserContext);
  const style = {
    color: user.textColor,
    border: `1px solid ${user.borderColor}`,
  };
  return (
    <div className="navbar-container">
      <div className="nav">
        <Link style={style} to="/">
          Home
        </Link>
      </div>
      <div className="nav">
        <Link to="/shop" style={style}>
          Shop
        </Link>
      </div>
      <div className="nav">
        <Link to="/about" style={style}>
          About
        </Link>
      </div>
      <div className="nav">
        <Link to="/rick" style={style}>
          Rick
        </Link>
      </div>
      <div className="nav">
        <Link to="/setting" style={style}>
          setting
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
