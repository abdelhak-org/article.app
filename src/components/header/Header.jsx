import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="articles">
          <li>Articles</li>
        </Link>
        <Link to="aboutus">
          <li>About Us</li>
        </Link>
        <Link to="createuser">
          <li>Create an Account </li>
        </Link>
        <Link to="login">
          <li>Login </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
