import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-3 col-lg-2 d-none d-md-block" id="left">
        <label>
          <i className="fa fa-cube"></i>Covid 19 Tracker
        </label>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              to="/"
              exact
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <i className="fa fa-pie-chart"></i>
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="patients"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <i className="fa fa-medkit"></i>
              Patients
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/1"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <i className="fa fa-crosshairs"></i>
              Link number 1
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/2"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <i className="fa fa-desktop"></i>
              Link number 2
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/3"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <i className="fa fa-dot-circle-o"></i>
              Link number 3
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/4"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <i className="fa fa-envelope"></i>
              Link number 4
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/5"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <i className="fa fa-external-link"></i>
              Link number 5
            </NavLink>
          </li>
          <hr></hr>

          <li className="nav-item">
            <NavLink
              to="/6"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <i className="fa fa-gear"></i>
              Setting
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/7"
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              <i className="fa fa-sign-out"></i>
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
