import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark d-block d-md-none">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Covid 19 Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  <i className="fa fa-pie-chart mright"></i>
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/patients"} className="nav-link">
                  <i className="fa fa-medkit mright"></i>
                  Patients
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  <i className="fa fa-crosshairs mright"></i>
                  Link number 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  <i className="fa fa-desktop mright"></i>
                  Link number 2
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  <i className="fa fa-dot-circle-o mright"></i>
                  Link number 3
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  <i className="fa fa-envelope mright"></i>
                  Link number 4
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  <i className="fa fa-external-link mright"></i>
                  Link number 5
                </Link>
              </li>
              <hr></hr>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  <i className="fa fa-gear mright"></i>
                  Setting
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  <i className="fa fa-sign-out mright"></i>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
