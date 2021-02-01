import React, { Component } from "react";
import Header from "./Header";
import data from "./tableData";
import logo from "../img/0.png";

class Patients extends Component {
  tableContent() {
    return data.map((filed, index) => {
      var badge;
      switch (filed.infectionLevel) {
        case "LOW":
          badge = "warning";
          break;
        case "NORMAL":
          badge = "success";
          break;
        case "HIGH":
          badge = "danger";
          break;
        default:
          badge = "success";
      }
      return (
        <tr key={index}>
          <th scope="row">
            <img src={logo} alt="icon" />
            <div className="user-detail">
              <span> {filed.userDetail[0]}</span>
              <br></br>
              <span> {filed.userDetail[1]}</span>
            </div>
          </th>
          <td>
            <div className="birth-detail">
              <span> {filed.birthDetail[0]}</span>
              <br></br>
              <span> {filed.birthDetail[1]}</span>
            </div>
          </td>
          <td>
            <div className="register-date">
              <span> {filed.registerationDate[0]}</span>
              <br></br>
              <span> {filed.registerationDate[1]}</span>
            </div>
          </td>
          <td>
            <span className={`badge bg-${badge}`}>{filed.infectionLevel}</span>
          </td>
          {}
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="content">
        <Header title="Patients" />

        <div className="container-fluid" id="patients-table">
          <h5>All Patients</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">User Details</th>
                <th scope="col">Birth Details</th>
                <th scope="col">Registeration Date</th>
                <th scope="col">Infection level</th>
              </tr>
            </thead>
            <tbody>{this.tableContent()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Patients;
