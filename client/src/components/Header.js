import React from "react";
import logo from "../profile.jpeg";

const Header = (props) => {
  return (
    <div className="container header">
      <div className="row">
        <label className="header-title col-xs-12 col-md-6">{props.title}</label>
        <div className="col-xs-12 col-md-6">
          <img className="profile-icon" src={logo} />
          <a href="/" className="nav-link name-box">
            alex salmond
          </a>
          <div className="header-icon">
            <a href="/">
              <i className="fa fa-bell"></i>
            </a>
            <a href="/">
              <i className="fa fa-search"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
