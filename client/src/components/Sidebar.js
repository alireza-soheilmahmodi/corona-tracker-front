import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-3 col-lg-2 d-none d-md-block" id="left">
        <label>
          <i className="fa fa-cube"></i>Covid 19 Tracker
        </label>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active">
              <i className="fa fa-pie-chart"></i>
              Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"patients"} className="nav-link">
              <i className="fa fa-medkit"></i>
              Patients
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <i className="fa fa-crosshairs"></i>
              Link number 1
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <i className="fa fa-desktop"></i>
              Link number 2
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <i className="fa fa-dot-circle-o"></i>
              Link number 3
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <i className="fa fa-envelope"></i>
              Link number 4
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <i className="fa fa-external-link"></i>
              Link number 5
            </Link>
          </li>
          <hr></hr>

          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <i className="fa fa-gear"></i>
              Setting
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <i className="fa fa-sign-out"></i>
              Log out
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
